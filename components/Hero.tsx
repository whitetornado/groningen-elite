import Logo from "./Logo";
import Skyline from "./Skyline";

export default function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-nacht text-kalk">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(236,232,223,0.10), transparent 70%), radial-gradient(circle at 78% 30%, rgba(236,232,223,0.05), transparent 35%), linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
        }}
      />
      <Skyline className="pointer-events-none absolute bottom-0 left-1/2 h-[66%] w-auto max-w-none -translate-x-[66.67%] md:h-[84%] md:-translate-x-1/2" />

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
