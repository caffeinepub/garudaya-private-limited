# Specification

## Summary
**Goal:** Replace the current white-background GARUDAYA logo with a cleaned, production-ready transparent logo and ensure it displays clearly and proportionally in the site header and footer across light/dark themes.

**Planned changes:**
- Add a new transparent-background GARUDAYA logo asset under `frontend/public/assets/generated` (crisp, tightly cropped, web-friendly).
- Update `frontend/src/components/site/SiteHeader.tsx` to use the new transparent logo and ensure correct sizing/aspect ratio (no stretching) with clear visibility in light/dark themes.
- Update `frontend/src/components/site/SiteFooter.tsx` to use the new transparent logo and ensure correct sizing/aspect ratio (no stretching) with clear visibility in light/dark themes.

**User-visible outcome:** The header and footer show a properly rendered GARUDAYA logo with a transparent background that remains clear and undistorted on both light and dark theme backgrounds.
