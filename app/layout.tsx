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
  title: {
    default: "Dou'z Brise | Bar à Boissons Naturelles & Végétales Normandie",
    template: "%s | Dou'z Brise"
  },
  description: "Découvrez Dou'z Brise, votre bar à boissons naturelles et végétales. Prestations événementielles sur mesure au Havre et en Normandie : mariages, ateliers, entreprises.",
  keywords: ["bar à boissons", "cocktails sans alcool", "boissons végétales", "smoothies naturels", "animations événementielles", "Le Havre", "Seine-Maritime", "Normandie", "mariage bio", "traiteur local"],
  authors: [{ name: "Laëtitia - Dou'z Brise" }],
  creator: "Dou'z Brise",
  metadataBase: new URL('https://douzbrise.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dou'z Brise | Bar à Boissons Naturelles & Événementiel",
    description: "Des recettes fraîches, saines et personnalisées pour vos plus beaux événements au Havre et en Normandie.",
    url: 'https://douzbrise.fr',
    siteName: "Dou'z Brise",
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/assets/hero-douz-brise-vitalite.png',
        width: 1200,
        height: 630,
        alt: "Dou'z Brise - Bar à boissons naturelles",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dou'z Brise | Bar à Boissons Naturelles",
    description: "Prestations événementielles de boissons saines et végétales en Normandie.",
    images: ['/assets/hero-douz-brise-vitalite.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans bg-cream-soft text-text-main antialiased selection:bg-green-brand/20 selection:text-green-deep" suppressHydrationWarning>{children}</body>
    </html>
  );
}

