import { Navigation } from '@/components/navigation';
import { Workshops } from '@/components/workshops';
import { QuoteForm } from '@/components/quote-form';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Nos Ateliers',
  description: 'Participez à nos ateliers de création de boissons naturelles et découvrez nos recettes.',
};

export default function AteliersPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      <Navigation />
      <main>
        <Workshops />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
