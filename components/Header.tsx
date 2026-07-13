"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { business } from "@/lib/business";
import { PhoneIcon } from "@/components/icons";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const navItems = [
  { key: "services", href: "#services" },
  { key: "why", href: "#why" },
  { key: "process", href: "#process" },
  { key: "reviews", href: "#reviews" },
  { key: "area", href: "#area" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const t = useTranslations();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 lg:h-20">
        <a href="#main" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-bronze/15 ring-1 ring-bronze/40 transition-colors group-hover:bg-bronze/25">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-bronze"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight sm:text-lg">
              {t("Brand.name")}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-bronze/80 sm:text-xs">
              {t("Brand.sub")}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {t(`Nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LocaleSwitcher />
        </div>

        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <LocaleSwitcher />
          </div>
          <a
            href={business.phoneHref}
            className="group flex items-center gap-2 rounded-full bg-bronze px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-glow transition-all duration-300 hover:scale-[1.04] hover:bg-bronze-300 active:scale-95 sm:px-5"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{t("Common.callNow")}</span>
            <span className="sm:hidden">{t("Common.call")}</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
