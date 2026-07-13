"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { business } from "@/lib/business";
import { PhoneIcon } from "@/components/icons";

export default function MobileCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setShow(y > 500);
  });

  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: show ? 0 : 120 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="fixed inset-x-0 bottom-0 z-50 p-4 lg:hidden"
      aria-hidden={!show}
    >
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-3 rounded-full bg-bronze px-6 py-4 text-base font-semibold text-navy-900 shadow-glow active:scale-95"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now · {business.phone}
      </a>
    </motion.div>
  );
}
