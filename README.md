# PhySPRING Project Page

Static project page for **PhySPRING: Structure-Preserving Reduction of Physics-Informed Twins via GNN**.

This version has been updated to:
- show **NeurIPS 2026 · Poster** in the hero section,
- mark **Guangming Wang** as the only corresponding author,
- include **University of Cambridge** and **Shanghai Jiao Tong University** logo cards,
- reserve a dedicated placeholder for the **CV4DT** logo.

## Structure

```text
physpring_project_page_v2/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── cambridge_logo.svg
    ├── sjtu_logo.svg
    └── cv4dt_placeholder.svg
```

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository, for example: `physpring-project-page`
2. Upload all files in this folder to the repository root.
3. In GitHub, go to:

```text
Settings → Pages
```

4. Choose:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. Save, then wait for GitHub Pages to build.

Your site will normally appear at:

```text
https://YOUR_USERNAME.github.io/physpring-project-page/
```

## Replacing the logo placeholder

When you have the final CV4DT logo, replace this file:

```text
assets/cv4dt_placeholder.svg
```

You do not need to change the HTML unless you want a different size or spacing.

## Replacing media placeholders

The current page still uses placeholder blocks for:
- teaser image or video,
- method figure,
- qualitative results,
- prediction results,
- Real2Sim robot clips.

Later, you can replace them with real images or videos by editing `index.html`.
