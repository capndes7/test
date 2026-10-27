/* app.js - rendering engine. Each section "type" in content.js has ONE small renderer below.
   Add a new type = add one function to RENDERERS (orthogonal, no other change). */

// h(): tiny helper to build DOM safely (uses textContent, so no HTML injection)
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  for (const kid of kids.flat()) el.append(kid instanceof Node ? kid : document.createTextNode(kid ?? ""));
  return el;
}

const RENDERERS = {
  text: s => s.paragraphs.map(p => h("p", {}, p)),

  stats: s => h("div", { class: "grid" }, s.items.map(i =>
    h("div", { class: "card stat" }, h("div", { class: "v" }, i.value), h("div", { class: "l" }, i.label)))),

  cards: s => h("div", { class: "grid" }, s.items.map(i =>
    h("div", { class: "card" }, h("h3", {}, i.title), h("p", {}, i.text)))),

  bars: s => {
    const max = Math.max(...s.items.map(i => i.value));
    const box = h("div", { class: "bars card" }, s.items.map(i =>
      h("div", { class: "row" }, h("span", {}, i.label),
        h("div", { class: "track" }, h("div", { class: "fill" + (i.hi ? " hi" : ""), style: `width:${(i.value / max) * 100}%` })),
        h("span", { class: "val" }, i.value + (s.unit || "")))));
    if (s.note) box.append(h("div", { class: "caption" }, s.note));
    return box;
  },

  table: s => h("div", { class: "table-wrap" }, h("table", {},
    h("thead", {}, h("tr", {}, s.cols.map(c => h("th", {}, c)))),
    h("tbody", {}, s.rows.map(r => h("tr", {}, r.map(c => h("td", {}, c))))))),

  timeline: s => h("div", { class: "timeline" }, s.items.map(i =>
    h("div", { class: "item" }, h("div", { class: "when" }, i.when), h("div", {}, i.what)))),

  quiz: s => h("div", {}, s.questions.map(q => {
    const why = h("div", { class: "why" });
    const opts = q.options.map((o, idx) => h("button", { class: "opt", onclick: () => {
      opts.forEach((b, j) => { b.className = "opt" + (j === q.answer ? " right" : j === idx ? " wrong" : ""); b.disabled = true; });
      why.textContent = (idx === q.answer ? "Correct. " : "Not quite. ") + q.why;
    } }, o));
    return h("div", { class: "card", style: "margin-bottom:12px" }, h("h3", {}, q.q), opts, why);
  })),

  assessment: s => {
    const state = {}; const out = h("div", { class: "result" }, "Move the sliders, then press the button.");
    const rows = s.factors.map(f => {
      state[f.key] = { imp: 3, sat: 3 };
      const mk = k => h("input", { type: "range", min: 1, max: 5, value: 3, oninput: e => state[f.key][k] = +e.target.value });
      return h("div", { class: "slider-row" }, h("strong", {}, f.label),
        h("label", {}, "Importance ", mk("imp")), h("label", {}, "Satisfaction ", mk("sat")));
    });
    const btn = h("button", { onclick: () => {
      const gaps = s.factors.map(f => ({ l: f.label, gap: state[f.key].imp - state[f.key].sat, imp: state[f.key].imp }))
        .sort((a, b) => b.gap - a.gap || b.imp - a.imp);
      const top = gaps[0];
      out.textContent = top.gap > 0
        ? `Biggest gap: "${top.l}" (matters ${state[s.factors.find(f => f.label === top.l).key].imp}/5, but satisfaction is lower). Start the conversation there.`
        : "No factor matters more to you than your current satisfaction. A good sign.";
    } }, "Show my biggest gap");
    return h("div", { class: "card" }, h("p", {}, s.intro), rows, btn, out);
  },

  exercise: s => {
    const box = h("div", { class: "timer card" }, "Press Start. Take it gently.");
    let timer = null;
    const start = h("button", { onclick: () => {
      clearInterval(timer);
      let step = 0, left = s.steps[0].seconds;
      const show = () => box.textContent = `${s.steps[step].text}  (${left}s)`;
      show();
      timer = setInterval(() => {
        left--;
        if (left <= 0) { step++; if (step >= s.steps.length) { clearInterval(timer); box.textContent = "Done. Notice how you feel. Stop anytime you need to."; return; } left = s.steps[step].seconds; }
        show();
      }, 1000);
    } }, "Start");
    const stop = h("button", { class: "ghost", style: "margin-left:8px", onclick: () => { clearInterval(timer); box.textContent = "Stopped. You can restart anytime."; } }, "Stop");
    return h("div", {}, box, h("p", {}, start, stop));
  },
};

function render(code) {
  const T = SITE[code]; if (!T) return;
  document.documentElement.style.setProperty("--accent", T.accent);
  document.title = T.title;
  document.getElementById("title").textContent = T.title;
  document.getElementById("tagline").textContent = T.tagline;
  const note = document.getElementById("note"); note.hidden = !T.note; note.textContent = T.note || "";
  const nav = document.getElementById("nav"); nav.replaceChildren();
  const root = document.getElementById("sections"); root.replaceChildren();
  T.sections.forEach((s, n) => {
    const id = "s" + n;
    nav.append(h("a", { href: "#" + id }, s.heading.split(":")[0].slice(0, 22)));
    const body = RENDERERS[s.type](s);
    root.append(h("section", { class: "block", id }, h("h2", {}, s.heading), body));
  });
  document.getElementById("footer").replaceChildren(h("strong", {}, "Sources: "), T.sources.join(" | "),
    h("p", {}, "Numbers are taken from the article; items marked 'verify' need checking. Built for a lab exam."));
}

const picker = document.getElementById("picker");
Object.keys(SITE).forEach(k => picker.append(h("option", { value: k }, `${k}: ${SITE[k].title.slice(0, 40)}`)));
const start = (new URLSearchParams(location.search).get("topic") || DEFAULT_TOPIC).toUpperCase();
picker.value = start; picker.hidden = !SHOW_TOPIC_PICKER;
picker.addEventListener("change", () => render(picker.value));
render(start);
