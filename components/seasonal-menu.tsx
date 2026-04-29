'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export function SeasonalMenu() {
  const seasons = [
    {
      name: "Hiver",
      desc: "Réconfort, douceur, chaleur.",
      items: ["Chocolat chaud végétal", "Latte végétal coco / noisette", "Infusion pomme cannelle", "Veggie-shake gourmand", "Desserts maison"],
      color: "bg-wood/5 border-wood/10",
      accent: "text-wood",
      image: "https://picsum.photos/seed/winterdrink/600/400"
    },
    {
      name: "Printemps",
      desc: "Réveil, fraîcheur, légèreté.",
      items: ["Smoothies fruités", "Jus frais vitaminés", "Veggie-shakes légers", "Salades fruitées", "Desserts légers"],
      color: "bg-strawberry/5 border-strawberry/10",
      accent: "text-strawberry",
      image: "https://picsum.photos/seed/springdrink/600/400"
    },
    {
      name: "Été",
      desc: "Fraîcheur intense, soleil, hydratation.",
      items: ["Cocktails de fruits", "Smoothies glacés", "Jus tropicaux", "Salades estivales", "Desserts frais"],
      color: "bg-orange/5 border-orange/10",
      accent: "text-orange",
      image: "https://picsum.photos/seed/summerdrink/600/400"
    },
    {
      name: "Automne",
      desc: "Transition, épices, ancrage.",
      items: ["Boissons aux épices", "Veggie-shakes gourmands", "Jus de saison", "Salades gourmandes", "Desserts de saison"],
      color: "bg-green-deep/5 border-green-deep/10",
      accent: "text-green-deep",
      image: "https://picsum.photos/seed/autumndrink/600/400"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-green-deep tracking-tight mb-4 leading-tight"
          >
            Une carte qui suit les <span className="font-script font-normal text-6xl sm:text-7xl lg:text-8xl text-green-brand">saisons.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-soft"
          >
            Des recettes pensées pour s'adapter à l'humeur du moment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {seasons.map((season, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className={`flex flex-col sm:flex-row bg-white rounded-[2rem] overflow-hidden border shadow-sm group hover:shadow-lg transition-all ${season.color}`}
            >
              <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden">
                <Image
                  src={season.image}
                  alt={`Menu ${season.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={`sm:w-3/5 p-8 flex flex-col justify-center`}>
                <h3 className={`font-serif text-3xl font-bold mb-2 ${season.accent}`}>{season.name}</h3>
                <p className="text-text-main font-medium text-sm mb-6 uppercase tracking-wider">{season.desc}</p>
                <ul className="space-y-3">
                  {season.items.map((item, i) => (
                    <li key={i} className="text-[15px] font-medium text-text-soft flex items-center before:content-[''] before:min-w-[6px] before:h-[6px] before:bg-current before:rounded-full before:mr-3 before:opacity-50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-white text-green-deep border border-green-deep rounded-full px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-green-deep hover:text-white transition-all shadow-sm"
          >
            Recevoir le menu complet
          </a>
        </div>
      </div>
    </section>
  );
}
