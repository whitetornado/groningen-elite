import Image from "next/image";
import Logo from "./Logo";

/**
 * Hero met eigen Groningen-skyline (Martinitoren in het midden).
 * Logo bovenin in de lucht, knoppen onderin op de donkere waterspiegeling,
 * zodat niets over de gloed achter de toren valt.
 *
 * Beeld: /public/hero/skyline.webp
 * Sterkte van het beeld: blur-[3px] (vaagheid) en opacity-60 (aanwezigheid).
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0d0e12] text-kalk">
      {/* beeld begint onder het logo en loopt bovenin zacht over in de lucht */}
      <div className="absolute inset-x-0 bottom-0 top-[30%] -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%)] sm:top-[18%]">
        <Image
          src="/hero/skyline.webp"
          alt="Skyline van Groningen met de Martinitoren"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-[58%_100%] opacity-60 blur-[3px] brightness-90 contrast-[.85] md:object-bottom"
        />
      </div>
      {/* zachte overgang bovenin (achter de header) en onderin (voor de knoppen) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#0d0e12] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="container-x relative flex flex-col items-center pt-24 text-center sm:pt-28">
        <p className="eyebrow animate-rise text-[10px] text-kalk/55 sm:text-[11px]">Collectie 01 · Najaar 2026</p>

        <h1 className="mt-5 animate-rise [animation-delay:120ms]">
          <Logo size="xl" />
        </h1>

        <p className="eyebrow mt-5 animate-rise text-[10px] text-kalk/75 [animation-delay:240ms] sm:text-[12px]">
          Streetwear from the North
        </p>
      </div>

      <div className="container-x relative mt-auto flex justify-center pb-8 sm:pb-12">
        <div className="flex animate-rise gap-3 [animation-delay:400ms]">
          <a href="#collectie" className="btn-light whitespace-nowrap px-4 py-3.5 text-[10.5px] tracking-[0.18em] sm:px-7 sm:py-4 sm:text-[12px] sm:tracking-[0.24em]">
            Bekijk de collectie
          </a>
          <a href="#verhaal" className="btn-ghost whitespace-nowrap px-4 py-3.5 text-[10.5px] tracking-[0.18em] backdrop-blur-[2px] sm:px-7 sm:py-4 sm:text-[12px] sm:tracking-[0.24em]">
            Ons verhaal
          </a>
        </div>
      </div>
    </section>
  );
}