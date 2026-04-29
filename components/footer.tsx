import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-deep text-cream-soft pt-24 pb-12 rounded-t-[3rem] relative mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Prêt à offrir à vos invités une parenthèse fraîche, naturelle et mémorable ?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-green-brand text-white rounded-full px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-green-fresh transition-colors shadow-btn"
            >
              Demander mon devis
            </a>
            <a
              href="https://instagram.com/douzbrise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-transparent text-cream-soft border border-cream-soft/30 rounded-full px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              <Instagram size={18} />
              Écrire sur Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            
            {/* Brand */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-serif font-bold text-sm">
                  db
                </div>
                <span className="font-serif font-bold text-xl text-white">
                  Dou'z Brise
                </span>
              </div>
              <p className="text-sm text-green-light/80 mb-6 font-script text-xl">
                Faites-vous plaisir sans culpabiliser.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-4 flex flex-col items-center">
                <li>
                  <a href="tel:0675976921" className="text-sm text-green-light/80 hover:text-white flex items-center gap-3 transition-colors">
                    <Phone size={16} />
                    06 75 97 69 21
                  </a>
                </li>
                <li>
                  <a href="mailto:contact.fraichr76@gmail.com" className="text-sm text-green-light/80 hover:text-white flex items-center gap-3 transition-colors">
                    <Mail size={16} />
                    contact.fraichr76@gmail.com
                  </a>
                </li>
                <li>
                  <div className="text-sm text-green-light/80 flex items-center gap-3 text-center">
                    <MapPin size={16} className="shrink-0" />
                    <span>Le Havre, Seine-Maritime<br/>Jusqu'à 100 km</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Réseaux</h4>
              <ul className="space-y-4 flex flex-col items-center">
                <li>
                  <a href="https://instagram.com/douzbrise" target="_blank" rel="noopener noreferrer" className="text-sm text-green-light/80 hover:text-white flex items-center gap-3 transition-colors">
                    <Instagram size={16} />
                    @douzbrise
                  </a>
                </li>
                {/* Placeholder for other networks that were mentioned */}
                <li><span className="text-sm text-green-light/50">Facebook, TikTok, LinkedIn...</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-green-light/50">
          <p>&copy; {new Date().getFullYear()} Dou'z Brise — Tous droits réservés · Micro-entreprise Fraich'r</p>
        </div>
      </div>
    </footer>
  );
}
