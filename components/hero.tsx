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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-cream/50 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none z-0"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-32 h-32 bg-green-light/20 rounded-full blur-2xl z-0"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-[30%] w-48 h-48 bg-orange/10 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[15%] w-64 h-64 bg-green-brand/10 rounded-full blur-3xl z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex flex-col gap-4 mb-8">
              <span className="text-sm font-bold text-green-brand uppercase tracking-wider bg-green-light/30 w-fit px-4 py-1.5 rounded-full border border-green-brand/20">
                Le plein de vitalité
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-green-deep">
                Des boissons naturelles & <span className="text-green-brand font-script font-normal text-[5.5rem] sm:text-[7rem] lg:text-[8rem] leading-[0.5] sm:leading-[0.5] lg:leading-[0.5] mt-6 mb-4 block underline decoration-green-light/40 underline-offset-4">végétales</span> pour vos événements.
              </h1>
            </div>
            
            <p className="text-xl text-text-soft mb-10 leading-relaxed font-medium">
              Mariages, brunchs, ateliers et prestations sur mesure — des créations fraîches, gourmandes et faites maison qui enchantent vos invités.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 bg-green-brand text-white border border-green-brand rounded-full px-8 py-4 font-bold text-sm tracking-wider uppercase shadow-btn hover:bg-green-deep hover:-translate-y-1 transition-all"
              >
                Demander mon devis
              </a>
              <a
                href="#formules"
                className="inline-flex justify-center items-center gap-2 bg-white/50 backdrop-blur-sm text-green-deep border-2 border-green-deep/20 rounded-full px-8 py-4 font-bold text-sm tracking-wider uppercase hover:border-green-deep hover:bg-green-deep/5 transition-all"
              >
                Voir les formules
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    key={idx} 
                    className="inline-flex items-center gap-2 rounded-full bg-white text-green-deep px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-sm border border-border"
                  >
                    <Icon size={14} className="text-green-brand" />
                    {badge.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-brand/20 to-orange/20 blur-3xl rounded-[3rem] transform -translate-x-4 translate-y-8 z-0 object-cover" />
            <div className="relative h-[500px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <Image
                src="https://picsum.photos/seed/freshdrink1/800/1200"
                alt="Verres de boissons fraîches, naturelles et végétales"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
