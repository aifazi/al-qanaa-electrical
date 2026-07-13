"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PhoneIcon, SparkIcon, MaintenanceIcon, CheckIcon } from "@/components/icons";

const icons = [PhoneIcon, SparkIcon, MaintenanceIcon, CheckIcon];

export default function Process() {
  const t = useTranslations();
  const reduce = useReducedMotion();
  const steps = t.raw("Process.steps") as Array<{ title: string; desc: string }>;

  const line = reduce
    ? { hidden: { scaleY: 1 }, visible: { scaleY: 1 } }
    : {
        hidden: { scaleY: 0 },
        visible: {
          scaleY: 1,
          transition: { duration: 1.4, ease: "easeInOut" },
        },
      };

  return (
    <section id="process" className="section-pad relative">
      <div className="container-px mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            {t("Process.title")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t("Process.subtitle")}
          </h2>
        </div>

        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={line}
            className="absolute left-[27px] top-2 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-bronze via-bronze/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const Icon = icons[i];
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    left ? "sm:ml-0 sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-bronze ring-2 ring-bronze ${
                      left ? "sm:-right-7 right-0" : "sm:-left-7 left-0"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div
                    className={`rounded-2xl border border-white/10 bg-navy-800/60 p-6 ${
                      left ? "sm:ml-auto" : ""
                    } w-full sm:w-auto`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-bronze/80">
                      {t("Process.title")} {i + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
