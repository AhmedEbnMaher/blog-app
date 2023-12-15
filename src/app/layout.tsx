import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import AppProvider from '@/redux/Provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blogs-App',
  description: 'Display List Of blogs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <div style={{ backgroundColor: '#f4f2ee', minHeight: '100vh' }}>
            <NavBar />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
