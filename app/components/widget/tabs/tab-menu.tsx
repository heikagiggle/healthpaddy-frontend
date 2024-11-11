'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

import { cn } from '../../../utils/helpers/cn';
import { TabMenuItem } from './tab-menu-item';

type Props = {
  items: Record<string, { label: string; title: string; component: ReactNode }>;
  title: string;
  className?: string;
};

export function TabMenu({ items, title, className }: Props) {
  const searchParams = useSearchParams();
  // const tab = searchParams.get('tab');

  const switchTab = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(title, key);

      window.history.pushState(null, '', `?${params.toString()}`);
    },
    [title, searchParams]
  );

  return (
    <div className={cn('flex flex-col', className)}>
      <div
        className={cn(
          'flex px-2 gap-3 w-full z-10 border-b border-b-light-300'
        )}
      >
        {Object.keys(items).map((item) => (
          <TabMenuItem
            tag={item}
            active={searchParams.get(title)}
            onClick={switchTab}
            key={`tab-${title}-${item}`}
          >
            {items[item]?.label}
          </TabMenuItem>
        ))}
      </div>
      <div className={'h-0 flex-auto flex flex-col'}>
        {items[searchParams.get(title) ?? '']?.component ?? null}
      </div>
    </div>
  );
}