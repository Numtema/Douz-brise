'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export function Transformation() {
  const pillars = [
    {
      title: "Naturel",
      desc: "Ingrédients frais, recettes équilibrées, fruits de qualité."
    },
    {
      title: "Végétal",
      desc: "Laits végétaux, veggie-shakes, créations douces et légères."
    },
    {
      title: "Événementiel",
      desc: "Installation, service, comptoir décoré, vraie animation."
    },
    {
      title: "Sur mesure",
      desc: "Adaptation au nombre d’invités, au thème et à la saison."
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-soft border-[6px] border-white z-10">
              <Image
                src="https://picsum.photos/seed/freshfruits1/800/1200"
                alt="Préparation de boissons naturelles, végétales et équilibrées pour un bar événementiel"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-brand/20 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/4 -right-12 w-48 h-48 bg-orange/20 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-green-deep tracking-tight mb-8 leading-tight">
              Dou'z Brise transforme la pause boisson en vraie <span className="text-green-brand font-script font-normal text-6xl sm:text-7xl lg:text-8xl inline-block mt-2 transform -rotate-2">expérience sensorielle.</span>
            </h2>
            <p className="text-xl text-text-soft mb-12 leading-relaxed">
              Des fruits frais, des laits végétaux, des infusions naturelles, une mise en scène élégante et un service humain pour offrir à vos invités une alternative saine, colorée et gourmande.
            </p>

            <div className="flex flex-col gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex gap-5 items-start group"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-green-deep group-hover:bg-green-brand group-hover:text-white group-hover:border-green-brand transition-colors">
                    <Check size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-green-deep mb-2">{pillar.title}</h3>
                    <p className="text-text-soft text-lg leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
