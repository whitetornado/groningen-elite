"use client";

import { useState } from "react";

export default function Newsletter() {
  const [state, setState] = useState<"idle" | "done">("idle");

  return (
    <section id="nieuwsbrief" className="grain relative scroll-mt-20 overflow-hidden bg-kool py-24 text-kalk sm:py-28">
      <div className="container-x grid items-end gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-kalk/50">Als eerste weten</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">
            Nieuwe drops, kleine oplagen.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-kalk/60">
            Schrijf je in en hoor als eerste wanneer een nieuwe lichting online komt. Op is op.
          </p>
        </div>

        {state === "done" ? (
          <p className="font-serif text-2xl text-kalk/90">Dank je. Je hoort van ons.</p>
        ) : (
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: koppelen aan /api/newsletter (Supabase-tabel of Resend audience)
              setState("done");
            }}
          >
            <label htmlFor="email" className="sr-only">
              E-mailadres
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="jouw@email.nl"
              className="min-w-0 flex-1 border border-kalk/25 bg-transparent px-5 py-4 text-[15px] text-kalk placeholder:text-kalk/35 focus:border-kalk focus:outline-none"
            />
            <button type="submit" className="btn-light">
              Inschrijven
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
