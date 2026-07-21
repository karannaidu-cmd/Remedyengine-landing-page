import { cn } from "@/lib/utils";

// Presentational claymorphism surface. Use selectively (engine/feature cards,
// KPI/timeline nodes, hero objects). The hover lift is transform-only and gated
// to fine-pointer devices so touch UIs stay flat and fast (BLUEPRINT §6).

type ClayCardProps = React.ComponentProps<"div"> & {
  tone?: "light" | "dark";
  interactive?: boolean;
};

export function ClayCard({
  tone = "light",
  interactive = false,
  className,
  children,
  ...props
}: ClayCardProps) {
  return (
    <div
      className={cn(
        tone === "dark" ? "clay-dark text-paper-50" : "clay text-ink-900",
        interactive &&
          "transition-all duration-300 ease-out motion-safe:[@media(hover:hover)]:hover:-translate-y-1.5 motion-safe:[@media(hover:hover)]:hover:shadow-[0_28px_70px_rgba(4,61,50,0.22),inset_0_1px_0_rgba(255,255,255,0.9)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
