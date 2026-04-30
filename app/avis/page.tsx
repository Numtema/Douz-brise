import { Navigation } from '@/components/navigation';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Avis Clients',
  description: 'Ce que pensent nos clients de nos prestations de bar à boissons en Normandie.',
};

export default function AvisPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      <Navigation />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
