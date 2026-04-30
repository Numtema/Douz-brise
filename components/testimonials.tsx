'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Merci à Dou’z Brise ! J’ai été agréablement surprise de la réaction de mes invités. Ils ont beaucoup apprécié les délicieuses boissons proposées par Laëtitia et son équipe.",
      author: "Agnes B.",
      role: "Mariage en Normandie",
      color: "bg-[#C1F19A]",
      rotation: "-rotate-6",
      zIndex: "z-20"
    },
    {
      text: "Laëtitia m’a fait découvrir le lait végétal. L’association avec les fruits m’a bluffée. Un stand innovant qui propose des boissons naturelles, ça vaut vraiment le coup d’essayer.",
      author: "Eléna",
      role: "Brunch d'entreprise",
      color: "bg-[#FFB7CE]",
      rotation: "rotate-3",
      zIndex: "z-10"
    },
    {
      text: "Des créations fraîches, gourmandes et faites maison qui enchantent les invités. Une vraie parenthèse de fraîcheur lors de nos événements.",
      author: "Marie L.",
      role: "Atelier EVJF",
      color: "bg-white",
      rotation: "-rotate-2",
      zIndex: "z-30"
    }
  ];

  return (
    <section id="avis" className="py-24 bg-[#F9F7F2] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-deep"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-deep"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-sm font-bold text-green-deep uppercase tracking-widest mb-4 block">Avis Clients</span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-green-deep tracking-tight">
            Ils nous font confiance
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`absolute w-full max-w-sm sm:max-w-md p-8 sm:p-10 rounded-3xl shadow-xl border border-black/5 ${t.color} ${t.rotation} ${t.zIndex} transform hover:scale-105 transition-all duration-300 shadow-2xl`}
              style={{
                left: idx === 0 ? '5%' : idx === 1 ? 'auto' : '15%',
                right: idx === 1 ? '5%' : 'auto',
                top: idx === 0 ? '10%' : idx === 1 ? '20%' : '50%',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-deep fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg sm:text-xl text-green-deep leading-relaxed mb-10 font-medium font-sans">
                {t.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/50 flex-shrink-0 flex items-center justify-center font-serif font-bold text-green-deep text-lg">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-green-deep">
                    {t.author}
                  </div>
                  <div className="text-sm text-green-deep/60 font-medium">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Sparkle decoration for white card */}
              {idx === 2 && (
                 <div className="absolute -bottom-6 -right-6 w-12 h-12 text-green-deep opacity-40">
                   <svg viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12,2L14,8L20,10L14,12L12,18L10,12L4,10L10,8L12,2Z" />
                   </svg>
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-green-deep/40 font-mono text-xs tracking-widest uppercase">www.douzbrise.fr</p>
        </div>
      </div>
    </section>
  );
}
