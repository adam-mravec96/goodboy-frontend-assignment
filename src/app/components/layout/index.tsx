'use client';

import { Footer } from '@components/footer';
import type { Route } from 'next';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const FORM_LAYOUT_ROUTES: ReadonlyArray<Route> = [
  '/',
  '/contactForm',
  '/summary',
];

export const AppLayout: FCC = ({ children }) => {
  const isFormLayout = FORM_LAYOUT_ROUTES.includes(usePathname() as Route);

  return isFormLayout ? (
    <div className='flex min-h-screen gap-20 bg-white p-5'>
      {/* === ĽAVÁ STRANA (FORMULÁR) === */}
      <div className='p flex flex-1 flex-col pl-15'>
        <main className='flex-grow'>{children}</main>
        <div className='border-t' />
        <Footer />
      </div>

      {/* === PRAVÁ STRANA (OBRÁZOK) === */}
      <div className='relative w-2/5 flex-shrink-0'>
        <Image
          src='/imgDog.svg'
          alt='Pes-img'
          fill
          className='rounded-3xl object-cover object-bottom'
          priority
        />
      </div>
    </div>
  ) : (
    <div className='container mx-auto flex min-h-screen flex-col'>
      <main className='flex-grow py-12'>{children}</main>
      <div className='border-t' />
      <Footer />
    </div>
  );
};
