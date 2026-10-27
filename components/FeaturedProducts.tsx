import { featuredProducts, formatPrice } from "@/lib/products";
import GarmentMockup from "./GarmentMockup";

export default function FeaturedProducts() {
  return (
    <section id="collectie" className="scroll-mt-20 bg-papier py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 border-b border-nacht/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-klinker">01 — Collectie</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">
              De eerste lichting
            </h2>
          </div>
          <a href="#" className="eyebrow group flex items-center gap-3 text-nacht">
            Alles bekijken
            <span className="h-px w-8 bg-nacht transition-all group-hover:w-12" />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <li key={p.slug}>
              <a href={`#`} className="group block" aria-label={`${p.name} in ${p.colorName}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E5DC]">
                  {p.badge && (
                    <span className="eyebrow absolute left-3 top-3 z-10 bg-nacht px-2.5 py-1.5 text-[9px] text-kalk">
                      {p.badge}
                    </span>
                  )}
                  <GarmentMockup
                    type={p.type}
                    color={p.color}
                    ink={p.ink}
                    className="absolute inset-0 m-auto h-[78%] w-[78%] transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="eyebrow absolute inset-x-3 bottom-3 translate-y-2 bg-papier/95 py-3 text-center text-[10px] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Snel bekijken
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[15px] font-medium">{p.name}</h3>
                    <p className="mt-1 text-[13px] text-klinker">{p.colorName}</p>
                  </div>
                  <p className="text-[14px] tabular-nums">{formatPrice(p.price)}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
