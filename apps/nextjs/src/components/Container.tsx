import { type FC, type HTMLAttributes } from "react";
import clsx from "clsx";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
};
