const colors = [
  { name: "Stadsnacht", hex: "#111111", text: "text-kalk" },
  { name: "Kalkwit", hex: "#ECE8DF", text: "text-nacht" },
  { name: "Woldgroen", hex: "#26392D", text: "text-kalk" },
  { name: "Klinker", hex: "#7D7D7A", text: "text-kalk" },
  { name: "Wadblauw", hex: "#2C3B4D", text: "text-kalk" },
];

export default function Palette() {
  return (
    <section className="bg-papier py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-klinker">04 — Sfeer en kleuren</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">Kleuren van het Noorden</h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-nacht/60">
            Een rustig palet dat met alles combineert. Gedempte tinten, geïnspireerd op de stad, het wad en
            het land eromheen.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {colors.map((c, i) => (
            <li
              key={c.name}
              className={`group relative flex aspect-[3/4] flex-col justify-end p-4 ${c.text} ${
                i === 0 ? "col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-[3/4]" : ""
              } ${c.hex === "#ECE8DF" ? "ring-1 ring-inset ring-nacht/10" : ""}`}
              style={{ backgroundColor: c.hex }}
            >
              <span className="font-serif text-xl">{c.name}</span>
              <span className="eyebrow mt-1 text-[9px] opacity-60">{c.hex}</span>
            </li>
          ))}
        </ul>

        <p className="eyebrow mt-14 text-center text-klinker">Puur. Noorders. Karakter.</p>
      </div>
    </section>
  );
}
