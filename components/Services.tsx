"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  AcIcon,
  BreakerIcon,
  WiringIcon,
  ApplianceIcon,
  EmergencyIcon,
  MaintenanceIcon,
  CheckIcon,
} from "@/components/icons";

const icons = [
  AcIcon,
  BreakerIcon,
  WiringIcon,
  ApplianceIcon,
  EmergencyIcon,
  MaintenanceIcon,
];

export default function Services() {
  const t = useTranslations();
  const reduce = useReducedMotion();
  const services = t.raw("Services.items") as Array<{
    title: string;
    desc: string;
    points: string[];
  }>;

  const grid = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const card = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      };

  return (
    <section id="services" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            {t("Nav.services")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Services.title")}
          </h2>
          <p className="mt-4 text-lg text-white/65">{t("Services.intro")}</p>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, idx) => {
            const Icon = icons[idx];
            return (
              <motion.article
                key={s.title}
                variants={card}
                whileHover={reduce ? {} : { y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 p-7 transition-colors duration-300 hover:border-bronze/50 hover:bg-navy-700/60"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-bronze/0 blur-2xl transition-colors duration-500 group-hover:bg-bronze/15" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-bronze/10 text-bronze ring-1 ring-bronze/30 transition-all duration-300 group-hover:bg-bronze group-hover:text-navy-900">
                    <motion.span
                      whileHover={reduce ? {} : { rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex"
                    >
                      <Icon />
                    </motion.span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {s.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-bronze/20 text-bronze">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
