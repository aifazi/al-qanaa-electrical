"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import CountUp from "@/components/CountUp";
import { business } from "@/lib/business";
import Stars from "@/components/Stars";
import { CheckIcon } from "@/components/icons";

const stats = [
  { to: business.reviews, suffix: "+", decimals: 0 },
  { to: business.rating, suffix: "★", decimals: 1 },
  { to: 15, suffix: "+", decimals: 0 },
  { to: 30, suffix: " min", decimals: 0 },
];

export default function WhyUs() {
  const t = useTranslations();
  const reduce = useReducedMotion();
  const trust = t.raw("Why.trust") as string[];
  const statsLabels = t.raw("Why.stats") as Array<{ label: string }>;

  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(160,138,99,0.12),transparent_45%)]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
              {t("Why.title")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("Why.subtitle")}
            </h2>
            <p className="mt-4 text-lg text-white/65">{t("Why.para")}</p>

            <ul className="mt-8 space-y-4">
              {trust.map((text) => (
                <motion.li
                  key={text}
                  variants={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-bronze text-navy-900">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {text}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
              <Stars rating={business.rating} showValue />
              <span className="text-sm text-white/60">
                {business.reviews}+ {t("Why.reviewsLabel")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={statsLabels[i].label}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 text-center"
              >
                <div className="font-display text-4xl font-extrabold text-bronze sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-2 text-sm text-white/65">
                  {statsLabels[i].label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
