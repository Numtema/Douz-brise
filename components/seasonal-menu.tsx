'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Snowflake, Flower2, Sun, Leaf, Coffee, Droplet, GlassWater, CupSoda, Salad, Cake, IceCream } from 'lucide-react';

const seasons = [
  { id: 'hiver', name: 'Hiver', icon: <Snowflake className="w-4 h-4" />,
    items: [
      { icon: <Coffee className="w-10 h-10" />, name: 'Chocolat chaud', desc: 'Onctueux, riche, profondément réconfortant', badge: 'Fait maison' },
      { icon: <CupSoda className="w-10 h-10" />, name: 'Latte végétal', desc: 'Coco, noisette ou cacahuète — subtil', badge: 'Sans sucre ajouté' },
      { icon: <GlassWater className="w-10 h-10" />, name: 'Infusion pomme', desc: 'Chaleureuse et épicée, idéale pour se recentrer', badge: 'Fait maison' },
      { icon: <Droplet className="w-10 h-10" />, name: 'Veggie-shake', desc: 'Texture crémeuse, saveurs réconfortantes' },
      { icon: <Salad className="w-10 h-10" />, name: 'Salades de saison', desc: 'Fraîcheur équilibrée pour l\'hiver' },
      { icon: <Cake className="w-10 h-10" />, name: 'Desserts maison', desc: 'Gourmandise saine aux notes hivernales', badge: 'Fait maison' },
    ]
  },
  { id: 'printemps', name: 'Printemps', icon: <Flower2 className="w-4 h-4" />,
    items: [
      { icon: <CupSoda className="w-10 h-10" />, name: 'Smoothies fruités', desc: 'Frais, colorés et pleins de vitalité', badge: 'Fait maison' },
      { icon: <GlassWater className="w-10 h-10" />, name: 'Jus frais vitaminés', desc: 'Un concentré de nature et d\'énergie', badge: 'Sans sucre' },
      { icon: <Droplet className="w-10 h-10" />, name: 'Veggie-shakes', desc: 'Onctueux et pleins de douceur printanière' },
      { icon: <Salad className="w-10 h-10" />, name: 'Salades fruitées', desc: 'Croquantes et naturellement sucrées' },
      { icon: <IceCream className="w-10 h-10" />, name: 'Desserts légers', desc: 'Douceur florale et équilibre parfait', badge: 'Fait maison' },
    ]
  },
  { id: 'ete', name: 'Été', icon: <Sun className="w-4 h-4" />,
    items: [
      { icon: <GlassWater className="w-10 h-10" />, name: 'Cocktails de fruits', desc: 'Explosifs, frais et intensément fruités', badge: 'Sans sucre' },
      { icon: <CupSoda className="w-10 h-10" />, name: 'Smoothies glacés', desc: 'Ultra rafraîchissants et gourmands', badge: 'Fait maison' },
      { icon: <Droplet className="w-10 h-10" />, name: 'Jus tropicaux', desc: 'Soleil, fraîcheur et évasion garantie' },
      { icon: <Salad className="w-10 h-10" />, name: 'Salades estivales', desc: 'Légères, hydratantes et pleines de saveurs' },
      { icon: <IceCream className="w-10 h-10" />, name: 'Desserts glacés', desc: 'Plaisir fruité et fraîcheur absolue', badge: 'Fait maison' },
    ]
  },
  { id: 'automne', name: 'Automne', icon: <Leaf className="w-4 h-4" />,
    items: [
      { icon: <Coffee className="w-10 h-10" />, name: 'Boissons aux épices', desc: 'Chaleur, caractère et bien-être total' },
      { icon: <CupSoda className="w-10 h-10" />, name: 'Veggie-shakes', desc: 'Riches, onctueux et ultra réconfortants', badge: 'Fait maison' },
      { icon: <GlassWater className="w-10 h-10" />, name: 'Jus de saison', desc: 'Authentiques et parfaitement équilibrés', badge: 'Sans sucre' },
      { icon: <Salad className="w-10 h-10" />, name: 'Salades gourmandes', desc: 'Textures variées, entre douceur et croquant' },
      { icon: <Cake className="w-10 h-10" />, name: 'Desserts de saison', desc: 'Généreux et naturellement savoureux', badge: 'Fait maison' },
    ]
  }
];

