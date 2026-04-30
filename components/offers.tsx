'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export function Offers() {
  const offers = [
    {
      title: "Cocktail Fraîcheur",
      price: "690 €",
      subtitle: "Pour vin d’honneur ou accueil invités.",
      idealFor: "Idéal pour : accueil invités & vin d'honneur",
      image: "/assets/hero-douz-brise-vitalite.png",
      features: [
        "40 à 60 personnes.",
        "2 boissons fraîches signatures.",
        "Installation du comptoir.",
        "Service de dégustation.",
        "Verrerie / contenants.",
        "Mise en scène naturelle.",
        "Déplacement local inclus."
      ],
      cta: "Choisir Cocktail Fraîcheur",
      featured: false
    },
    {
      title: "Expérience Tropicale",
      badge: "Formule star",
      price: "950 €",
      subtitle: "Bar signature événementiel.",
      idealFor: "Idéal pour : mariages & événements premium",
      image: "/assets/tropical-douz-brise.png",
      features: [
        "60 à 100 personnes.",
        "3 à 4 boissons premium.",
        "Bar végétal scénographié.",
        "Service prolongé.",
        "Boisson personnalisée mariés.",
        "Mise en valeur haut de gamme."
      ],
      cta: "Créer mon bar tropical",
      featured: true
    },
    {
      title: "Brunch Healthy",
      price: "780 €",
      subtitle: "Pour le lendemain de mariage.",
      idealFor: "Idéal pour : brunch & lendemain de mariage",
      image: "/assets/brunch-douz-brise.png",
      features: [
        "30 à 50 personnes.",
        "Infusions & jus frais.",
        "Crêpes végétales.",
        "Mini douceurs healthy.",
        "Comptoir brunch naturel.",
        "Service convivial."
      ],
      cta: "Préparer mon brunch",
      featured: false
    },
    {
      title: "Sur mesure",
      price: "Dès 1 200 €",
      subtitle: "Mariages premium, réceptions.",
      idealFor: "Idéal pour : réceptions premium & privées",
      image: "/assets/sur-mesure-douz-brise.png",
      features: [
        "Volume adapté sur mesure.",
        "Mariages destination.",
        "Scénographie complète.",
        "Créations de recettes uniques.",
        "Accompagnement de A à Z."
      ],
      cta: "Demander sur mesure",
      featured: false
    }
  ];

  return (
    <section id="formules" className="pt-32 pb-24 bg-cream relative mt-16 rounded-t-[3rem] sm:rounded-t-[5rem]">
      {/* Wavy top border - not exactly wavy but curved */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-white rounded-b-[3rem] sm:rounded-b-[5rem] -mt-1 w-full z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-6"
          >
            Nos formules
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-text-soft"
          >
            Tout ce dont vous avez besoin pour réussir. Mariage, vin d'honneur, after work, brunch — chaque formule est pensée pour un moment unique, avec des ingrédients 100% naturels.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch pt-4">
          {offers.map((offer, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className={`relative bg-white rounded-[2rem] flex flex-col ${
                offer.featured 
                  ? 'border-2 border-green-brand shadow-xl xl:-translate-y-4 relative z-10' 
                  : 'border border-border shadow-soft mt-4'
              }`}
            >
              {offer.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-green-brand text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                    {offer.badge}
                  </span>
                </div>
              )}

              {/* Image Frame */}
              <div className="relative h-48 w-full rounded-t-[2rem] overflow-hidden mb-6 flex-shrink-0">
                <div className="absolute inset-0 bg-green-deep/10 z-10 mix-blend-overlay"></div>
                <Image 
                  src={offer.image} 
                  alt={`Formule ${offer.title} - Bar à boissons nature Dou'z Brise`} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="inline-flex flex-col items-center justify-center">
                    <h3 className="font-serif text-2xl font-bold text-green-deep mb-1">{offer.title}</h3>
                    <p className="text-text-soft text-sm mb-4 min-h-[40px] px-4">{offer.subtitle}</p>
                    <div className="font-serif text-[38px] xl:text-4xl 2xl:text-5xl text-green-deep tracking-tight mb-2 whitespace-nowrap bg-cream-soft rounded-2xl px-6 py-3 border border-border/50 inline-block">
                      {offer.price}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6 mb-8 flex-grow">
                  <div className="mb-6 inline-block bg-green-light/30 text-green-deep font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full w-full text-center">{offer.idealFor}</div>
                  <ul className="space-y-4 flex flex-col items-center">
                    {offer.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-3 text-text-main text-sm text-center justify-center items-center">
                        <Check size={18} className="text-green-brand flex-shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact"
                  className={`block text-center w-full rounded-full py-4 px-6 font-bold text-sm uppercase tracking-wider transition-all mt-auto ${
                    offer.featured 
                      ? 'bg-green-brand text-white hover:bg-green-deep hover:shadow-lg'
                      : 'bg-green-light/20 text-green-deep hover:bg-green-light hover:text-green-deep border border-green-brand/20'
                  }`}
                >
                  {offer.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
