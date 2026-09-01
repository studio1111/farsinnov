import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const button3dVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-[transform,box-shadow] duration-200 will-change-transform active:translate-y-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        neon: "bg-primary text-primary-foreground [box-shadow:var(--shadow-3d)] hover:-translate-y-[2px] active:[box-shadow:var(--shadow-3d-active)]",
        glass:
          "glass-panel text-foreground hover:-translate-y-[2px] hover:text-primary active:translate-y-0",
        outline:
          "border border-primary/50 bg-transparent text-primary hover:-translate-y-[2px] hover:bg-primary/10",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "neon", size: "md" },
  },
);

export type Button3DProps = ComponentProps<"button"> & VariantProps<typeof button3dVariants>;

export function Button3D({ className, variant, size, ...props }: Button3DProps) {
  return <button className={cn(button3dVariants({ variant, size }), className)} {...props} />;
}

export function Link3D({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & VariantProps<typeof button3dVariants>) {
  return <a className={cn(button3dVariants({ variant, size }), className)} {...props} />;
}
