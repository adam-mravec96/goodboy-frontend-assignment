import './index.css';

import { Providers } from '@app/providers';
import { AppLayout } from '@components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goodboy',
};

const RootLayout: FCC = ({ children }) => (
  <html lang='sk'>
    <body className='flex min-h-screen flex-col'>
      <Providers>
        <AppLayout>{children}</AppLayout>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
