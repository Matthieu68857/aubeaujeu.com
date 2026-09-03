import React, { useState } from 'react';
import { Calendar, Beer, ShoppingBag, ArrowUp } from 'lucide-react';
import { ZenchefModal } from './ZenchefModal';

export const MobileQuickBar: React.FC = () => {
  const [isZenchefOpen, setIsZenchefOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        aria-label="Navigation rapide mobile"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-abj-primary/20 px-3 py-2 shadow-2xl safe-area-bottom"
      >
        <div className="flex items-center justify-around">
          {/* Raccourci 1: Boutique */}
          <a
            href="#boutique"
            className="flex flex-col items-center justify-center p-2 text-abj-dark/80 hover:text-abj-primary btn-pressable min-w-[48px] min-h-[48px]"
          >
            <ShoppingBag className="w-5 h-5 text-abj-primary" />
            <span className="text-[10px] font-bold mt-1">Boutique</span>
          </a>

          {/* Raccourci 2: Carte Bar */}
          <a
            href="#bar"
            className="flex flex-col items-center justify-center p-2 text-abj-dark/80 hover:text-abj-blue btn-pressable min-w-[48px] min-h-[48px]"
          >
            <Beer className="w-5 h-5 text-abj-blue" />
            <span className="text-[10px] font-bold mt-1">Carte Bar</span>
          </a>

          {/* Raccourci 3: Réserver Zenchef (Proéminent) */}
          <button
            onClick={() => setIsZenchefOpen(true)}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-abj-secondary text-white font-bold text-xs shadow-md shadow-abj-secondary/30 btn-pressable min-h-[44px]"
          >
            <Calendar className="w-4 h-4" />
            <span>Réserver</span>
          </button>

          {/* Raccourci 4: Haut de page */}
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="flex flex-col items-center justify-center p-2 text-abj-dark/60 hover:text-abj-dark btn-pressable min-w-[44px] min-h-[44px]"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-1">Haut</span>
          </button>
        </div>
      </nav>

      <ZenchefModal isOpen={isZenchefOpen} onClose={() => setIsZenchefOpen(false)} />
    </>
  );
};
