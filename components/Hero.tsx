import Logo from "./Logo";

/** Stadssilhouet met de toren als ankerpunt — puur decoratief */
function Skyline() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-[58%] w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ECE8DF" stopOpacity="0.07" />
          <stop offset="1" stopColor="#ECE8DF" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sky-fade)"
        d="M0 320 L0 252 L48 252 L48 232 L76 210 L104 232 L104 252 L150 252 L150 214 L166 196 L182 214 L182 252 L236 252 L236 228 L282 228 L282 252 L330 252 L330 220 L352 198 L374 220 L374 252 L430 252 L430 236 L470 212 L510 236 L510 252 L566 252 L566 224 L606 224 L606 190
        L626 190 L626 150 L640 150 L640 112 L650 112 L650 78 L658 78 L658 54 L664 40 L668 14 L672 40 L678 54 L678 78 L686 78 L686 112 L696 112 L696 150 L710 150 L710 190 L730 190 L730 252
        L780 252 L780 230 L820 230 L820 252 L870 252 L870 206 L930 160 L990 206 L990 252 L1010 252 L1010 170 L1022 146 L1034 170 L1034 252 L1080 252 L1080 226 L1110 204 L1140 226 L1140 252
        L1196 252 L1196 232 L1240 232 L1240 252 L1290 252 L1290 216 L1312 196 L1334 216 L1334 252 L1386 252 L1386 236 L1440 236 L1440 320 Z"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-nacht text-kalk">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(236,232,223,0.10), transparent 70%), linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
        }}
      />
      <Skyline />

      <div className="container-x relative flex flex-col items-center pb-24 pt-32 text-center">
        <p className="eyebrow animate-rise text-kalk/60">Collectie 01 · Najaar 2026</p>

        <h1 className="mt-8 animate-rise [animation-delay:120ms]">
          <Logo size="xl" />
        </h1>

        <p className="eyebrow mt-8 animate-rise text-kalk/80 [animation-delay:240ms] sm:text-[12px]">
          Streetwear from the North
        </p>

        <p className="mt-6 max-w-md animate-rise text-[15px] leading-relaxed text-kalk/65 [animation-delay:360ms]">
          Premium casualwear met een Groningse identiteit. Herkenbaar voor wie het weet, stijlvol voor iedereen.
        </p>

        <div className="mt-10 flex w-full animate-rise flex-col gap-3 [animation-delay:480ms] sm:w-auto sm:flex-row">
          <a href="#collectie" className="btn-light">
            Bekijk de collectie
          </a>
          <a href="#verhaal" className="btn-ghost">
            Ons verhaal
          </a>
        </div>
      </div>

      <a
        href="#collectie"
        className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-kalk/40 transition hover:text-kalk/80"
      >
        Scroll
        <span className="mx-auto mt-3 block h-8 w-px bg-kalk/30" />
      </a>
    </section>
  );
}
