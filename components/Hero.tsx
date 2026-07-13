"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { business } from "@/lib/business";
import { PhoneIcon, SparkIcon } from "@/components/icons";
import Stars from "@/components/Stars";

export default function Hero() {
  const t = useTranslations();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const word = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      };

  const headline = t.raw("Hero.headline") as string[];

  return (
    <section
      ref={ref}
      id="main"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
          alt="Close-up of a circuit board being diagnosed with precision tools"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(160,138,99,0.18),transparent_55%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px mx-auto w-full max-w-7xl pt-28"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-sm font-medium text-bronze-100 backdrop-blur"
          >
            <SparkIcon className="h-4 w-4 text-bronze" />
            {t("Hero.tagline")}
          </motion.div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {headline.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={word}
            className="mt-6 max-w-xl text-lg text-white/75"
          >
            {t("Hero.subtitle")}
          </motion.p>

          <motion.div
            variants={word}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={business.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-7 py-4 text-base font-semibold text-navy-900 shadow-glow transition-all duration-300 hover:scale-[1.04] hover:bg-bronze-300 active:scale-95"
            >
              <PhoneIcon className="h-5 w-5 transition-transform group-hover:rotate-6" />
              {t("Common.call")} {business.phone}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:border-bronze/60 hover:bg-white/5 active:scale-95"
            >
              {t("Hero.bookCta")}
            </a>
          </motion.div>

          <motion.div variants={word} className="mt-10 flex items-center gap-4">
            <motion.div
              initial={reduce ? { opacity: 1 } : { scale: 0, rotate: -20 }}
              animate={reduce ? {} : { scale: 1, rotate: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 18 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
            >
              <Stars rating={business.rating} />
              <div className="leading-tight">
                <div className="text-sm font-bold text-white">
                  {business.rating.toFixed(1)}
                </div>
                <div className="text-xs text-white/60">
                  {t("Common.googleRating")}
                </div>
              </div>
            </motion.div>
            <div className="text-sm text-white/60">
              <span className="font-semibold text-white">{business.reviews}+</span>{" "}
              {t("Common.reviews")}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.span
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-bronze"
          />
        </div>
      </motion.div>
    </section>
  );
}
