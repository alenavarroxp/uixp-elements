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
      isDisabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      isFocusable: {
        true: "pointer-events-auto cursor-pointer hover:scale-105",
        false: "pointer-events-none",
      },
    },

    defaultVariants: {
      size: "md",
      border: "none",
      rounded: "full",
      isDisabled: false,
      isFocusable: false,
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

const textStyle = cva(
  [
    "text-sm",
    "font-semibold",
    "rounded-md",
    "px-4",
    "py-1",
    "whitespace-nowrap",
  ],
  {
    variants: {
      avatarTextColor: {
        white: "bg-white text-black",
        default: "bg-default-500 text-white",
        primary: "bg-primary-500 text-white",
      },
      visibility: {
        hidden: "invisible",
        visible: "visible",
      },
    },
    defaultVariants: {
      avatarTextColor: "default",
      visibility: "hidden",
    },
  }
);

const nameStyle = cva("flex items-center justify-center font-semibold", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarProps = ComponentProps<"img"> &
  VariantProps<typeof avatarStyle> & {
    icon?: React.ReactNode;
    name?: string;
    avatarText?: string;
    avatarTextPosition?: "top" | "bottom";
    avatarTextColor?: "white" | "default" | "primary";
    isFocusable?: boolean;
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
      name,
      avatarText,
      avatarTextPosition,
      avatarTextColor,
      isDisabled,
      isFocusable,
      className,
      ...props
    },
    ref
  ) => {
    const initialLetters = name ? name.slice(0, 3) : "";

    return (
      <div
        className={cn(
          "flex flex-col items-center",
          avatarStyle({ isDisabled, isFocusable }),
          isFocusable && "group"
        )}
      >
        {avatarText && avatarTextPosition === "top" && (
          <p
            className={cn(
              textStyle({
                avatarTextColor,
                visibility: isFocusable ? "hidden" : "visible",
              }),
              "group-hover:visible mb-1"
            )}
          >
            {avatarText}
          </p>
        )}
        <div
          ref={ref}
          className={cn(
            "flex-shrink-0", // Asegurando que el contenedor de la imagen no se reduzca
            avatarStyle({ color, size, border, rounded }),
            "relative overflow-hidden", // Para asegurar el recorte circular
            className
          )}
          style={{ borderRadius: "50%" }} // Asegurando el borde redondeado
          {...props}
        >
          {!src && !icon && name && (
            <div className={cn(nameStyle({ size }))}>{initialLetters}</div>
          )}
          {!src && icon && (
            <div className={cn(iconStyle({ size }))}>{icon}</div>
          )}
          {src && (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              style={{ borderRadius: "50%" }} // Asegurando el borde redondeado
            />
          )}
        </div>
        {avatarText && avatarTextPosition === "bottom" && (
          <p
            className={cn(
              textStyle({
                avatarTextColor,
                visibility: isFocusable ? "hidden" : "visible",
              }),
              "group-hover:visible mt-1"
            )}
          >
            {avatarText}
          </p>
        )}
      </div>
    );
  }
);
