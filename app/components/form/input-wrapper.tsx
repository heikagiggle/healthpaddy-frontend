import { PropsWithChildren } from 'react';

import { cn } from "../../../lib/utils";

type Props = {
  className?: string;
  role?: string;
  focus?: boolean;
  focusable?: boolean;
  disabled?: boolean;
};

export function InputWrapper(props: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'flex items-center w-full rounded-md border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground',
        'focus-within:outline-none ',
        '[&>.input]:bg-transparent [&>.input:focus-visible]:outline-none',
        props.focus && 'outline-none ',
        props.disabled && 'cursor-not-allowed opacity-50',
        props.className
      )}
      role={props.role}
      tabIndex={props.focusable ? 0 : undefined}
    >
      {props.children}
    </div>
  );
}
