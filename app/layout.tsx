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
  description: "Dou'z Brise propose des bars à boissons naturelles, végétales et équilibrées pour sublimer vos événements au Havre et en Normandie (mariage, EVJF, entreprises).",
  keywords: ["bar à boissons", "cocktails sans alcool", "boissons végétales", "traiteur boisson", "Le Havre", "Seine-Maritime", "mariage", "événementiel local"],
  openGraph: {
    title: "Dou'z Brise | Bar à Boissons Naturelles & Événementiel",
    description: "Des recettes fraîches, saines et personnalisées pour vos plus beaux événements. Goûtez la différence.",
    url: 'https://douzbrise.fr',
    siteName: "Dou'z Brise",
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans bg-cream-soft text-text-main antialiased selection:bg-green-brand/20 selection:text-green-deep" suppressHydrationWarning>{children}</body>
    </html>
  );
}

