import { company } from "@/lib/content";

// Renders the brand logo.
// SVG files are served directly — Next.js Image doesn't optimize SVGs.
export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt={company.name}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
