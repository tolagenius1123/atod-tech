# Project rules

- Never start or stop the dev server; the user runs it themselves. Ask them to start it when verification requires a running app.
- After completing a batch of changes, provide a suggested commit message for it. Do not commit unless explicitly asked.

- Do not add code comments anywhere in this project — no inline comments, block comments, or JSDoc. Code should be self-explanatory through naming and structure.
- Always follow Tailwind best practices for classes. Prefer canonical scale utilities over arbitrary values whenever an exact equivalent exists: `p-2.75` not `p-[11px]`, `leading-7.5` not `leading-[30px]`, `size-full` not `h-full w-full`, `bg-linear-to-b` not `bg-gradient-to-b`, `rounded-lg` not `rounded-[10px]` (this theme's --radius is 10px), color opacity via `white/7` not `white/[0.07]`. Named tokens beat arbitrary ratios too: `leading-tight` not `leading-[1.25]`, `leading-none` not `leading-[1]`, `leading-snug` not `leading-[1.375]`, `leading-normal` not `leading-[1.5]`. Use arbitrary values only when no canonical utility exists (e.g. `text-[72px]`, `tracking-[0.56px]`, percentages without clean fractions).
- Follow the Figma design exactly: font sizes, border radius, colors (Primary #1E338A, Secondary #F56F46, page bg #0C111D, font Inter).
- Every clickable element (buttons, links, icons) must have `cursor-pointer`.
- UI primitives (button, modal, input, sheet, etc.) come from shadcn/ui.
- Icons come from lucide-react; only use downloaded SVGs from the design when lucide has no equivalent (e.g. brand/custom glyphs).
- Images live in `src/assets/images`, icons in `src/assets/icons`, all exported through `src/assets/index.ts` and imported from `@/assets`.
- Keep components DRY: shared pieces in `src/components/shared`, layout in `src/components/layout`, page sections in `src/components/sections`.
