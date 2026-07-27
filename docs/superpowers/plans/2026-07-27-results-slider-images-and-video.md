# Results Slider: New Images + Video — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 new botoks before/after cards to the results slider and a looping muted video below the slider.

**Architecture:** All changes are in `index.html` (markup) and `css/gallery.css` (video styles). Video is converted from MOV to MP4 via ffmpeg before being referenced in HTML.

**Tech Stack:** Vanilla HTML/CSS, ffmpeg for video conversion

---

### Task 1: Convert video to MP4

**Files:**
- Input: `video/IMG_7391.MOV`
- Output: `video/results.mp4`

- [ ] **Step 1: Run ffmpeg conversion**

```bash
ffmpeg -i video/IMG_7391.MOV -c:v libx264 -crf 28 -an -movflags faststart video/results.mp4
```

Expected: `video/results.mp4` created, size smaller than 8MB.

- [ ] **Step 2: Verify output**

```bash
ls -lh video/results.mp4
```

Expected: file exists, reasonable size (1–6 MB typical).

- [ ] **Step 3: Commit**

```bash
git add video/results.mp4
git commit -m "feat: add converted results video (MP4)"
```

---

### Task 2: Add 3 new before/after cards to slider

**Files:**
- Modify: `index.html:799-800` (append before closing `</div>` of `.results-track`)

Current structure ends at line 799 (`</div>` for last result-item) and line 801 (`</div>` closing `.results-track`).

- [ ] **Step 1: Add 3 new result-item cards inside `.results-track`, after line 799**

Insert the following before the `</div>` on line 801 (the `.results-track` closing tag):

```html
          <div class="result-item">
            <div class="result-imgs">
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox11.jpg" alt="Botoks čeona regija - prije">
                </picture>
                <span class="result-badge before" data-i18n="badge_before">Prije</span>
              </div>
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox12.jpg" alt="Botoks čeona regija - poslije">
                </picture>
                <span class="result-badge after" data-i18n="badge_after">Poslije</span>
              </div>
            </div>
            <div class="result-label" data-i18n="r7_label">Botoks - Čeona regija</div>
          </div>

          <div class="result-item">
            <div class="result-imgs">
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox21.jpg" alt="Botoks mrštilje - prije">
                </picture>
                <span class="result-badge before" data-i18n="badge_before">Prije</span>
              </div>
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox22.jpg" alt="Botoks mrštilje - poslije">
                </picture>
                <span class="result-badge after" data-i18n="badge_after">Poslije</span>
              </div>
            </div>
            <div class="result-label" data-i18n="r8_label">Botoks - Mrštilje</div>
          </div>

          <div class="result-item">
            <div class="result-imgs">
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox31.jpg" alt="Botoks okoloočna regija - prije">
                </picture>
                <span class="result-badge before" data-i18n="badge_before">Prije</span>
              </div>
              <div class="result-img-wrap">
                <picture>
                  <img src="images/before-after/botox32.jpg" alt="Botoks okoloočna regija - poslije">
                </picture>
                <span class="result-badge after" data-i18n="badge_after">Poslije</span>
              </div>
            </div>
            <div class="result-label" data-i18n="r9_label">Botoks - Okoloočna regija</div>
          </div>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` locally. Navigate to `#rezultati`. Click through slider — 9 cards should appear, dots updated, shuffle still works.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add 3 botoks before/after cards to results slider"
```

---

### Task 3: Add video below slider

**Files:**
- Modify: `index.html:808-810` (insert between `.results-slider` closing tag and `.results-cta`)
- Modify: `css/gallery.css` (append `.results-video` styles at end of file)

- [ ] **Step 1: Add video HTML in `index.html` between line 808 (`</div>` closing `.results-slider`) and line 810 (`.results-cta`)**

```html
    <div class="results-video fade-up">
      <video src="video/results.mp4" autoplay muted loop playsinline></video>
    </div>
```

- [ ] **Step 2: Add CSS to end of `css/gallery.css`**

```css
.results-video {
  max-width: 480px;
  margin: 2.5rem auto 0;
}

.results-video video {
  width: 100%;
  display: block;
  border-radius: 12px;
}
```

- [ ] **Step 3: Verify in browser**

Open `index.html`, scroll to `#rezultati`. Video should autoplay silently below the slider, centered, with rounded corners.

- [ ] **Step 4: Commit**

```bash
git add index.html css/gallery.css
git commit -m "feat: add autoplay muted video to results section"
```
