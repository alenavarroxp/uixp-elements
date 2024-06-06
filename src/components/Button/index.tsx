import { cn } from "@/utils";
import "animate.css";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, Ref } from "react";

const buttonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "text-center",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "transform",
    "ease-in-out",
    "duration-300",
    "hover:scale-105",
    "active:scale-95",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: " duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      color: {
        default: "bg-default-500 text-white",
        primary: "bg-primary-500 text-white",
      },
      iconPosition: {
        left: "flex items-center",
        right: "flex items-center",
        none: "",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      isDisabled: {
        true: "bg-gray-500 pointer-events-none opacity-50 select-none",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "default",
        className: "bg-default-500 text-white",
      },
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary-500 text-white",
      },
      {
        variant: "outline",
        color: "default",
        className: "text-default-600 border-default-500 bg-transparent",
      },
      {
        variant: "outline",
        color: "primary",
        className: "text-primary-600 border-primary-500 bg-transparent",
      },
      {
        variant: "ghost",
        color: "default",
        className: `text-default-500 bg-transparent hover:bg-default-500 hover:text-white`,
      },
      {
        variant: "ghost",
        color: "primary",
        className: `text-primary-500 bg-transparent hover:bg-primary-500 hover:text-white`,
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "default",
      iconPosition: "none",
      rounded: "2xl",
      fullWidth: false,
      isDisabled: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right" | "none";
    isDisabled?: boolean;
  };

const buttonPadding = {
  sm: "px-2 py-2",
  md: "px-2.5 py-2.5",
  lg: "px-3 py-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      color,
      icon,
      iconPosition = "none",
      rounded,
      fullWidth,
      isDisabled = false,
      className,
      children,
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) => {
    const padding =
      !children && icon
        ? buttonPadding[size as keyof typeof buttonPadding] || buttonPadding.md
        : "";

    return (
      <button
        ref={ref}
        className={cn(
          buttonStyles({
            variant,
            size,
            color,
            iconPosition,
            rounded,
            fullWidth,
            isDisabled,
            className,
          }),
          padding
        )}
        disabled={isDisabled}
        {...props}
      >
        {children ? (
          <>
            {icon && iconPosition === "left" && (
              <span className="mr-3">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="ml-3">{icon}</span>
            )}
          </>
        ) : (
          <span className="rounded-full">{icon}</span>
        )}
      </button>
    );
  }
);
