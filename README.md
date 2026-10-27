# Groningen Élite

Premium casualwear met een Groningse identiteit. Webshop op Next.js (App Router) + Tailwind, gehost op Netlify.

**Stack:** Next.js 16 · Tailwind 3 · Supabase · Stripe · Sendcloud · Resend · Netlify

## Lokaal starten (cmd.exe)

```
npm install
copy .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Naar GitHub + Netlify

```
git init
git add .
git commit -m "Landingspagina Groningen Elite"
git branch -M main
git remote add origin https://github.com/<account>/groningen-elite.git
git push -u origin main
```

Netlify → *Add new site* → *Import from Git* → repo kiezen. Build-instellingen komen uit `netlify.toml`
(Next.js-runtime wordt automatisch gebruikt). Zet de variabelen uit `.env.example` onder
*Site configuration → Environment variables*.

## Structuur

```
app/
  layout.tsx        fonts (self-hosted via @fontsource), metadata
  page.tsx          landingspagina
  globals.css       Tailwind + merkcomponenten (.btn, .eyebrow, .grain)
components/
  Logo.tsx          woordmerk GRONINGEN — ÉLITE
  GarmentMockup.tsx SVG-mockups (tee, sweater, hoodie, pet) — tijdelijk tot er productfoto's zijn
  Header, Hero, Marquee, FeaturedProducts, Story, Details, Palette, Newsletter, Footer
lib/
  products.ts       tijdelijke productdata → later Supabase
```

## Merkkleuren (tailwind.config.ts)

| Token     | Naam       | Hex       |
|-----------|------------|-----------|
| `nacht`   | Stadsnacht | `#111111` |
| `kalk`    | Kalkwit    | `#ECE8DF` |
| `wold`    | Woldgroen  | `#26392D` |
| `klinker` | Klinker    | `#7D7D7A` |
| `wad`     | Wadblauw   | `#2C3B4D` |
| `papier`  | Achtergrond| `#F5F2EC` |

Typografie: Bodoni Moda (koppen/logo) en Jost (tekst).

## Volgende stappen

1. Supabase: tabellen `products`, `product_variants` (maat/kleur/voorraad), `orders`, `order_items`, `newsletter_subscribers` + RLS
2. Productpagina `/product/[slug]` en winkelmand (client state + localStorage)
3. Stripe Checkout (iDEAL, Bancontact, kaart) + webhook → order op `paid`
4. Sendcloud-koppeling overnemen uit toet.store (parcel aanmaken na betaling, webhook voor tracking)
5. Resend: orderbevestiging en verzendmail
