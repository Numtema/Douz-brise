'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream-soft/90 backdrop-blur-md shadow-sm border-b border-green-deep/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-green-brand flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:shadow-md transition-all">
              db
            </div>
            <span className="font-serif font-bold text-2xl text-green-deep hidden sm:block">
              Dou'z Brise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-main hover:text-green-brand font-medium text-sm tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-brand text-white border border-green-brand rounded-full px-6 py-2.5 font-bold text-sm tracking-wider uppercase shadow-btn hover:bg-green-deep hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Demander un devis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-deep"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream-soft border-b border-border shadow-lg absolute top-20 left-0 right-0"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-text-main hover:text-green-brand py-2 border-b border-green-deep/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full justify-center items-center bg-green-brand text-white rounded-full px-6 py-4 font-bold tracking-wider uppercase shadow-btn active:scale-95"
            >
              Demander un devis
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
