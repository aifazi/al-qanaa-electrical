import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("Nav");
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-5xl font-bold">404</h1>
      <p className="text-white/60">Page not found.</p>
      <Link
        href="/"
        className="rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-navy-900"
      >
        {t("services")}
      </Link>
    </div>
  );
}
