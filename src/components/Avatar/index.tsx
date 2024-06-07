import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";

const avatarStyle = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "text-white",
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
        xl: "w-20 h-20",
        "2xl": "w-24 h-24",
        "3xl": "w-32 h-32",
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
      rounded: "none",
    },
  }
);

const iconStyle = cva("transition-all", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
      "2xl": "text-4xl",
      "3xl": "text-5xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const textStyle = cva(["text-sm", "font-semibold"]);

type AvatarProps = ComponentProps<"img"> &
  VariantProps<typeof avatarStyle> & {
    icon: React.ReactNode;
    avatarText?: string;
    avatarTextPosition?: "top" | "bottom";
  };

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      color,
      border,
      rounded,
      icon,
      src,
      alt,
      size,
      avatarText,
      avatarTextPosition,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex items-center justify-center flex-col">
        {avatarText && avatarTextPosition === "top" && (
          <p className={cn(textStyle)}>{avatarText}</p>
        )}
        <div
          ref={ref}
          className={cn(
            avatarStyle({ color, size, border, rounded }),
            className
          )}
          {...props}
        >
          {!src && icon && (
            <div className={cn(iconStyle({ size }))}>{icon}</div>
          )}
          {src && (
            <img src={src} alt={alt} className={cn(avatarStyle({ rounded }))} />
          )}
        </div>
        {avatarText && avatarTextPosition === "bottom" && (
          <p className={cn(textStyle)}>{avatarText}</p>
        )}
      </div>
    );
  }
);
