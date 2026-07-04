import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Shopify Developer | Freelance Shopify Expert',
  description:
    'Premium Shopify development services for high-converting stores, theme customization, speed optimization, and more.',
  keywords: [
    'Shopify developer',
    'Shopify store design',
    'Shopify expert',
    'Fiverr Shopify developer',
  ],
  openGraph: {
    title: 'Professional Shopify Developer',
    description: 'High-converting Shopify stores built for growth.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
