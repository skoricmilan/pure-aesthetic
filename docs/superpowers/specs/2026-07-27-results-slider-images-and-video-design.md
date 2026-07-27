# Results Slider: New Images + Video — Design Spec
Date: 2026-07-27

## Scope

Add 3 new before/after result cards to the existing results slider and a video section below the slider within `#rezultati`.

## 1. New Slider Cards

Three new `result-item` cards appended to `.results-track` in `index.html`, following the existing card pattern:

| # | Label | Before | After |
|---|-------|--------|-------|
| 7 | Botoks - Čeona regija | `botox11.jpg` | `botox12.jpg` |
| 8 | Botoks - Mrštilje | `botox21.jpg` | `botox22.jpg` |
| 9 | Botoks - Okoloočna regija | `botox31.jpg` | `botox32.jpg` |

- Images are `.jpg` only (no `.webp` variants available), so no `<source>` tag needed
- i18n keys: `r7_label`, `r8_label`, `r9_label`
- Cards are appended before the closing `</div>` of `.results-track`
- Existing shuffle-on-load JS will automatically include new cards

## 2. Video

**Conversion:** `IMG_7391.MOV` → `video/results.mp4` via ffmpeg:
```
ffmpeg -i video/IMG_7391.MOV -c:v libx264 -crf 28 -an -movflags faststart video/results.mp4
```
- `-an` strips audio
- `-crf 28` good quality/size balance
- `faststart` enables streaming before full download

**Placement:** Inside `#rezultati`, between `.results-slider` and `.results-cta`, as a new `.results-video` wrapper div.

**HTML:**
```html
<div class="results-video fade-up">
  <video src="video/results.mp4" autoplay muted loop playsinline></video>
</div>
```

**CSS** (in `css/sections.css`):
- `.results-video` — `max-width: 600px`, centered with `margin: 2rem auto 0`, `border-radius: var(--radius)` (or `12px`)
- `video` — `width: 100%`, `border-radius` inherited, `display: block`

## 3. Out of Scope

- No WebM fallback (single source is sufficient)
- No video controls UI
- No separate section for video
- No changes to slider JS logic
