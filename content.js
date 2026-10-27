/* content.js - ALL the words and numbers of the site live here (one object per article A-H).
   The page layout lives in app.js + style.css. To change text, edit ONLY this file (DRY).
   Numbers come from the article; anything else is marked "verify". */
const SITE = {
A: {
  accent: "#d9480f", title: "Why Stricter Driving Tests Alone Can't Save Lives", tagline: "India's road deaths keep rising. The tougher test is not the whole answer.",
  sections: [
    { type: "stats", heading: "The problem in numbers", items: [
      { value: "1.46 lakh", label: "road deaths in 2015" }, { value: "1.83 lakh", label: "road deaths in 2025" },
      { value: "~21", label: "deaths every hour" }, { value: "Rs 23,000 cr", label: "unpaid e-challans" }] },
    { type: "bars", heading: "Road deaths: 2015 vs 2025 (lakh)", unit: " lakh", items: [
      { label: "2015", value: 1.46 }, { label: "2025", value: 1.83, hi: true }],
      note: "Source: article. Deaths rose by roughly a quarter in ten years." },
    { type: "bars", heading: "Pass mark is not the same as safety", unit: "%", items: [
      { label: "India today", value: 60 }, { label: "India planned", value: 75, hi: true }, { label: "Vietnam", value: 91 }],
      note: "Vietnam's pass mark is 91%, yet its fatality rate is about 13 per lakh people." },
    { type: "bars", heading: "Fatality rate per lakh population", unit: "", items: [
      { label: "Vietnam", value: 13 }, { label: "Singapore", value: 1.4, hi: true }],
      note: "Singapore is about 1.4. India's own rate is not given in the article, so it is not shown." },
    { type: "cards", heading: "Causes the editorial points to", items: [
      { title: "Weak enforcement", text: "Rules exist, but breaking them has few real consequences." },
      { title: "Unpaid fines, repeat offenders", text: "About Rs 23,000 crore in e-challans is unpaid, so a fine is easy to ignore." },
      { title: "Driver attitude", text: "A test checks skill on one day. Attitude is shown on every road, every day." },
      { title: "Limits of testing", text: "A harder test filters who gets a licence, but does not control behaviour after." }] },
    { type: "cards", heading: "The enforcement gap: what could close it", items: [
      { title: "Recover unpaid e-challans", text: "Link pending fines to licence or vehicle services." },
      { title: "Suspend repeat offenders", text: "Escalating action for people who keep breaking rules." },
      { title: "Enforcement technology", text: "Cameras and automated detection that work without bias or bribery." },
      { title: "Awareness campaigns", text: "Build the habit and attitude of safe driving." }] },
    { type: "quiz", heading: "Quick check", questions: [
      { q: "Vietnam has a 91% pass mark. What does this show?", options: ["Tests solve road safety", "A high pass mark alone does not guarantee low deaths", "Vietnam has no road deaths"], answer: 1, why: "Vietnam still has about 13 deaths per lakh, far above Singapore's 1.4." },
      { q: "Roughly how many Indians die on roads every hour (2025)?", options: ["About 2", "About 21", "About 210"], answer: 1, why: "1.83 lakh deaths a year is roughly 21 an hour." }] }
  ],
  sources: ["TOI editorial: 'Sense & Licence'"]
},
B: {
  accent: "#364fc7", title: "Private Influence on Executive Power: Who Restrains the Unelected?", tagline: "A neutral explainer on how private influence on policy works, and which checks keep it accountable.",
  note: "This site analyses institutions and rules. It does not judge any individual leader or company.",
  sections: [
    { type: "text", heading: "The core idea", paragraphs: [
      "The source is a satirical editorial. Its serious point: in a democracy, institutions such as legislatures, courts and regulators should restrain executive power.",
      "When informal, unelected influence does this instead, the public cannot tell whether decisions protect the country or only private interests." ] },
    { type: "cards", heading: "How private influence can reach decisions", items: [
      { title: "Lobbying", text: "Organised efforts to persuade officials. Legal and common, but should be visible." },
      { title: "Informal advisory access", text: "Meetings and calls that are not recorded or published." },
      { title: "Money and funding", text: "Donations, research grants and commercial dependence." },
      { title: "Revolving door", text: "Moving between government jobs and industry jobs." }] },
    { type: "cards", heading: "Institutional checks that restrain power", items: [
      { title: "Legislature", text: "Questions, committees and votes." }, { title: "Courts", text: "Judicial review of decisions." },
      { title: "Independent regulators", text: "Oversight bodies with their own authority." }, { title: "Free press and RTI", text: "Information that lets citizens ask questions." }] },
    { type: "table", heading: "Examples from different democracies (summary - verify before citing)", cols: ["Place", "Transparency tool", "In one line"], rows: [
      ["United States", "Lobbying Disclosure Act", "Lobbyists register and file regular reports."],
      ["United Kingdom", "Register of Consultant Lobbyists", "Consultant lobbyists must be listed on a public register."],
      ["European Union", "Transparency Register", "Groups seeking to influence EU institutions are listed."],
      ["India", "No dedicated lobbying law (verify)", "The Right to Information Act is one route to information."]] },
    { type: "cards", heading: "Safeguards a government could adopt", items: [
      { title: "Lobbying register", text: "Trade-off: more paperwork; small groups may find it harder." },
      { title: "Publish advisory meetings", text: "Trade-off: may push talks into unrecorded channels." },
      { title: "Cooling-off periods", text: "Trade-off: may discourage talented people from public service." },
      { title: "Stronger oversight bodies", text: "Trade-off: cost, and the need to keep them independent." }] },
    { type: "quiz", heading: "Quick check", questions: [
      { q: "What is the main concern the editorial raises?", options: ["Companies should never speak to government", "Informal unelected influence is hard for the public to judge", "Courts have too much power"], answer: 1, why: "Consultation is normal; hidden, unaccountable influence is the worry." }] }
  ],
  sources: ["TOI editorial: 'Trump Whisperers'", "Rules summarised from general public knowledge: verify"]
},
C: {
  accent: "#0b7285", title: "When Weather, Not Emissions, Decides", tagline: "The same emissions can give very different air in different winters.",
  sections: [
    { type: "stats", heading: "What the study found", items: [
      { value: "-40% to +70%", label: "year-to-year PM2.5 swings vs 2019-22 average" }, { value: "~0", label: "major change in emissions or policy in that period" }] },
    { type: "bars", heading: "PM2.5 change vs 2019-22 average (%)", unit: "%", items: [
      { label: "Mumbai, 2022-23 (La Nina)", value: 45 }, { label: "Jaipur, 2023-24 (El Nino)", value: 50, hi: true }, { label: "Delhi, 2023-24 (El Nino), 'over 10'", value: 10 }],
      note: "Delhi is 'over 10%' in the article, drawn as 10. Peninsula was cleaner in 2023-24. Correlation, not proof of cause." },
    { type: "cards", heading: "How weather traps or clears pollution", items: [
      { title: "Weak winds", text: "Pollution stays over the city (stagnation)." }, { title: "High pressure, shallow boundary layer", text: "Traps pollutants near the ground." },
      { title: "Rain", text: "Can wash pollutants out of the air." }, { title: "Air transport", text: "Air reaching a city may come from polluted regions far away." }] },
    { type: "bars", heading: "Climate zones: hot semi-arid share of area (%)", unit: "%", items: [
      { label: "NW India 1951-60", value: 25 }, { label: "NW India 1991-2020", value: 33, hi: true }, { label: "Peninsula (earlier)", value: 30 }, { label: "Peninsula (now)", value: 16 }],
      note: "Approximate values from the IMD/IITM study. The hot dry zone has pushed east into Uttar Pradesh, a major farming region." },
    { type: "cards", heading: "What policy could do", items: [
      { title: "ENSO-aware seasonal forecasting", text: "Warn cities early about risky winters. Trade-off: forecasts are uncertain." },
      { title: "Airshed-level action plans", text: "Cities and states plan together. Trade-off: hard coordination." },
      { title: "Crop-calendar advisories", text: "Help farmers adjust sowing and harvest timing. Trade-off: needs good local data." }] },
    { type: "quiz", heading: "Quick check", questions: [
      { q: "Does the study say El Nino always worsens pollution?", options: ["Yes", "No, the authors caution against that", "It never matters"], answer: 1, why: "The authors say correlations cannot be assumed for other years." }] }
  ],
  sources: ["TOI: 'Study traces how an El Nino changed the pollution map'", "Atmospheric Pollution Research; IMD/IITM study"]
},
D: {
  accent: "#2b8a3e", title: "Building a Tech-Ready, Self-Reliant Force", tagline: "A public-policy explainer on the Army's Land Warfare Doctrine 2026.",
  note: "Public-policy level only. No tactical, targeting or weapons-design content.",
  sections: [
    { type: "stats", heading: "At a glance", items: [{ value: "2026", label: "Land Warfare Doctrine released" }, { value: "2018", label: "previous doctrine" }, { value: "3 levels", label: "AI skill programme for officers" }] },
    { type: "cards", heading: "Technology pillars named in the article", items: [
      { title: "Drones and surveillance", text: "Drone operation to become a secondary skill across the force." }, { title: "AI", text: "A three-level AI skill programme for officers." },
      { title: "Multi-domain operations", text: "Working across land, air, sea, space and cyber." }, { title: "Manned-unmanned teaming", text: "People and machines working together." },
      { title: "Resilient logistics", text: "Supply systems that keep working under stress." }, { title: "Self-reliance and whole-of-nation", text: "Indigenous capability with industry, academia and civil agencies." }] },
    { type: "table", heading: "2018 vs 2026 (complete the 2018 column from your source)", cols: ["Theme", "2026 doctrine (article)", "2018 doctrine"], rows: [
      ["Technology", "Drones, AI, surveillance", "ADD FROM SOURCE"], ["Approach", "Whole-of-nation, multi-domain", "ADD FROM SOURCE"], ["Industry", "Self-reliance (atmanirbharta)", "ADD FROM SOURCE"]] },
    { type: "timeline", heading: "Skilling roadmap (from the article)", items: [
      { when: "Level 1", what: "Foundational AI awareness for officers (verify level names in the article)." }, { when: "Level 2", what: "Applied AI skills." }, { when: "Level 3", what: "Advanced AI skills." }, { when: "Across the force", what: "Drone operation as a secondary skill." }] },
    { type: "cards", heading: "Civilian-side policies that help", items: [
      { title: "Indigenous AI and drone R&D", text: "Trade-off: long timelines and uncertain returns." }, { title: "Academia-industry partnerships", text: "Trade-off: openness vs security." },
      { title: "AI skilling pipelines", text: "Trade-off: training takes time and money." }, { title: "Ethical guardrails for autonomy", text: "Keep humans accountable. Trade-off: may slow adoption." }] }
  ],
  sources: ["TOI: 'Army's land warfare doctrine 2026 stresses on emerging tech'"]
},
E: {
  accent: "#862e9c", title: "How to Judge a Study", tagline: "Facts are hares, but truth is a tortoise.",
  sections: [
    { type: "stats", heading: "The overload", items: [{ value: "~7 million", label: "scholarly articles in 2025" }, { value: "19,000+", label: "per day" }, { value: "~3 years", label: "for a systematic review" }, { value: "up to 50,000", label: "lives possibly lost to bad sleep advice" }] },
    { type: "cards", heading: "Evidence hierarchy (strong to weak)", items: [
      { title: "1. Systematic review / meta-analysis", text: "Combines all relevant studies. The strongest test." }, { title: "2. Randomised controlled trial", text: "Fair comparison between groups." },
      { title: "3. Observational study", text: "Shows links, but cannot prove cause." }, { title: "4. Single small study, anecdote", text: "Weakest. Often what goes viral." }] },
    { type: "cards", heading: "Vote counting vs systematic review", items: [
      { title: "Vote counting (misleading)", text: "4 studies say no, 5 say yes, so yes wins? Ignores size and quality." }, { title: "Systematic review (better)", text: "Weighs every study by size and quality with a stated method." }] },
    { type: "timeline", heading: "Case study: infant sleep advice", items: [
      { when: "1945", what: "A study led to advice that babies sleep face down." }, { when: "Decades later", what: "A spate of sudden infant death cases followed." }, { when: "1991", what: "After studies of studies, governments advised back-sleeping." }] },
    { type: "cards", heading: "What a government could do", items: [
      { title: "Fund living systematic reviews", text: "Trade-off: ongoing cost." }, { title: "Label health claims in media", text: "Trade-off: free-speech and enforcement questions." }, { title: "Standards for AI-assisted synthesis", text: "Trade-off: slows adoption, but AI can hallucinate." }] },
    { type: "quiz", heading: "Which is stronger evidence?", questions: [
      { q: "A viral post cites one small study. Another source cites a systematic review. Which is stronger?", options: ["The single study", "The systematic review", "Both equal"], answer: 1, why: "Systematic reviews combine many studies." },
        { q: "Why is vote counting misleading?", options: ["It ignores study size and quality", "It is too slow", "It uses AI"], answer: 0, why: "Five tiny studies can be outweighed by four large ones." }] }
  ],
  sources: ["TOI Mindfield: 'Facts Are Hares, But Truth Is A Tortoise' (on Helen Pearson's Beyond Belief)"]
},
F: {
  accent: "#e67700", title: "Job Satisfaction: Beyond Pay", tagline: "What you do, how much you earn, where you work, who you work with.",
  sections: [
    { type: "cards", heading: "The four-factor model (the uncle's advice)", items: [
      { title: "WHAT you do", text: "The work itself." }, { title: "HOW MUCH you earn", text: "Pay. Fair pay still counts." }, { title: "WHERE you work", text: "Place, conditions and setting." }, { title: "WHO you work with", text: "People, trust and culture." }] },
    { type: "assessment", heading: "Self-assessment: your own four factors", intro: "For each factor, set how important it is to you and how satisfied you are now (1-5).", factors: [
      { key: "what", label: "What I do" }, { key: "pay", label: "How much I earn" }, { key: "where", label: "Where I work" }, { key: "who", label: "Who I work with" }] },
    { type: "timeline", heading: "The story in the article", items: [
      { when: "1993", what: "Call-centre job: poor pay, dull work, tiny airless office, but lifelong friendships." }, { when: "Later", what: "A 'dream job', very well paid in New York, disappoints because of mistrust and power-play." }, { when: "Conclusion", what: "People matter most, but fair pay still counts." }] },
    { type: "cards", heading: "Workplace policy ideas", items: [
      { title: "Fair-wage standards", text: "Trade-off: cost for employers." }, { title: "Workplace culture audits", text: "Trade-off: surveys can be gamed." }, { title: "Early-career worker protections", text: "Trade-off: may reduce flexibility." }] },
    { type: "text", heading: "A caution", paragraphs: ["The article is one person's story. It illustrates the four factors; it is not proof for everyone."] }
  ],
  sources: ["TOI: 'When The Pay Was Terrible, But The Friendships Priceless'"]
},
G: {
  accent: "#a61e4d", title: "Saving Mount Carmel, Chimbel", tagline: "A protected but neglected Indo-Portuguese church in Goa.",
  sections: [
    { type: "stats", heading: "At a glance", items: [{ value: "~1749-50", label: "built by Tertiary Carmelites" }, { value: "Dec 2020", label: "notified as protected" }, { value: "~7 km", label: "from Old Goa" }] },
    { type: "timeline", heading: "History and present", items: [
      { when: "~1749-1750", what: "Church of Our Lady of Mount Carmel built, Indo-Portuguese Mannerist style." }, { when: "December 2020", what: "Notified as a protected heritage site." },
      { when: "Today", what: "Most of the structure and walls have collapsed; tree growth is destabilising the facade." }, { when: "Now", what: "Locals and the Mount Carmel Conservation Association press for urgent conservation." }] },
    { type: "cards", heading: "Conservation needs", items: [
      { title: "Structural stabilisation", text: "Secure the facade and remaining walls." }, { title: "Control tree growth", text: "Roots are destabilising the facade." }, { title: "Green space", text: "Part of the proposal for the site." }, { title: "Community participation", text: "Locals already organised." }] },
    { type: "cards", heading: "Joining the Old Goa heritage circuit", items: [
      { title: "Distance", text: "About 7 km from Old Goa." }, { title: "Visitor route", text: "Signage and trail linking it to Old Goa sites." }, { title: "Balance", text: "Tourism income vs wear on a fragile ruin." }] },
    { type: "cards", heading: "Policy options", items: [
      { title: "Conservation funding models", text: "Trade-off: public funds vs private or CSR dependence." }, { title: "Community-led stewardship", text: "Trade-off: needs training and oversight." },
      { title: "Heritage-tourism integration", text: "Trade-off: crowds can damage the site." }, { title: "Urban-planning buffers", text: "Trade-off: limits nearby development." }] },
    { type: "quiz", heading: "Quick check", questions: [
      { q: "What is the key problem the article highlights?", options: ["The site is not protected", "It is protected on paper but still decaying", "It is a new building"], answer: 1, why: "It was notified in Dec 2020, yet walls have collapsed." }] }
  ],
  sources: ["TOI Goa: 'Govt boost for historic Mount Carmel site, locals for urgent conservation'"]
},
H: {
  accent: "#1864ab", title: "Let the Mind Think, and You Simply Be", tagline: "Meditation as a public wellbeing practice.",
  note: "General information only. This is not medical or therapy advice. If you are struggling, please talk to a mental-health professional or someone you trust.",
  sections: [
    { type: "cards", heading: "Core ideas from the article", items: [
      { title: "Understand, don't obtain", text: "The Self is not something to get; we already experience it." }, { title: "Don't fight the mind", text: "Let thoughts arise. Notice useful ones, ignore unwanted ones until they fade." },
      { title: "Sadhana", text: "Being at ease with your mind: calm, honest, free of pettiness, selfishness and ego." }, { title: "Find your own method", text: "Through steady practice." }] },
    { type: "exercise", heading: "Try it: observe your thoughts (2 minutes)", steps: [
      { text: "Sit comfortably. Breathe normally.", seconds: 20 }, { text: "Notice a thought. Say silently: 'thinking'.", seconds: 30 }, { text: "Let it pass like a cloud. Do not judge it.", seconds: 30 }, { text: "Return to your breath.", seconds: 40 }] },
    { type: "cards", heading: "How this connects to mindfulness research (verify before citing)", items: [
      { title: "Structured programmes", text: "Mindfulness-based programmes such as MBSR and MBCT have been studied for stress and low mood." }, { title: "Evidence is mixed", text: "Benefits are moderate for some people; it is not a cure and does not replace care." }] },
    { type: "cards", heading: "Secular public wellbeing policy options", items: [
      { title: "Mindfulness in schools and workplaces", text: "Trade-off: quality varies; must be voluntary and secular." }, { title: "Stress management in public health", text: "Trade-off: needs trained staff." }, { title: "Access to counselling", text: "Trade-off: cost and workforce shortage." }] }
  ],
  sources: ["TOI Speaking Tree: 'Let Mind Think And You Simply Be'"]
}
};
