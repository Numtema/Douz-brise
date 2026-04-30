'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#formules', label: 'Formules' },
    { href: '#menu', label: 'Menu' },
    { href: '#ateliers', label: 'Ateliers' },
    { href: '#avis', label: 'Avis' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-4 pointer-events-none">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`pointer-events-auto transition-all duration-500 rounded-full w-full max-w-5xl ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(36,59,29,0.08)] border border-green-deep/5 px-4 py-2.5' 
            : 'bg-cream-soft rounded-full px-4 py-4 shadow-sm border border-border/50'
        }`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
              <Image
                src="/assets/logo-douz-brise.png"
                alt="Dou'z Brise Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif font-bold text-2xl text-green-deep hidden lg:block">
              Dou'z Brise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-main hover:text-green-brand font-medium text-[15px] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-brand text-white border border-green-brand rounded-full px-6 py-2.5 font-bold text-sm tracking-wider uppercase shadow-btn hover:bg-green-deep hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Demander un devis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-deep hover:bg-green-light/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden bg-cream-soft border border-border shadow-xl absolute top-24 left-4 right-4 rounded-3xl overflow-hidden pointer-events-auto origin-top"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-text-main hover:text-green-brand py-3 border-b border-green-deep/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex w-full justify-center items-center bg-green-brand text-white rounded-full px-6 py-4 font-bold tracking-wider uppercase shadow-btn active:scale-95"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
