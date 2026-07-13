"use client";

import { motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/business";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@/components/icons";

const areas = ["Al Ain", "Zakhir", "Ramlat Zakher", "Abu Dhabi", "Al Hajan St"];

export default function ServiceArea() {
  const reduce = useReducedMotion();

  return (
    <section id="area" className="section-pad relative">
      <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Service area
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Covering {business.city} &amp; {business.region}
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Based on {business.address.split(",")[0]}, we serve homes and
            businesses across the {business.region} emirate with same-day
            callouts where needed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((a) => (
              <motion.span
                key={a}
                initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-sm text-bronze-100"
              >
                {a}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <a
              href={business.phoneHref}
              className="group flex items-center gap-3 text-white/85 transition-colors hover:text-bronze"
            >
              <PhoneIcon className="h-5 w-5 text-bronze" />
              <span className="font-medium">{business.phone}</span>
            </a>
            <div className="flex items-center gap-3 text-white/85">
              <MapPinIcon className="h-5 w-5 text-bronze" />
              <span>{business.address}</span>
            </div>
            <div className="flex items-center gap-3 text-white/85">
              <ClockIcon className="h-5 w-5 text-bronze" />
              <span>{business.hours}</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-navy-800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(160,138,99,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(160,138,99,0.12)_1px,transparent_1px)] bg-[size:38px_38px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(160,138,99,0.15),transparent_60%)]" />
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 200 Q 100 120 200 180 T 400 140" fill="none" stroke="rgba(160,138,99,0.5)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M40 300 Q 120 220 260 250 T 400 220" fill="none" stroke="rgba(160,138,99,0.3)" strokeWidth="2" />
          </svg>
          <motion.div
            className="absolute left-[46%] top-[42%]"
            animate={reduce ? {} : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze/60" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-bronze ring-4 ring-bronze/30" />
            </span>
          </motion.div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-navy-900/80 px-4 py-2 text-sm text-white backdrop-blur">
            Al Qanaa Workshop · {business.city}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
