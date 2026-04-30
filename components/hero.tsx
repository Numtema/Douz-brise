'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Leaf, Droplet, Store, MapPin } from 'lucide-react';

export function Hero() {
  const badges = [
    { icon: Leaf, text: 'Ingrédients naturels' },
    { icon: Droplet, text: 'Sans sucre ajouté' },
    { icon: Store, text: 'Frais & fait maison' },
    { icon: MapPin, text: 'Le Havre + 100 km' },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden relative min-h-[85vh] lg:min-h-[95vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-douz-brise-vitalite.png"
          alt="Dou'z Brise Vitalité Background"
          fill
          className="object-cover object-[30%_center] lg:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col items-start text-left max-w-4xl lg:max-w-3xl">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex flex-col items-start gap-4 mb-4">
              <span className="text-sm font-bold text-green-brand uppercase tracking-widest bg-green-light/40 backdrop-blur-md w-fit px-6 py-2 rounded-full border border-green-brand/20 shadow-sm">
                Le plein de vitalité naturelle
              </span>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-green-deep">
                Éveillez vos <span className="text-green-brand font-script font-normal text-[6rem] sm:text-[9.5rem] lg:text-[11rem] leading-[0.2] inline-block mt-12 mb-8 decoration-green-light/40 underline-offset-4">sens</span> <br /> lors de vos événements.
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-text-soft mb-12 leading-relaxed font-medium max-w-2xl lg:max-w-xl">
              Des bars à boissons <span className="text-green-brand">naturelles, végétales et faites maison</span> pour sublimer vos mariages, brunchs et réceptions au Havre.
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-6 mb-16">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-green-brand text-white border border-green-brand rounded-full px-10 py-5 font-bold text-base tracking-wider uppercase shadow-xl hover:bg-green-deep hover:-translate-y-1 transition-all active:scale-95"
              >
                Demander mon devis
              </a>
              <a
                href="#formules"
                className="inline-flex justify-center items-center gap-2 bg-white/60 backdrop-blur-md text-green-deep border-2 border-green-brand/30 rounded-full px-10 py-5 font-bold text-base tracking-wider uppercase hover:bg-green-brand hover:text-white transition-all active:scale-95 shadow-lg"
              >
                Découvrir nos créations
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-start gap-4">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (idx * 0.1), type: "spring", stiffness: 100 }}
                    key={idx} 
                    className="inline-flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-sm text-green-deep px-5 py-3 text-sm font-bold uppercase tracking-wider shadow-md border border-white/50 hover:bg-white transition-colors"
                  >
                    <Icon size={18} className="text-green-brand" />
                    {badge.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
