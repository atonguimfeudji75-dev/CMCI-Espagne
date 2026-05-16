# CMCI Spain Website

International Christian Missionary Community — Spain.

## Project structure

```
cmci-spain/
├── index.html                      # Main page markup
├── css/
│   └── styles.css                  # All styling
├── js/
│   └── script.js                   # Mobile menu, scroll effects, fade-ins
├── img/
│   ├── logo.jpg                    # CMCI logo (used in nav + footer)
│   ├── founder.jpg                 # Professor Zacharias Tanee Fomum
│   ├── hero-background.png         # Hero section background
│   ├── worship-side.jpg            # "A World Apostolic Movement" side image
│   ├── destiny-camp-2026.jpg       # Upcoming event flyer
│   ├── gallery-culte-dimanche.jpg
│   ├── gallery-sortie-jeunes.jpg
│   ├── gallery-apero-gospel.jpg
│   ├── gallery-bapteme.jpg
│   └── gallery-ministere-menye.jpg
└── README.md
```

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing tips

- **Text & layout** → `index.html`
- **Colors, fonts, spacing** → `css/styles.css` (CSS variables defined at the top under `:root`)
- **Mobile menu, scroll behavior, animations** → `js/script.js`
- **Replacing an image** → drop a new file with the same name in `img/`, or update the `src=` in `index.html`

## Deploying

The site is fully static. Upload the whole folder to any host (Netlify, Vercel, GitHub Pages, cPanel, etc.).
