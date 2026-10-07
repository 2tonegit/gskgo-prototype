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

Open the URL on a laptop of at least 1100px width. The presenter panel on the right jumps to any step. Press **Reset demo** before you start.

| # | Tap | Say (one line) | Time |
|---|---|---|---|
| 1 | Start → Dra. Lucía Martín → notification → Verify → consent: all 3 on → Continue | "One notification, at the time she chose. Only verified doctors get in (RD 1416/1994), and she decides what we use." | 20 s |
| 2 | ★ Briefing assembles → "Why am I seeing this?" | "AI writes nothing. It picks 3 items from 38 approved modules for her region. 4 messages held back: no spam." | 30 s |
| 3 | Region card → Check a patient group → 50–64 + Immunosuppressive → Show the patient leaflet (QR) | "Her real question, answered in 5 seconds with its source. The QR opens the Ministry leaflet, not promotional material." | 30 s |
| 4 | Ask → type *"Mi paciente Ana García, 68 años, tuvo fiebre tras la vacuna"* | "The name and age are removed and the report goes to Pharmacovigilance, never to the rep." | 20 s |
| 5 | Me → turn off "Personalise my briefing" → Turn it off → This week | "Saying no to AI doesn't lose the service: she gets the standard briefing." | 15 s |
| 6 | Panel: Marketing 1 → 2 → 3 → 5 → Switch to Dra. Martín's view → notification | "Her question becomes an insight, a brief and an MLR-approved card. Two weeks later: *You asked, we answered*." | 35 s |

If time is short, show steps 2, 3, 4 and 6. Check the QR screen once on the venue Wi-Fi.

Turn on the measurement lens toggle in the panel to show the KPI levels (L1–L4) on every screen.

## Branding

The header uses the official GSK logo (supplied by the team) with "GO" set beside it as the product name; the logo itself is unaltered. Because the link is public, the start screen keeps the line "Student concept … Not affiliated with or endorsed by GSK."
