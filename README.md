# Pure Aesthetic – Dr. Dragana Ilić
## Sajt za estetsku medicinu | Loznica

---

## 📁 Struktura projekta

```
pure-aesthetic/
├── index.html          ← Glavna stranica
├── hvala.html          ← Stranica nakon slanja forme
├── css/
│   ├── reset.css       ← Browser normalizacija
│   ├── variables.css   ← Boje, fontovi, spacing
│   ├── main.css        ← Baze stilovi + animacije
│   ├── nav.css         ← Navigacija
│   ├── hero.css        ← Hero sekcija
│   ├── sections.css    ← About, klinika, testimonials
│   ├── services.css    ← Tretmani grid
│   ├── gallery.css     ← Before/After
│   ├── contact.css     ← Kontakt forma
│   ├── footer.css      ← Footer
│   └── responsive.css  ← Mobile/tablet
├── js/
│   └── main.js         ← Scroll animacije, nav, forma
└── images/
    ├── hero/           ← dragana-hero.jpg, og-image.jpg
    ├── team/           ← dragana-about.jpg
    ├── clinic/         ← klinika-1.jpg, klinika-2.jpg, klinika-3.jpg
    ├── before-after/   ← usne-before.jpg, usne-after.jpg, itd.
    └── favicon.png
```

---

## 🖼️ Slike — šta treba

| Fajl | Opis | Preporučena veličina |
|------|------|----------------------|
| `images/hero/dragana-hero.jpg` | Dragana, portrait, bijela pozadina | 800×1000px |
| `images/team/dragana-about.jpg` | Dragana, full body ili half body | 800×1000px |
| `images/clinic/klinika-1.jpg` | Klinika, reception/ulaz | 1200×900px |
| `images/clinic/klinika-2.jpg` | Tretmanski kabinet | 1200×900px |
| `images/clinic/klinika-3.jpg` | Detalj klinike | 1200×900px |
| `images/before-after/usne-before.jpg` | Usne prije | 600×800px |
| `images/before-after/usne-after.jpg` | Usne poslije | 600×800px |
| `images/before-after/lice-before.jpg` | Lice prije | 600×800px |
| `images/before-after/lice-after.jpg` | Lice poslije | 600×800px |
| `images/before-after/koza-before.jpg` | Koža prije | 600×800px |
| `images/before-after/koza-after.jpg` | Koža poslije | 600×800px |

> Bez slike: sajt pokazuje placeholder. Dodaj sliku sa ispravnim imenom i automatski se pojavljuje.

---

## 📧 Kontakt forma — Web3Forms setup

1. Idi na https://web3forms.com
2. Unesi Dragananin email → klikni "Create Access Key"
3. Kopiraj Access Key
4. U `index.html` pronađi:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```
5. Zamijeni `YOUR_ACCESS_KEY` sa pravim ključem
6. Forma će slati poruke direktno na njen email

---

## 🚀 Deploy na Netlify (besplatno)

1. Idi na https://netlify.com → registruj se
2. Klikni "Add new site" → "Deploy manually"
3. Prevuci cijeli `pure-aesthetic/` folder u browser
4. Sajt je live za 30 sekundi!
5. Za custom domenu (pureaesthetic.rs): u Netlify Settings → Domain management

---

## 🎨 Izmjena boja/sadržaja

Sve boje su u `css/variables.css`:
- `--burgundy` — glavna boja (bordo)
- `--gold` — zlatni akcenti
- `--cream` — pozadina

Tekst mijenjati direktno u `index.html`.

---

## 📱 SEO checklist

- [ ] Dodaj Google Business Profile (besplatno, najvažnije za lokalni SEO)
- [ ] U `index.html` ažuriraj `<link rel="canonical">` sa pravom domenom
- [ ] Zamijeni `og-image.jpg` sa Draganinim foto (1200×630px)
- [ ] Dodaj Google Analytics (opciono)

---

## 🔮 Buduće nadogradnje

- **Blog** → Migracija na Next.js + Contentful CMS (~2-3 dana rada)
- **Admin panel za Draganu** → Netlify CMS (~4-6 sati rada)
- **Online booking** → Calendly embed (besplatno, <1 sat)
