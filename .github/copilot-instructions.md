# Project Guidelines

## Architecture
- This workspace is a React 18 + TypeScript + Vite single-page app deployed to GitHub Pages under the `/portfolio/` subpath.
- Keep routing and asset paths compatible with subpath deployment. Preserve `Router basename={import.meta.env.BASE_URL}` in [src/App.tsx](../src/App.tsx) and `base: "/portfolio/"` in [vite.config.ts](../vite.config.ts).
- Preserve the `postbuild` step in [package.json](../package.json) that copies `dist/index.html` to `dist/404.html`; it is required for SPA routing on GitHub Pages.
- Treat [src/data/personalData.ts](../src/data/personalData.ts) as the primary source of truth for portfolio content. Prefer updating structured data there instead of hardcoding biography, project, or contact copy inside page components.
- The main cross-cutting systems are theme context, Lenis smooth scrolling, Framer Motion page transitions, GSAP scroll triggers, and the 3D scene component. Check the existing implementation before changing any of those behaviors.

## Code Style
- Follow the existing React function-component pattern and keep component styles in their co-located `.css` files.
- Use the CSS variable theme system defined in [src/index.css](../src/index.css). When changing colors or theme behavior, update both dark and light theme variables and keep the `data-theme` attribute flow used by [src/contexts/ThemeContext.tsx](../src/contexts/ThemeContext.tsx).
- Keep TypeScript strict-mode clean. This repo enables `strict`, `noUnusedLocals`, and `noUnusedParameters` in [tsconfig.json](../tsconfig.json), so unused imports, variables, and parameters will break validation.
- Prefer minimal, targeted edits. Do not introduce new state containers, styling systems, or routing patterns unless the task requires them.

## Build And Validation
- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Validate production output with `npm run build`.
- Run `npm run lint` before finishing code changes; ESLint is configured with `--max-warnings 0`.
- No automated test suite is configured in this workspace. Use build + lint plus manual browser validation for routing, theming, animations, and responsive behavior.

## Conventions
- Preserve GSAP selector hooks such as `.animate-on-scroll` and `.parallax-bg` in [src/pages/Home/Home.tsx](../src/pages/Home/Home.tsx) when refactoring the home page, or update the GSAP setup in the same change.
- Smooth scrolling is initialized globally through [src/hooks/useSmoothScroll.ts](../src/hooks/useSmoothScroll.ts). Clean up animation or scroll listeners in `useEffect` returns when adding new motion logic.
- Navigation and route changes should stay compatible with React Router on a GitHub Pages deployment. Avoid hardcoded root-relative URLs that ignore the configured base path.
- When documentation conflicts with the live source, prefer the live source. Some longer docs are useful for context but are not always fully current.

## Reference Docs
- See [README.md](../README.md) for the project overview and npm scripts.
- See [TECHNICAL_DOCUMENTATION.md](../TECHNICAL_DOCUMENTATION.md) for architecture and library context.
- See [PORTFOLIO_CUSTOMIZATION.md](../PORTFOLIO_CUSTOMIZATION.md) for content-editing guidance centered on [src/data/personalData.ts](../src/data/personalData.ts).
- See [Test_Summary.md](../Test_Summary.md) for the last recorded manual test report and known runtime risks.
