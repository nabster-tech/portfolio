---
description: "Use when editing the home page, hero, work, skills, scroll animations, parallax decorations, navigation interactions, or the 3D scene. Covers GSAP selector hooks, Lenis cleanup, Framer Motion interplay, and GitHub Pages-safe link behavior."
name: "Home Animation Guidelines"
applyTo: ["src/pages/Home/**", "src/components/Scene3D/**", "src/components/Navigation/**"]
---
# Home Animation Guidelines

- Preserve `.animate-on-scroll` and `.parallax-bg` hooks used in [src/pages/Home/Home.tsx](../src/pages/Home/Home.tsx). If markup changes, update the GSAP selector logic in the same change.
- Keep scroll-driven animation setup and cleanup paired. New `ScrollTrigger`, event listener, or `requestAnimationFrame` work should be reverted or destroyed in the component lifecycle.
- Treat [src/hooks/useSmoothScroll.ts](../src/hooks/useSmoothScroll.ts) as the global scroll layer. Avoid adding motion logic that assumes raw native scroll timing or introduces a competing smooth-scroll library.
- Keep responsibilities clear: Framer Motion handles component and page transitions, while GSAP handles scroll-triggered sequences unless there is a concrete reason to consolidate them.
- Maintain mobile performance when changing [src/components/Scene3D/Scene3D.tsx](../src/components/Scene3D/Scene3D.tsx) or stacking multiple motion systems. Favor incremental visual changes over heavier geometry, particle, or scroll workloads.
- When changing navigation or in-page links around the landing page, keep React Router and GitHub Pages base-path behavior intact. Avoid new root-relative URLs that bypass `import.meta.env.BASE_URL`.
