import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-abj-dark text-white pt-14 pb-24 sm:pb-14 border-t-4 border-abj-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand & Mascot */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logo_vertical.png"
                alt="Logo Au Beau Jeu"
                className="h-16 w-auto object-contain bg-white/10 p-2 rounded-2xl"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Au Beau Jeu</h3>
                <p className="text-xs text-white/70">Boutique & Bar à jeux lillois depuis 2017</p>
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              Un lieu de convivialité et de découverte au cœur de Lille. Retrouvez vos amis, découvrez de nouveaux univers et partagez des moments inoubliables autour de notre ludothèque de 600+ jeux.
            </p>
          </div>

          {/* Contact & Practical infos */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-abj-yellow uppercase tracking-wider">
              Venir nous voir
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-abj-primary shrink-0 mt-0.5" />
                <span>127 rue du Molinel, 59000 Lille (Métro République Beaux-Arts)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-abj-secondary shrink-0" />
                <a href="tel:0983014274" className="hover:text-white transition-colors">
                  09 83 01 42 74
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-abj-blue shrink-0" />
                <a href="mailto:contact@aubeaujeu.com" className="hover:text-white transition-colors">
                  contact@aubeaujeu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-abj-secondary uppercase tracking-wider">
              Écosystème ABJ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#boutique"
                  className="text-white/80 hover:text-white transition-colors block py-1"
                >
                  La Boutique (Jeux & Cadeaux)
                </a>
              </li>
              <li>
                <a
                  href="#bar"
                  className="text-white/80 hover:text-white transition-colors block py-1"
                >
                  Le Bar à Jeux & La Carte
                </a>
              </li>
              <li>
                <a
                  href="https://tcg-arena.aubeaujeu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-abj-yellow hover:underline py-1 font-semibold"
                >
                  <span>ABJ TCG Arena</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Au Beau Jeu (ABJ). Tous droits réservés.</p>
          <div className="flex items-center space-x-1">
            <span>Fait avec</span>
            <Heart className="w-3.5 h-3.5 text-abj-mauve fill-abj-mauve" />
            <span>pour les joueurs de Lille</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
