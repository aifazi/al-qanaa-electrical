import { cn } from "@/lib/cn";

type StarsProps = {
  rating?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
};

export default function Stars({
  rating = 4.9,
  size = 18,
  className,
  showValue = false,
}: StarsProps) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div className={cn("inline-flex items-center gap-1", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = i === full && hasHalf;
        return (
          <Star key={i} size={size} variant={filled ? "full" : half ? "half" : "empty"} />
        );
      })}
      {showValue && (
        <span className="ml-1 text-sm font-semibold text-white">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

function Star({
  size,
  variant,
}: {
  size: number;
  variant: "full" | "half" | "empty";
}) {
  const id = `half-${Math.random().toString(36).slice(2)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id}>
          <stop offset="50%" stopColor="#c9a24b" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
        fill={
          variant === "full"
            ? "#c9a24b"
            : variant === "half"
            ? `url(#${id})`
            : "none"
        }
        stroke="#c9a24b"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
