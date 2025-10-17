import { Toaster } from 'sonner';

export const ToastProvider: FCC = ({ children }) => (
  <>
    <Toaster
      toastOptions={{
        duration: 4000,
        className: 'toaster group',
        style: {
          '--normal-bg': 'var(--popover)',
          '--normal-border': 'var(--border)',
          '--normal-text': 'var(--popover-foreground)',
        } as React.CSSProperties,
      }}
    />

    {children}
  </>
);
