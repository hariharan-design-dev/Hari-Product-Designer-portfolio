import type { Metadata } from 'next';
import { Instrument_Sans, Inter, Caveat } from 'next/font/google';
import '../styles/globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Hari Haran — Product Designer',
  description:
    'Product Designer specializing in UX/UI, visual design, AI-assisted workflows, and technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="bg-[#F7F5F0] text-[#111111] antialiased selection:bg-[#FF572F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
