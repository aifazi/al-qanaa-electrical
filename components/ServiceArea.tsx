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
          <iframe
            title="Al Qanaa Electrical Repairing Workshop location map"
            src={`https://maps.google.com/maps?q=${business.lat},${business.lng}&z=17&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-navy-900/85 px-4 py-2 text-xs text-white backdrop-blur">
            {business.address.split(",")[0]} · {business.city}
          </div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 rounded-full bg-bronze px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-glow transition-transform hover:scale-105"
          >
            Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
