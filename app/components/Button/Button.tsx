"use client";

import { ComponentProps, type PropsWithChildren, ReactNode } from "react";

import { cn } from "../../../lib/utils";
import { Button as UIButton } from "../ui/button";

type Props = ComponentProps<typeof UIButton> & {
  loading?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
};

export function Button({
  children,
  className,
  loading,
  icon,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <UIButton
      className={cn(
        "  bg-[#43A5AE] px-5 py-2 rounded-full text-white flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
      {loading && <span className={"w-5 ml-3"}>...</span>}
      {!loading && icon && icon}
    </UIButton>
  );
}
