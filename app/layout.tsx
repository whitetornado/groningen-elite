import type { Metadata } from "next";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/bodoni-moda/wght-italic.css";
import "@fontsource-variable/jost";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Groningen Élite — Premium casualwear uit het Noorden",
    template: "%s · Groningen Élite",
  },
  description:
    "Premium casualwear met een Groningse identiteit. Kleine borstprints, verfijnde typografie en doordachte details. Puur. Noorders. Karakter.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Groningen Élite",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-papier font-sans text-nacht antialiased">{children}</body>
    </html>
  );
}
