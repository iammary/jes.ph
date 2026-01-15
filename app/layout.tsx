import type { Metadata } from 'next';
import { Cal_Sans, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { BodyContainer } from '@/layouts/BodyContainer';
import { Analytics } from '@vercel/analytics/next';

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
  metadataBase: new URL('https://jes.ph'),
  title: 'Jes Anub | Software Engineer',
  description: 'Software engineer, frontend architect, based in Melbourne.',
  openGraph: {
    images: [
      {
        url: '/jes-code.png',
        width: 1200,
        height: 630,
        alt: 'Jes Anub | Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jes-code.png'],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${calSans.variable} ${inter.variable} antialiased`}>
      <BodyContainer>{children}</BodyContainer>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
