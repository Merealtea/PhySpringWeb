# PhySPRING Project Page

Static research project page inspired by the visual structure of the Deform360 project website, adapted for:

**PhySPRING: Structure-Preserving Reduction of Physics-Informed Twins via GNN**

Paper: https://arxiv.org/abs/2605.07687

## Files

- `index.html` — page content
- `style.css` — all styling
- `script.js` — BibTeX copy button
- `assets/` — put final figures, videos, logos, or thumbnails here

## Replace placeholders

The current page intentionally contains CSS placeholders instead of paper figures/videos. Recommended replacements:

1. Hero teaser: replace `.hero-media` content with `<video>` or `<img>`.
2. Method overview: replace the method placeholder with the final method figure.
3. Qualitative results: add reconstruction/re-simulation and prediction videos.
4. Real2Sim: add ACT / pi0 manipulation evaluation clips.
5. Code button: replace the disabled span with an `<a>` when the repository is public.

Example video:

```html
<video autoplay muted loop playsinline controls>
  <source src="assets/teaser.mp4" type="video/mp4">
</video>
```

## GitHub Pages deployment

1. Create a new GitHub repository, for example `physpring`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save. GitHub will publish the project page at a URL similar to:
   `https://YOUR_USERNAME.github.io/physpring/`

No backend server is needed.
