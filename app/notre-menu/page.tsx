import { Navigation } from '@/components/navigation';
import { SeasonalMenu } from '@/components/seasonal-menu';
import { QuoteForm } from '@/components/quote-form';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Notre Menu de Saison',
  description: 'Le menu de boissons naturelles et cocktails de saison proposés par Dou\'z Brise.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      <Navigation />
      <main>
        <SeasonalMenu />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
