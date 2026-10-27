// Tijdelijke productdata voor de landingspagina.
// Later vervangen door een Supabase-query op de tabel `products`.

export type GarmentType = "tee" | "sweater" | "hoodie" | "cap";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number; // in centen
  type: GarmentType;
  color: string; // stofkleur (hex)
  ink: string; // printkleur (hex)
  colorName: string;
  badge?: string;
};

export const featuredProducts: Product[] = [
  {
    slug: "borstlogo-tee-kalkwit",
    name: "Borstlogo T-shirt",
    subtitle: "Zwaar katoen · relaxed fit",
    price: 3995,
    type: "tee",
    color: "#ECE8DF",
    ink: "#111111",
    colorName: "Kalkwit",
    badge: "Nieuw",
  },
  {
    slug: "hoodie-stadsnacht",
    name: "Hoodie",
    subtitle: "Geborsteld fleece · borstlogo",
    price: 7995,
    type: "hoodie",
    color: "#151515",
    ink: "#ECE8DF",
    colorName: "Stadsnacht",
  },
  {
    slug: "sweater-woldgroen",
    name: "Crewneck sweater",
    subtitle: "Loopback katoen · borstlogo",
    price: 6995,
    type: "sweater",
    color: "#26392D",
    ink: "#ECE8DF",
    colorName: "Woldgroen",
  },
  {
    slug: "pet-stadsnacht",
    name: "Dad cap",
    subtitle: "Geborduurd · verstelbaar",
    price: 2995,
    type: "cap",
    color: "#171717",
    ink: "#ECE8DF",
    colorName: "Stadsnacht",
  },
];

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(cents / 100);
