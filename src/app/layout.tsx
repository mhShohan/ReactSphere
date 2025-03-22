import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ReactSphere',
  description:
    'A collection of small yet powerful React components, demonstrating different concepts and ideas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${ubuntu.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
