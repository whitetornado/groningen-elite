import Logo from "./Logo";

const variants = [
  { bg: "bg-kalk", fg: "text-nacht", label: "Kalkwit" },
  { bg: "bg-nacht ring-1 ring-inset ring-kalk/15", fg: "text-kalk", label: "Stadsnacht" },
  { bg: "bg-wold", fg: "text-kalk", label: "Woldgroen" },
];

export default function Details() {
  return (
    <section id="details" className="scroll-mt-20 bg-nacht py-24 text-kalk sm:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow text-kalk/50">03 — Details</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">Het zit in de afwerking</h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-kalk/60">
            Geen grote clublogo&rsquo;s, wel een vast woordmerk dat terugkomt op borst, neklabel en pet.
          </p>
        </div>

        {/* Toepassingen */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {/* Borstlogo */}
          <figure className="group">
            <div className="fabric relative flex aspect-square items-center justify-center overflow-hidden bg-[#161616]">
              <div className="absolute -left-[20%] -top-[30%] h-[80%] w-[80%] rounded-full border-[18px] border-black/30" />
              <Logo size="md" className="relative text-kalk/90 transition duration-700 group-hover:scale-105" />
            </div>
            <figcaption className="eyebrow mt-4 text-[10px] text-kalk/50">Borstlogo</figcaption>
          </figure>

          {/* Neklabel */}
          <figure className="group">
            <div className="fabric relative flex aspect-square items-start justify-center overflow-hidden bg-[#141414]">
              <div className="absolute -top-[46%] left-1/2 h-[80%] w-[110%] -translate-x-1/2 rounded-[50%] border-[14px] border-[#0c0c0c]" />
              <div className="relative mt-[30%] bg-[#0a0a0a] px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)] ring-1 ring-kalk/10 transition duration-700 group-hover:-translate-y-1">
                <Logo size="sm" className="text-kalk/90" />
                <p className="mt-2 text-center text-[7px] tracking-[0.3em] text-kalk/40">MADE IN THE NORTH</p>
              </div>
            </div>
            <figcaption className="eyebrow mt-4 text-[10px] text-kalk/50">Neklabel</figcaption>
          </figure>

          {/* Pet */}
          <figure className="group">
            <div className="fabric relative flex aspect-square items-center justify-center overflow-hidden bg-[#121212]">
              <div
                className="absolute inset-x-[-10%] top-[12%] h-[110%] rounded-t-[50%] bg-[#1c1c1c]"
                style={{ boxShadow: "inset -30px 20px 60px rgba(0,0,0,.55), inset 30px 0 60px rgba(255,255,255,.03)" }}
              />
              <div className="relative -rotate-6 transition duration-700 group-hover:rotate-0">
                <Logo size="md" className="scale-125 text-kalk/90 [text-shadow:0_1px_0_rgba(0,0,0,.6)]" />
              </div>
            </div>
            <figcaption className="eyebrow mt-4 text-[10px] text-kalk/50">Pet · geborduurd</figcaption>
          </figure>
        </div>

        {/* Logovarianten */}
        <div className="mt-20 border-t border-kalk/10 pt-12">
          <p className="eyebrow text-kalk/50">Logovarianten</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {variants.map((v) => (
              <div key={v.label} className={`${v.bg} ${v.fg} flex aspect-[5/3] items-center justify-center`}>
                <Logo size="md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
