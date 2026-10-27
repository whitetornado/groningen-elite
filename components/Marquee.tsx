const words = ["Puur", "Noorders", "Karakter", "Ontworpen in Groningen", "Kleine oplagen", "Subtiele details"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-nacht/10 bg-kalk py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="eyebrow flex items-center whitespace-nowrap px-6 text-nacht/70">
                {w}
                <span className="ml-12 inline-block h-1 w-1 rotate-45 bg-wold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
