# Youssef Mohamed — Portfolio

React + TypeScript + Vite + Tailwind CSS v4.

```bash
npm run dev
```

Node is installed at `C:\Program Files\nodejs` but is not on PATH in every shell. If
`npm` is not found, prefix your session with:

```bash
$env:PATH = "$env:ProgramFiles\nodejs;$env:PATH"
```

## Editing content

All copy lives in `src/content.ts` — your name, email, nav links, project titles,
categories, years, and the services list. The hero greeting and pill labels are in
`src/components/Hero.tsx`.

## Videos

Videos are served from `public/videos/`. `hero.mp4` is the scrubbable background;
the rest back the work grid and showreel.

**Before deploying, compress these.** The source files total ~530 MB, which is far too
heavy for the web — a visitor would download ~100 MB just to see one grid tile animate.
Target roughly 3–8 MB per grid preview and generate real poster images:

```bash
ffmpeg -i input.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart output.mp4
ffmpeg -i input.mp4 -ss 00:00:03 -vframes 1 -vf scale=1280:-2 poster.jpg
```

Once posters exist, add `poster="/videos/<name>.jpg"` to the tile videos in
`src/components/ProjectTile.tsx` and drop the seek workaround — grid tiles currently
paint a still by seeking, which costs a range request per tile.

Until then, each project takes an optional `posterAt` (0–1) in `src/content.ts` setting
which point in the clip to freeze on. It defaults to `0.3`; O3 Sigma and Kowens are set
to `0.6` because their frames at 30% are too dark to read as thumbnails.

## Notes

- `npm run lint` fails in this environment: Windows Application Control blocks oxlint's
  native binary. Not a code issue.
- The hero video scrubs with horizontal mouse movement. On touch devices (no fine
  pointer) and under `prefers-reduced-motion` it falls back to muted loop playback.
