'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function GeographicArea() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 rounded-[2rem] bg-green-light/5 animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/sur-mesure-douz-brise.png"
          alt="Dou'z Brise Background"
          fill
          className="object-cover opacity-15 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-green-light/10 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 sm:p-12 border border-green-brand/20 shadow-xl shadow-green-deep/5">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-light/20">
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
      </div>
    </section>
  );
}
