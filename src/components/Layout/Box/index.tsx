import { ComponentPropsWithRef, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ ...props }: BoxProps) => {
    return <div {...props} />;
  }
);
