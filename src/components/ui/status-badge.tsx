import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

type BadgeVariant = "success" | "error" | "neutral";

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-bg-success-tertiary text-text-success-tertiary",
  error: "bg-bg-error-tertiary text-text-error-tertiary",
  neutral: "bg-bg-tertiary text-text-tertiary",
};

const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, variant = "success", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
StatusBadge.displayName = "StatusBadge";

export { StatusBadge, type StatusBadgeProps };
