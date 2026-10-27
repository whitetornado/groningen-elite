import Logo from "./Logo";

const columns = [
  { title: "Shop", links: ["T-shirts", "Sweaters", "Hoodies", "Petten", "Alles"] },
  { title: "Service", links: ["Verzending", "Retourneren", "Maattabel", "Contact"] },
  { title: "Merk", links: ["Ons verhaal", "Instagram", "Algemene voorwaarden", "Privacy"] },
];

export default function Footer() {
  return (
    <footer className="bg-nacht pt-20 text-kalk">
      <div className="container-x grid gap-14 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo size="md" />
          <p className="eyebrow mt-6 text-[10px] text-kalk/45">Streetwear from the North</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="eyebrow text-[10px] text-kalk/45">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-kalk/75 transition hover:text-kalk">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-kalk/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[12px] text-kalk/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Groningen Élite</p>
          <p>iDEAL · Bancontact · Creditcard · Verzending via Sendcloud</p>
        </div>
      </div>
    </footer>
  );
}
