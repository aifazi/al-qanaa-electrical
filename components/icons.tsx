import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function AcIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <rect x="2" y="4" width="20" height="8" rx="2" />
      <path d="M6 8h12" />
      <path d="M5 16v3M9 16v3M13 16v3M17 16v3" />
      <path d="M3 12c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
    </svg>
  );
}

export function BreakerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 6v6l4 4" />
      <circle cx="12" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function WiringIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <path d="M4 4c0 4 4 4 4 8s-4 4-4 8" />
      <path d="M20 4c0 4-4 4-4 8s4 4 4 8" />
      <circle cx="4" cy="20" r="1.6" fill="currentColor" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function ApplianceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M9 22v-3M15 22v-3" />
      <circle cx="12" cy="11" r="3" />
      <path d="M12 8v1.5M12 12.5V14M9.5 11h1.5M13 11h1.5" />
    </svg>
  );
}

export function EmergencyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <path d="M12 2 2 20h20L12 2Z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function MaintenanceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-7 w-7", className)} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}
