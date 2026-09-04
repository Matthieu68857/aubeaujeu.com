import React from 'react';
import { Beer, ShoppingBag, Layers, ArrowUp } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Navigation rapide mobile"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t-2 border-abj-dark px-3 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center justify-around">
        {/* Raccourci 1: Boutique */}
        <a
          href="#boutique"
          className="flex flex-col items-center justify-center p-2 text-abj-dark hover:text-abj-primary btn-pressable min-w-[48px] min-h-[48px]"
        >
          <ShoppingBag className="w-5 h-5 text-abj-primary" />
          <span className="text-[10px] font-extrabold mt-1">Boutique</span>
        </a>

        {/* Raccourci 2: Carte Bar */}
        <a
          href="#bar"
          className="flex flex-col items-center justify-center p-2 text-abj-dark hover:text-abj-blue btn-pressable min-w-[48px] min-h-[48px]"
        >
          <Beer className="w-5 h-5 text-abj-blue" />
          <span className="text-[10px] font-extrabold mt-1">Bar & Carte</span>
        </a>

        {/* Raccourci 3: TCG & Tournois */}
        <a
          href="#tcg"
          className="flex flex-col items-center justify-center p-2 text-abj-dark hover:text-abj-yellow btn-pressable min-w-[48px] min-h-[48px]"
        >
          <Layers className="w-5 h-5 text-abj-yellow" />
          <span className="text-[10px] font-extrabold mt-1">TCG</span>
        </a>

        {/* Raccourci 4: Haut de page */}
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="flex flex-col items-center justify-center p-2 text-abj-dark/70 hover:text-abj-dark btn-pressable min-w-[44px] min-h-[44px]"
        >
          <ArrowUp className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Haut</span>
        </button>
      </div>
    </nav>
  );
};