export function SeasonalMenu() {
  const [activeSeason, setActiveSeason] = useState(seasons[0].id);

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-4xl sm:text-5xl text-green-brand block mb-2"
          >
            Nos créations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-deep mb-6 font-serif"
          >
            Un menu qui suit <em className="not-italic text-green-brand font-script text-5xl sm:text-6xl align-middle">les saisons</em>.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
            className="text-lg text-text-soft"
          >
            Chaque saison a sa palette de saveurs, d'émotions et de couleurs. Découvrez nos recettes adaptées à la nature.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {seasons.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSeason(s.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold transition-all border-2 ${activeSeason === s.id ? 'bg-green-brand text-white border-green-brand shadow-md' : 'bg-white text-text-soft border-green-light/20 hover:border-green-brand hover:text-green-brand'}`}
            >
              {s.icon} {s.name}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {seasons.map(season => {
              if (season.id !== activeSeason) return null;
              return (
                <motion.div
                  key={season.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {season.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-3xl p-8 text-center shadow-md shadow-green-deep/5 hover:shadow-xl hover:shadow-green-deep/10 hover:-translate-y-1 transition-all border border-transparent hover:border-green-light/30 flex flex-col items-center group cursor-default"
                    >
                      <div className="text-green-brand mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">{item.icon}</div>
                      <h4 className="font-serif text-2xl text-green-deep font-semibold mb-2">{item.name}</h4>
                      <p className="text-text-soft text-sm mb-4 leading-relaxed">{item.desc}</p>
                      {item.badge && (
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-light/10 text-green-brand text-[0.65rem] font-bold uppercase tracking-widest mt-auto">
                          {item.badge}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden shadow-xl shadow-green-deep/10 min-h-[300px] lg:min-h-full group">
            <Image 
              src="https://picsum.photos/seed/douzcups/800/800" 
              alt="Différents formats de boissons et cocktails proposés par Dou'z Brise pour vos événements" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/40 to-transparent p-8 flex flex-col justify-end">
              <span className="font-script text-3xl text-white mb-2">Nos formats</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold leading-tight">Tailles & tarifs</h3>
              <p className="text-cream mt-2 text-sm">Adaptés à toutes vos envies de fraîcheur ou de chaleur.</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-green-deep/5 border border-green-light/20 hover:border-green-brand/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-green-brand shrink-0">
                  <GlassWater className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-xl text-green-deep">Boissons Fraîches & Shakes</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { s: 'S', v: '33cl', p: '5€', h: 'h-10', icon: <GlassWater className="w-5 h-5" /> },
                  { s: 'M', v: '50cl', p: '7€', h: 'h-12', icon: <GlassWater className="w-6 h-6" /> },
                  { s: 'L', v: '—', p: '9€', h: 'h-14', icon: <GlassWater className="w-8 h-8" /> },
                  { s: 'XL', v: '—', p: '12,90€', h: 'h-16', icon: <GlassWater className="w-10 h-10" /> },
                ].map((t, i) => (
                  <a href="#contact" key={i} className="flex flex-col items-center p-4 bg-cream-soft rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group">
                    <div className={`flex items-end justify-center mb-3 text-green-brand group-hover:scale-110 transition-transform ${t.h}`}>
                       {t.icon}
                    </div>
                    <div className="text-lg font-serif font-bold text-green-deep leading-none mb-1">{t.s}</div>
                    <div className="text-xs text-text-soft h-4 font-medium mb-3">{t.v !== '—' && t.v}</div>
                    <div className="mt-auto px-4 py-1.5 bg-green-brand text-white rounded-full text-sm font-bold shadow-sm">{t.p}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-green-deep/5 border border-green-light/20 hover:border-green-brand/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-green-brand shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-xl text-green-deep">Tisanes & Boissons Chaudes</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { s: 'XXS', v: 'Tisane 15cl', p: '3€', h: 'h-10', icon: <Coffee className="w-6 h-6" /> },
                  { s: 'XS', v: 'Tisane 20cl', p: '3,50€', h: 'h-12', icon: <Coffee className="w-8 h-8" /> },
                ].map((t, i) => (
                  <a href="#contact" key={i} className="flex flex-col items-center p-4 bg-cream-soft rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer group">
                    <div className={`flex items-end justify-center mb-3 text-green-brand group-hover:scale-110 transition-transform ${t.h}`}>
                       {t.icon}
                    </div>
                    <div className="text-lg font-serif font-bold text-green-deep leading-none mb-1">{t.s}</div>
                    <div className="text-xs text-text-soft h-4 font-medium mb-3">{t.v}</div>
                    <div className="mt-auto px-6 py-1.5 bg-green-brand text-white rounded-full text-sm font-bold shadow-sm">{t.p}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

