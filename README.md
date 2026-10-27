# Track 1 - Issue-focused website (vibe coding)  (manual: Section 5)

## What is here
| File | Job |
|---|---|
| `index.html` | Page skeleton (almost never edited) |
| `style.css` | Look and feel. Colours/fonts are variables at the top |
| `content.js` | ALL words and numbers, one block per article A-H |
| `app.js` | Turns content.js into the page (one small renderer per section type) |
| `config.js` | One line: `DEFAULT_TOPIC = "A"` - set YOUR letter |

## See it right now (no install)
Double-click `index.html`. Use the dropdown on top to switch articles, or add `?topic=C` to the address.

## In the exam: the 5-step plan
1. Set `DEFAULT_TOPIC` in `config.js` to your letter. Open `index.html` - you already have a working site.
2. Open `content.js`, find your block. Re-read the article and improve the text/numbers (the numbers are already from the article).
3. Use your AI coding assistant (Copilot etc.) for ONE small change at a time and commit after each (small iterations).
   Good prompts are in the manual, Section 5.4.
4. Take screenshots (desktop + phone width). Press F12, click the phone icon to get phone view.
5. Publish: GitHub Pages (manual Section 8). Put these files in a folder called `docs` in your repo.

## Section types you can use in content.js
`stats`, `cards`, `bars`, `table`, `timeline`, `quiz`, `text`, plus special widgets:
`assessment` (job-satisfaction sliders, article F) and `exercise` (guided thought-observation timer, article H).
To add a new type: write one function in `RENDERERS` inside `app.js`. Nothing else changes.

## Things to fix by hand (honest list)
- Article D: the "2018 doctrine" column says ADD FROM SOURCE. Fill it or delete the column.
- Article D: skilling "Level 1/2/3" names are placeholders - check the article.
- Articles B and H: rows marked "verify" are general knowledge; confirm or remove.
- Bars for article C use approximate values read from the article text.

## Design principles to quote
DRY (content separated from layout; one renderer per type), orthogonality (change text without touching code),
small iterations (commit after each change), documentation (these READMEs), accessibility (semantic HTML,
readable contrast, dark mode, works on phone), no external libraries (opens offline, nothing to break).
