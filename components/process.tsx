'use client';

import { MessageSquare, FileText, CheckCircle2, PartyPopper } from 'lucide-react';
import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Contactez-nous",
      desc: "Remplissez le formulaire avec vos infos : date, lieu, nombre d'invités."
    },
    {
      icon: FileText,
      title: "2. Devis personnalisé",
      desc: "Réponse sous 24 à 48h avec un devis adapté à votre événement."
    },
    {
      icon: CheckCircle2,
      title: "3. Acompte & contrat",
      desc: "Un acompte de 25% bloque la date. Contrat signé, on s'occupe de tout."
    },
    {
      icon: PartyPopper,
      title: "4. Le jour J",
      desc: "Installation du stand, service, sourires. Vos invités sont conquis."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-green-light/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-6"
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-soft"
          >
            Réservez en 4 étapes simples.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-0.5 bg-green-brand opacity-20" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                key={idx} 
                className="relative text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-cream-soft border-[5px] border-white shadow-soft rounded-full flex items-center justify-center text-green-brand mb-6 relative z-10 group-hover:scale-110 group-hover:bg-green-brand group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-green-deep mb-3">{step.title}</h3>
                <p className="text-text-main text-[15px] px-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
