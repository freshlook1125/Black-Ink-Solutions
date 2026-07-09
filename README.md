# Black Ink Website

A responsive static website for **Black Ink**, an elegant publishing-house style home for emotional collections.

## Pages

- `index.html` — Black Ink homepage with warm ivory, black ink, subtle gold veining, and a collections introduction.
- `broken-memoirs.html` — Broken Memoirs collection page for emotional memoir, healing, unsent letters, heartbreak, and recovery.
- `velvet-wreckage.html` — Velvet Wreckage collection page, preserving the darker luxury black marble and gold dust atmosphere.
- `contact.html` — Contact page for inquiries and collaborations.

## Navigation

The main navigation is shared across pages:

- Home
- Collections
  - Broken Memoirs
  - Velvet Wreckage
- About
- Contact

On desktop, the Collections dropdown opens on hover or click. On mobile, the navigation collapses behind a menu button and the Collections group expands inside the mobile menu. The Black Ink homepage remains `index.html`; Velvet Wreckage is intentionally kept as its own collection page.

## Style Direction

The Black Ink homepage uses a cream / warm ivory background, black ink script writing, elegant serif typography, subtle gold veins, and a refined bookish publishing-house feel.

Collection pages keep their own moods:

- **Broken Memoirs:** faded paper, handwritten note energy, charcoal ink, muted gold, emotional recovery.
- **Velvet Wreckage:** dark luxury, black marble-inspired surfaces, antique gold accents, subtle gold dust, beauty after ruin.

## Files

```text
index.html              # Black Ink homepage
broken-memoirs.html     # Broken Memoirs collection page
velvet-wreckage.html    # Velvet Wreckage collection page
contact.html            # Contact page
styles.css              # Shared responsive styling and page themes
script.js               # Dropdown/mobile nav, footer year, and signup placeholder behavior
assets/.gitkeep         # Placeholder assets folder
README.md               # Project notes
```

## Running Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

The Velvet Wreckage signup form currently provides front-end placeholder behavior only. Connect it to a service such as Netlify Forms, Formspree, Mailchimp, ConvertKit, or a custom endpoint when a final email platform is selected.
