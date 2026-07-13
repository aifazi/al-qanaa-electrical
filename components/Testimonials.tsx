"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Stars from "@/components/Stars";

export default function Testimonials() {
  const t = useTranslations();
  const reduce = useReducedMotion();
  const reviews = t.raw("Reviews.items") as Array<{
    name: string;
    location: string;
    text: string;
  }>;
  const loop = reduce ? [] : [...reviews, ...reviews];

  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto mb-12 max-w-7xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
          {t("Nav.reviews")}
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {t("Reviews.title")}
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Stars rating={4.9} showValue />
          <span className="text-sm text-white/60">{t("Reviews.onGoogle")}</span>
        </div>
      </div>

      <div className="relative">
        <div
          className={`flex gap-5 ${
            reduce ? "flex-wrap justify-center px-5" : "w-max animate-marquee"
          }`}
        >
          {(reduce ? reviews : loop).map((r, i) => (
            <article
              key={i}
              className="w-[300px] flex-none rounded-2xl border border-white/10 bg-navy-800/60 p-6"
            >
              <Stars rating={5} size={16} />
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/20 font-semibold text-bronze">
                  {r.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-white/55">{r.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 to-transparent" />
      </div>
    </section>
  );
}
