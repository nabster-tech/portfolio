---
description: "Update portfolio content from a resume, new project, bio change, experience update, education change, or contact edit while keeping src/data/personalData.ts as the source of truth."
name: "Update Portfolio Content"
argument-hint: "Describe the content change to make, or paste project/resume details"
agent: "agent"
---
Update this portfolio's content using the user's request as the source material.

Requirements:
- Prefer editing [src/data/personalData.ts](../src/data/personalData.ts) instead of hardcoding text into page components.
- Use [PORTFOLIO_CUSTOMIZATION.md](../PORTFOLIO_CUSTOMIZATION.md) only as guidance; prefer the live source if documentation and code diverge.
- Preserve the existing TypeScript interfaces, field names, and data shape.
- Update related image paths, links, or case study references only if the requested content requires it.
- Keep copy concise, specific, and suitable for a professional portfolio.
- If required information is missing, ask only the smallest set of targeted follow-up questions needed to complete the change safely.
- When files are modified, validate with `npm run build` and `npm run lint` before finishing.

Output:
- Summarize the content that was updated.
- List any fields that remain missing, ambiguous, or intentionally unchanged.
