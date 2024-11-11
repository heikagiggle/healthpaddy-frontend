import { cn } from '@/app/utils/helpers/cn';
import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export function InputGroup({ children, className }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'rounded-lg py-2 px-2 flex gap-2 border border-[#202020] border-opacity-30 text-black',
        '[&>.input]:bg-transparent [&>.input:focus-visible]:outline-none',
        className
      )}
    >
      {children}
    </div>
  );
}