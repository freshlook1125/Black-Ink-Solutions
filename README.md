# Black Ink Website

Black Ink is the main website and parent creative publishing-house brand for emotional collections, literary projects, digital products, and storytelling.

## Site structure

- `index.html` — Black Ink homepage with hero, brand intro, collection previews, about section, join-list form, and footer.
- `broken-memoirs.html` — Broken Memoirs collection page for unsent letters, heartbreak, attachment wounds, reflection, healing, and recovery.
- `velvet-wreckage.html` — Velvet Wreckage collection page with a darker black-marble and antique-gold luxury tone.
- `contact.html` — Black Ink contact page with general inquiry copy, placeholder email, and social links.
- `styles.css` — Shared responsive styling for the Black Ink parent brand and both collection page themes.
- `script.js` — Shared JavaScript for the desktop/mobile Collections dropdown, mobile menu, footer year, and email form success messages.

## Navigation

The primary navigation keeps Black Ink as the parent site:

- Home
- Collections
  - Broken Memoirs
  - Velvet Wreckage
- About
- Contact

## Preview locally

Open `index.html` directly in a browser, or run a simple static server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

The email forms currently provide front-end placeholder success messages only. Connect them to an email platform or backend endpoint when the final list provider is selected.
