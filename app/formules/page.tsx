import { Navigation } from '@/components/navigation';
import { Offers } from '@/components/offers';
import { QuoteForm } from '@/components/quote-form';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Nos Formules',
  description: 'Découvrez nos différentes formules de bar à boissons pour vos événements en Normandie.',
};

export default function FormulesPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      <Navigation />
      <main>
        <Offers />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
