export default function Story() {
  return (
    <section id="verhaal" className="grain relative scroll-mt-20 overflow-hidden bg-wold py-24 text-kalk sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow text-kalk/55">02 — Verhaal</p>
          <h2 className="mt-6 font-serif text-[40px] leading-[1.04] sm:text-6xl">
            Trots op de stad.
            <br />
            <em className="font-normal text-kalk/75">Zonder te schreeuwen.</em>
          </h2>
        </div>

        <div className="space-y-6 text-[16px] leading-relaxed text-kalk/75 lg:col-span-6 lg:col-start-7 lg:pt-14">
          <p>
            Groningen Élite komt voort uit trots op Groningen en de supporterscultuur van de stad. Maar dit is
            geen standaard merchandise: het is zelfstandige casualwear die je net zo goed op kantoor, in de
            kroeg of op de Grote Markt draagt als op de tribune.
          </p>
          <p>
            De verbinding zit in de details. Een klein borstlogo, een geweven neklabel, verfijnde typografie.
            Herkenbaar voor wie het weet — stijlvol voor iedereen.
          </p>

          <dl className="grid grid-cols-3 gap-6 border-t border-kalk/15 pt-8">
            {[
              ["Puur", "Minimalistisch ontwerp"],
              ["Noorders", "Gemaakt met Groningse trots"],
              ["Karakter", "Doordachte details"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-serif text-2xl text-kalk">{t}</dt>
                <dd className="mt-2 text-[13px] leading-snug text-kalk/55">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
