import type { Metadata } from 'next';
import { Cal_Sans, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Scene } from '@/layout/Scene';
import { Details } from '@/layout/Details';

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
        <div id="root">
          <Scene />
          <div className="absolute top-0 left-0 h-full w-full text-white pointer-events-none *:pointer-events-auto overflow-y-auto">
            <Details />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
