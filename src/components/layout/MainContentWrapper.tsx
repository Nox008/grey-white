// /components/layout/MainContentWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

export function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current page is the homepage.
  const isHomePage = pathname === '/';

  return (
    // On all pages EXCEPT the homepage, we add top padding (pt-20)
    // to offset the height of our fixed header (h-20).
    <main className={cn('flex-grow', { 'pt-20': !isHomePage })}>
      {children}
    </main>
  );
}