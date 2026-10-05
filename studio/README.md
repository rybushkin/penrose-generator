# Pattern Studio 0.3.0

Standalone successor to Penrose Generator 0.1.0. Bots & Bones 1.0 design.
The original page and source files remain at `../index.html`.

From the parent repository directory:

```sh
python3 -m http.server 8891 --bind 127.0.0.1
```

Open `http://127.0.0.1:8891/studio/` in Dia. No build/install required.
Serving the parent also provides the Original link and shared seedrandom library.

## Use

The studio opens with an 18-second silent, browser-rendered Remotion intro.
Pause or Replay it, or choose Open generator immediately. A shared `#s=` URL
opens the editor directly. Reduced motion shows the final mosaic; playback is
available explicitly. Intro playback never changes your saved artwork.

The built Player bundle is included, so the static server above remains enough.
To rebuild it after editing `intro/player.jsx`:

```sh
cd studio/intro
npm ci
npm run build
```

React 19.3.0, Remotion/Player 4.0.533 and Vite 8.3.2 are pinned in the local
package/lockfile. There is no rendering server or MP4 asset.

Choose a preset; edit Geometry, Color or Compose. Drag to pan, scroll/pinch
to zoom, click a tile to inspect/select. Arrow keys pan on the focused canvas;
plus/minus zoom, zero recentres, Escape clears the inspection highlight.
Lines view retains the original multigrid exploration.

New composition changes pattern phase even with zero disorder. Palette lock
keeps colors when generating new compositions. Seed changes only disorder.

Save up to 12 browser-local variants; Compare displays two choices side by
side. Session settings survive reload. Share serializes settings in the URL;
saved variation lists and temporary selection highlights are not shared.
Local storage is specific to the browser and URL origin, not cloud synced.

Export PNG (up to 4096px longest edge) or SVG. Phone, poster, square and
landscape crops are previewed on the main canvas. Transparent export omits
the background; tile edges retain the selected edge color. Inspection
highlights are not part of the exported artwork.

## Checks

```sh
node --test studio/tests/*.test.cjs
```

Browser evidence: project `qa/pattern-studio/`.
Design and agreed scope: project `docs/DESIGN.md` and
`docs/plans/2026-10-03-pattern-studio.md`.
Intro plan/evidence: `docs/plans/2026-10-05-pattern-studio-intro.md` and
`qa/2026-10-05-pattern-intro/` at the project root.

## Attribution

Multigrid construction adapted from the original generator's
`vue-definitions.js` and Pattern Collider by Aatish Bhatia (MIT).
Original license: `../LICENSE`. Local seedrandom: `../libraries/seedrandom.min.js`.
Local Geist font license: `assets/fonts/LICENSE.txt`.
No analytics, CDN, accounts, backend or runtime network dependencies.
