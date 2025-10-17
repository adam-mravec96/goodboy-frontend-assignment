import { ModalProvider } from '@app/contexts/modal';
import { QueryClientProvider } from '@app/providers/client';
import { ToastProvider } from '@app/providers/toast';

export const Providers: FCC = ({ children }) => (
  <ToastProvider>
    <ModalProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ModalProvider>
  </ToastProvider>
);
