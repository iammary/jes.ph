import type { Metadata } from 'next';
import { Cal_Sans, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { BodyContainer } from '@/layout/BodyContainer';

const calSans = Cal_Sans({
  variable: '--font-cal-sans',
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['sans-serif'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Jes | Software Engineer',
  description: 'Frontend-focused software engineer based in Melbourne.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calSans.variable} ${inter.variable} antialiased`}>
        <BodyContainer>{children}</BodyContainer>
      </body>
    </html>
  );
}
