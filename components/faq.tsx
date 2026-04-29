'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      q: "Combien de temps à l'avance faut-il réserver ?",
      a: "Idéalement 15 jours minimum pour les grands événements, 7 jours minimum pour les petits formats, sous réserve de disponibilité."
    },
    {
      q: "Faites-vous des prestations hors Le Havre ?",
      a: "Oui, jusqu'à 100 km autour de Tancarville selon la formule. Les frais éventuels de déplacement sont indiqués clairement dans le devis."
    },
    {
      q: "Les boissons sont-elles sans sucre ajouté ?",
      a: "Les créations sont pensées autour des fruits, des infusions et des bases végétales. Certaines recettes peuvent être adaptées selon les envies et les contraintes."
    },
    {
      q: "Gérez-vous les allergies ?",
      a: "Les allergies doivent être signalées avant la prestation. Une liste des participants et allergies peut être demandée selon le format."
    },
    {
      q: "Faut-il prévoir un point d'eau ?",
      a: "Oui, dans l'idéal. La présence d'un point d'eau facilite le nettoyage du matériel et le bon déroulement de l'animation."
    },
    {
      q: "Comment se passe la réservation ?",
      a: "Après la demande, Dou'z Brise envoie un devis. La date est bloquée après validation, signature du contrat et un acompte."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-green-deep tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border ${openIndex === idx ? 'border-green-brand shadow-sm' : 'border-border'} overflow-hidden transition-colors`}
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-serif font-bold text-lg text-green-deep pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`text-green-brand shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-text-soft">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
