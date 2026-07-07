import { company } from "@/lib/content";

// Renders the brand logo, swapping to a white-text variant in dark mode.
// SVG files are served directly — Next.js Image doesn't optimize SVGs.
export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt={company.name}
        fetchPriority={priority ? "high" : "auto"}
        className={`${className} dark:hidden`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-dark.svg"
        alt={company.name}
        fetchPriority={priority ? "high" : "auto"}
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
