'use client';

import { type PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../utils/helpers/cn';

type Props = {
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
};

export function Button({
  children,
  className,
  loading,
  type,
  onClick,
  icon,
  disabled,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={cn(
        'bg-[#43A5AE] px-5 py-2 rounded-full text-white flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed',
        loading && '',
        className
      )}
      disabled={disabled ?? loading}
      type={type}
      onClick={onClick}
    >
      {children}
      {loading && (
         <span className={'w-5 ml-3'}>
         ...
       </span>
      )}
      {!loading && icon && icon}
    </button>
  );
}
