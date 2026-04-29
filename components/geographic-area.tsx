import { MapPin } from 'lucide-react';

export function GeographicArea() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-green-light/20 rounded-[2rem] p-8 sm:p-12 border border-green-brand/10">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <MapPin size={32} className="text-green-brand" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-green-deep tracking-tight mb-4">
          Basée près du Havre, mobile jusqu'à 100 km.
        </h2>
        <p className="text-lg text-text-main mb-6">
          Dou'z Brise intervient au Havre, dans les agglomérations voisines, en Seine-Maritime et jusqu'à 100 km autour de Tancarville selon la prestation.
        </p>
        <p className="text-sm text-text-soft">
          Le déplacement local est inclus dans certaines formules. Les déplacements plus éloignés sont indiqués clairement dans le devis.
        </p>
      </div>
    </section>
  );
}
