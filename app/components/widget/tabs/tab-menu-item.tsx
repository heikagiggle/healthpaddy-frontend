import { PropsWithChildren } from 'react';

import { cn } from '../../../utils/helpers/cn';

interface Props {
  tag: string;
  active?: string | null;
  onClick?: (tag: string) => void;
}

export function TabMenuItem({
  tag,
  onClick,
  children,
  active,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={cn(
        'pb-2 border-b-4 px-2 border-transparent text-[#797980] ease-in duration-200',
        'hover:text-[black]',
        active === tag && 'border-[black] text-[black]'
      )}
      onClick={() => onClick?.(tag)}
    >
      {children}
    </button>
  );
}