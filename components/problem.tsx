'use client';

import { Wine, Sparkles, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Problem() {
  const problems = [
    {
      title: "Trop classique",
      desc: "Sodas, jus industriels, boissons trop sucrées : on les voit partout, mais elles ne créent pas vraiment d’expérience.",
      icon: Wine
    },
    {
      title: "Pas assez mémorable",
      desc: "Un événement réussi, ce n’est pas seulement un repas. C’est une ambiance, des couleurs, des gestes, des souvenirs.",
      icon: Sparkles
    },
    {
      title: "Peu d’options saines",
      desc: "Beaucoup d’invités cherchent aujourd'hui des alternatives plus naturelles, plus légères et plus adaptées à tous les âges.",
      icon: Heart
    },
    {
      title: "Manque d’animation",
      desc: "Un bar à boissons en direct crée un point de rencontre, de conversation et de photos inoubliables.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl font-bold text-green-deep tracking-tight mb-6 leading-tight"
          >
            Les boissons sont souvent le détail oublié…
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-text-soft font-script"
          >
            Jusqu'au moment où les invités s'en souviennent.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-cream-soft rounded-[2rem] p-8 border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-light/20 rounded-full blur-2xl group-hover:bg-green-light/40 transition-colors"></div>
                <div className="w-12 h-12 bg-white text-green-brand rounded-full flex items-center justify-center mb-6 shadow-sm border border-border mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-green-deep mb-4 text-center">{prob.title}</h3>
                <p className="text-text-soft leading-relaxed text-center">
                  {prob.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
