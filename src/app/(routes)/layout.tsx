import './index.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goodboy',
};

const RootLayout: FCC = ({ children }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
