import { cn } from "@/utils";
import "animate.css";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
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
    },
    compoundVariants: [
      {
        variant: "solid",
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
      isDisabled: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    isDisabled?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      color,
      icon,
      iconPosition = "left",
      rounded,
      isDisabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
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
            isDisabled,
            className,
          })
        )}
        disabled={isDisabled}
        {...props}
      >
        {children ? (
          <>
            {icon && iconPosition === "left" && (
              <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="ml-2">{icon}</span>
            )}
          </>
        ) : (
          <span>{icon}</span>
        )}
      </button>
    );
  }
);
