"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { business } from "@/lib/business";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MailIcon,
} from "@/components/icons";
import Stars from "@/components/Stars";

const quickLinkKeys = [
  { key: "services", href: "#services" },
  { key: "why", href: "#why" },
  { key: "process", href: "#process" },
  { key: "reviews", href: "#reviews" },
  { key: "area", href: "#area" },
];

const socials = [
  { label: "Google", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  const t = useTranslations();
  const reduce = useReducedMotion();
  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-navy-900">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-bronze/15 ring-1 ring-bronze/40">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-bronze" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold">{t("Brand.name")}</span>
            </div>
            <p className="mt-4 text-sm text-white/60">{t("Footer.tagline")}</p>
            <div className="mt-4 inline-flex items-center gap-2">
              <Stars rating={business.rating} showValue size={16} />
              <span className="text-xs text-white/55">{business.reviews}+ {t("Common.reviews")}</span>
            </div>
          </motion.div>

          <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze">
              {t("Footer.quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinkKeys.map((l) => (
                <li key={l.key}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-bronze"
                  >
                    {t(`Nav.${l.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze">
              {t("Footer.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={business.phoneHref} className="flex items-center gap-2 hover:text-bronze">
                  <PhoneIcon className="h-4 w-4 text-bronze" />
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-none text-bronze" />
                {business.address}
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-bronze" />
                {t("Area.hours")}
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-bronze">
                  <MailIcon className="h-4 w-4 text-bronze" />
                  {business.email}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bronze">
              {t("Footer.follow")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 transition-colors hover:border-bronze/50 hover:text-bronze"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-semibold text-navy-900 shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
            >
              <PhoneIcon className="h-4 w-4" />
              {t("Common.callNow")}
            </a>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
          {t("Footer.rights", {
            year: new Date().getFullYear(),
            city: business.city,
            region: business.region,
            country: business.country,
          })}
        </div>
      </div>
    </footer>
  );
}
