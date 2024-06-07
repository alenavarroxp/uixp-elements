import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const avatarStyle = cva(
  [
    "select-none",
    "pointer-events-none",
    "object-cover",
    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      size: {
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
      color: {
        default: "bg-default-500",
        primary: "bg-primary-500",
      },
      rounded: {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      border: {
        none: "",
        default: "border-2 border-default-500",
        primary: "border-2 border-primary-500",
      },
    },

    defaultVariants: {
      color: "default",
      size: "md",
      border: "none",
      rounded: "full",
    },
  }
);

type AvatarProps = ComponentProps<"img"> & VariantProps<typeof avatarStyle>;

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ color, border, rounded, src, alt, size, className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(avatarStyle({ color, size, border, rounded }), className)}
        {...props}
      />
    );
  }
);
