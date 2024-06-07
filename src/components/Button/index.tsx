import { cn } from "@/utils";
import "animate.css";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, Ref, useState } from "react";

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
        solid: "border-2 ",
        outline: "border-2",
        ghost: " duration-300 border-2 border-transparent",
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
      loaderPosition: {
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
      isLoading: {
        true: "pointer-events-none opacity-50 select-none",
        false: "",
      },
      activeState: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "default",
        className: "bg-default-500 text-white border-default-500",
      },
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary-500 text-white border-primary-500",
      },
      {
        variant: "outline",
        color: "default",
        className:
          "text-default-600 border-default-500 bg-transparent hover:bg-default-500 hover:text-white",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-500 hover:text-white",
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
      loaderPosition: "none",
      rounded: "2xl",
      fullWidth: false,
      isDisabled: false,
      isLoading: false,
      activeState: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loaderPosition?: "left" | "right" | "none";
    isDisabled?: boolean;
    isLoading?: boolean;
    activeState?: boolean;
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
      leftIcon,
      rightIcon,
      loaderPosition = "none",
      rounded,
      fullWidth,
      isDisabled = false,
      isLoading = false,
      activeState = false,
      className,
      children,
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) => {
    const [loading, setLoading] = useState(isLoading);
    const padding =
      !children && (leftIcon || rightIcon)
        ? buttonPadding[size as keyof typeof buttonPadding] || buttonPadding.md
        : "";

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (!activeState) return;
      if (props.onClick) props.onClick(e);
      setLoading(true);
      // Simulate an async action
      setTimeout(() => {
        setLoading(false);
      }, 5000); // 2 seconds
    };

    return (
      <button
        ref={ref}
        className={cn(
          buttonStyles({
            variant,
            size,
            color,
            loaderPosition,
            rounded,
            fullWidth,
            isDisabled,
            isLoading: loading,
            className,
          }),
          padding
        )}
        disabled={isDisabled || loading}
        onClick={handleClick}
        {...props}
      >
        {children ? (
          <>
            {leftIcon && loaderPosition === "none" && (
              <span className={`mr-3 ${loading ? "animate-spin" : ""}`}>
                {leftIcon}
              </span>
            )}
            {leftIcon && loaderPosition === "left" && loading && (
              <span className={`mr-3 ${loading ? "animate-spin" : ""}`}>
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && loaderPosition === "none" && (
              <span className={`ml-3 ${loading ? "animate-spin" : ""}`}>
                {rightIcon}
              </span>
            )}
            {rightIcon && loaderPosition === "right" && loading && (
              <span className={`ml-3 ${loading ? "animate-spin" : ""}`}>
                {rightIcon}
              </span>
            )}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className={`rounded-full ${loading ? "animate-spin" : ""}`}>
                {leftIcon}
              </span>
            )}
            {rightIcon && (
              <span className={`rounded-full ${loading ? "animate-spin" : ""}`}>
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);
