# GSKGO prototype (Team 3, WG 3)

A single-file PWA prototype for the GSKGO concept: a 2-minute regional shingles vaccination briefing for primary-care GPs in Spain, built only from approved content.

## Deploy (GitHub Pages, about 3 minutes)

**Option A: replace the existing repo** (`2tonegit/continuo-prototype`)
1. Delete the old `index.html`, `manifest.webmanifest`, `sw.js` and icons.
2. Upload every file from this folder, including `.nojekyll`.
3. Commit. Pages redeploys in 1–2 minutes.

**Option B: create a new repo** (cleaner URL, e.g. `gskgo-prototype`)
1. Create a public repo and upload all files.
2. Go to Settings → Pages → Deploy from branch → `main` / root.
3. The URL will be `https://<user>.github.io/gskgo-prototype/`.

Notes:
- The service worker cache is renamed (`gskgo-v2`), so old Continuo caches won't interfere.
- If a laptop still shows the old version, hard-reload with Cmd/Ctrl+Shift+R.
- Add `?fast` to the URL to skip the loading animations in a rushed demo.

## Demo (2.5 minutes, matches deck slide 6)

Open the URL on a laptop of at least 1100px width. The presenter panel on the right jumps to any step. Press **Reset demo** before you start. Opening line: *"This is Marketing's engine; the doctor's phone is where you see it work."*

| # | Tap | Say (one line) | Time |
|---|---|---|---|
| 1 | Start → Dra. Lucía Martín → notification → Verify → consent: all 3 on → Continue | "Only verified doctors get in. She decides what we use, and can say no and still get the standard briefing." | 15 s |
| 2 | ★ Briefing assembles → "4 messages held back" → "Why am I seeing this?" | "AI writes nothing: 3 items from 38 approved modules. Marketing's engine held back 4 messages her rep already covered." | 25 s |
| 3 | Region card → Check a patient group → 50–64 + Immunosuppressive → patient leaflet (QR) | "Her real question, answered in seconds with its source." | 20 s |
| 4 | Ask → type *"Mi paciente Ana García, 68 años, tuvo fiebre tras la vacuna"* | "Name and age removed; routed to Pharmacovigilance, never to the rep." | 15 s |
| 5 | Panel → Marketing 1 (Insights home: approve the fatigue pause) → 2 (Emerging need) → 3 (AI brief) → 4 (Plan) → Approve & send to MLR → 6 (Pilot dashboard) | "169 signals become one insight, a brief from approved claims and a plan coordinated with reps, in minutes. The dashboard shows coverage in pilot vs control areas: the ROI number." | 55 s |
| 6 | Switch to Dra. Martín's view → notification | "Two weeks later: *You asked, we answered*." | 20 s |

If short on time, cut step 3. New in this version: the doctor's dashboard and "Request from GSK" in the Me tab, and the Marketing Dashboard tab. Check the QR screen once on the venue Wi-Fi.

Turn on the measurement lens toggle in the panel to show the KPI levels (L1–L4) on every screen.

## Branding

The header uses the official GSK logo (supplied by the team) with "GO" set beside it as the product name; the logo itself is unaltered. Because the link is public, the start screen keeps the line "Student concept … Not affiliated with or endorsed by GSK."
