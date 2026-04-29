import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { Problem } from '@/components/problem';
import { Transformation } from '@/components/transformation';
import { Offers } from '@/components/offers';
import { SeasonalMenu } from '@/components/seasonal-menu';
import { Workshops } from '@/components/workshops';
import { Process } from '@/components/process';
import { Testimonials } from '@/components/testimonials';
import { GeographicArea } from '@/components/geographic-area';
import { QuoteForm } from '@/components/quote-form';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Transformation />
        <Offers />
        <SeasonalMenu />
        <Workshops />
        <Process />
        <Testimonials />
        <GeographicArea />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
