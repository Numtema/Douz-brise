import type {Metadata} from 'next';
import { Playfair_Display, Nunito, Caveat } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dou'z Brise | Bar à Boissons Naturelles & Végétales",
  description: "Dou'z Brise crée des bars à boissons naturelles, végétales et faites maison pour transformer vos événements en expériences fraîches, gourmandes et mémorables.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans bg-cream-soft text-text-main antialiased selection:bg-green-brand/20 selection:text-green-deep" suppressHydrationWarning>{children}</body>
    </html>
  );
}

