import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

const DorisCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border-quaternary bg-bg-quaternary",
        className
      )}
      {...props}
    />
  )
);
DorisCard.displayName = "DorisCard";

const DorisCardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 px-6 pt-6", className)}
    {...props}
  />
));
DorisCardHeader.displayName = "DorisCardHeader";

const DorisCardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 py-4", className)} {...props} />
));
DorisCardContent.displayName = "DorisCardContent";

const DorisCardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center border-t border-border-quaternary px-6 py-4",
      className
    )}
    {...props}
  />
));
DorisCardFooter.displayName = "DorisCardFooter";

export { DorisCard, DorisCardHeader, DorisCardContent, DorisCardFooter };
