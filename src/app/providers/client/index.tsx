'use client';

import { getQueryClient } from '@app/client';
import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

const QueryDevtools = dynamic(
  () =>
    import('@tanstack/react-query-devtools/production').then(
      (module) => module.ReactQueryDevtools,
    ),
  {
    ssr: false,
  },
);

export const QueryClientProvider: FCC = ({ children }) => (
  <TanstackQueryClientProvider client={getQueryClient({})}>
    {children}
    {process.env.NODE_ENV === 'development' && <QueryDevtools />}
  </TanstackQueryClientProvider>
);
