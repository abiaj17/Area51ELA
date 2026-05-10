import type { Metadata } from 'next';
import { JetBrains_Mono, IBM_Plex_Mono, Tinos } from 'next/font/google';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import './globals.css';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700', '800'],
});

const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const tinos = Tinos({
  subsets: ['latin'],
  variable: '--font-tinos',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'AREA 51 // CLASSIFIED DOSSIER',
  description:
    'A 23-by-25-mile rectangle of Nevada desert the U.S. government denied for 58 years. An ELA research dossier on the facts, theories, and the smoke screen between them.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${plex.variable} ${tinos.variable}`}>
      <body className="min-h-svh bg-[--color-bg] text-[--color-phosphor] antialiased">
        <SmoothScrollProvider>
          {children}
          {/* site-wide CRT overlay — stays present past the hero so the whole page feels like one terminal */}
          <div
            aria-hidden="true"
            className="scanlines pointer-events-none fixed inset-0 z-[60] mix-blend-multiply opacity-60"
          />
          <div
            aria-hidden="true"
            className="vignette pointer-events-none fixed inset-0 z-[60]"
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
