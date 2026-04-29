'use client';

import { motion } from 'motion/react';

export function Marquee() {
  const items = [
    "Mariages",
    "•",
    "Anniversaires",
    "•",
    "EVJF & Baby Showers",
    "•",
    "Événements professionnels",
    "•",
    "Team Building",
    "•",
    "Salons & Afterworks",
    "•"
  ];

  // We duplicate the items to create a seamless loop
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-green-deep text-cream py-4 overflow-hidden relative border-y border-white/10 shadow-lg z-10 -rotate-1 scale-105 my-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-green-deep to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-green-deep to-transparent z-10" />
      
      <div className="flex w-max whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-6 px-3"
        >
          {content.map((item, index) => (
            <span 
              key={index} 
              className={`font-medium tracking-widest uppercase text-sm ${item === '•' ? 'text-green-brand opacity-60' : 'text-cream'}`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
