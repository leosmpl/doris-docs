import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "default" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface DorisButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  default:
    "bg-bg-brand-primary text-text-white hover:bg-brand-800 active:bg-brand-700",
  secondary:
    "bg-bg-tertiary text-text-primary hover:bg-bg-secondary active:bg-brand-400",
  outline:
    "border border-border-quaternary bg-transparent text-text-primary hover:bg-bg-secondary",
  ghost: "bg-transparent text-text-primary hover:bg-bg-secondary",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const DorisButton = forwardRef<HTMLButtonElement, DorisButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
DorisButton.displayName = "DorisButton";

export { DorisButton, type DorisButtonProps };
