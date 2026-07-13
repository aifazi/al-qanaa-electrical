"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("Locale");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelect(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/15 p-1 text-xs font-semibold"
      aria-label={t("label")}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelect(l)}
          disabled={isPending}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l
              ? "bg-bronze text-navy-900"
              : "text-white/70 hover:text-white"
          }`}
        >
          {l === "en" ? "EN" : "ع"}
        </button>
      ))}
    </div>
  );
}
