# Black Ink Website

Black Ink is the main website and parent creative publishing-house brand for emotional collections, literary projects, digital products, and storytelling.

## Collections

- **Broken Memoirs** is a memoir-inspired collection page for unsent letters, heartbreak, silence, attachment wounds, reflection, healing, and recovery.
- **Velvet Wreckage** is a darker luxury collection page with black marble, glossy black, antique gold, gold dust, and emotional elegance.

## Site structure

```text
index.html             # Black Ink homepage with hero, intro, collections, about, join-list, and footer
broken-memoirs.html    # Broken Memoirs collection page
velvet-wreckage.html   # Velvet Wreckage collection page
contact.html           # Black Ink contact page
styles.css             # Shared responsive styling and collection-specific visual themes
script.js              # Dropdown, mobile menu, footer year, and placeholder email form behavior
README.md              # Project documentation
```

## Navigation

The primary navigation keeps the collections inside the parent Black Ink site:

- Home
- Collections
  - Broken Memoirs
  - Velvet Wreckage
- About
- Contact

On desktop, Collections opens as a dropdown. On mobile, the menu button opens the navigation and Collections expands inside that menu.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

The email signup forms currently show front-end placeholder success messages only. Connect them to a service such as Netlify Forms, Formspree, Mailchimp, ConvertKit, or a custom endpoint when a final email platform is selected.
