import React, { useState } from 'react';
import { ShoppingBag, Coffee, ExternalLink, Calendar, Clock, ChevronDown, CheckCircle2, XCircle } from 'lucide-react';
import { getOpeningStatus, WEEKLY_SCHEDULE } from '../utils/openingHours';
import { ZenchefModal } from './ZenchefModal';

export const Hero: React.FC = () => {
  const [isZenchefOpen, setIsZenchefOpen] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const status = getOpeningStatus();

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-abj-cream via-[#fbfbf8] to-abj-cream border-b border-abj-primary/10">
      {/* Playful background decorative shapes */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 md:w-96 md:h-96 rounded-full bg-abj-yellow/20 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-abj-secondary/15 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-10 right-1/4 w-80 h-80 rounded-full bg-abj-primary/15 blur-3xl" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top bar with Address & Quick status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-abj-dark/5 mb-8">
          <div className="flex items-center space-x-2 text-sm text-abj-dark/80 font-medium">
            <span className="w-2 h-2 rounded-full bg-abj-primary inline-block"></span>
            <span>📍 127 rue du Molinel, 59000 Lille</span>
          </div>

          {/* Opening Status Badge */}
          <div className="flex items-center space-x-2">
            <div
              className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border shadow-xs ${
                status.isOpenNow
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-amber-50 text-amber-900 border-amber-200'
              }`}
            >
              {status.isOpenNow ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <XCircle className="w-4 h-4 text-amber-600" />
              )}
              <span>{status.badgeText}</span>
              <span className="text-abj-dark/40">•</span>
              <span className="font-normal text-abj-dark/80">{status.detailText}</span>
            </div>

            {/* Toggle Full Schedule */}
            <button
              onClick={() => setShowFullSchedule(!showFullSchedule)}
              className="p-1.5 rounded-full hover:bg-black/5 text-abj-dark/70 transition-colors btn-pressable min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Voir la grille complète des horaires d'ouverture"
              aria-expanded={showFullSchedule}
            >
              <Clock className="w-4 h-4" />
              <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${showFullSchedule ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Dropdown weekly schedule table */}
        {showFullSchedule && (
          <div className="mb-8 p-5 bg-white/90 backdrop-blur-md rounded-3xl border border-abj-primary/20 shadow-abj-soft max-w-xl mx-auto transition-all animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-abj-dark flex items-center gap-2">
                <Clock className="w-4 h-4 text-abj-primary" />
                Horaires d'ouverture de la boutique & du bar
              </h3>
              <button
                onClick={() => setShowFullSchedule(false)}
                className="text-xs text-abj-dark/60 hover:text-abj-dark underline p-1"
              >
                Fermer
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {WEEKLY_SCHEDULE.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-3 py-2 rounded-xl ${
                    item.day === status.currentDayName
                      ? 'bg-abj-primary/15 font-semibold text-abj-dark border border-abj-primary/30'
                      : 'bg-abj-cream/50 text-abj-dark/80'
                  }`}
                >
                  <span>{item.day}</span>
                  <span className={item.isOpen ? 'font-medium' : 'text-abj-mauve font-medium'}>
                    {item.hoursText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Central Hero Core: Brand Logo & OBO Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8 text-center lg:text-left space-y-6">
            {/* Horizontal Official Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/assets/logo_horizontal.png"
                alt="Logo Au Beau Jeu"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-xs"
              />
            </div>

            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-abj-yellow/30 text-abj-dark font-bold text-xs sm:text-sm tracking-wide border border-abj-yellow/60">
                🎲 Depuis 9 ans au cœur de Lille
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-abj-dark leading-tight tracking-tight">
                Votre bar à jeux et boutique incontournable à Lille.
              </h1>
              <p className="text-base sm:text-lg text-abj-dark/80 max-w-2xl font-normal leading-relaxed">
                Plongez dans un univers chaleureux dédié au jeu de société. Plus de <strong>600 jeux</strong> en libre accès, des conseils passionnés en boutique, des boissons locales et un espace TCG dédié.
              </p>
            </div>

            {/* Zenchef Reservation Main Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setIsZenchefOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-abj-secondary hover:bg-[#c983a5] text-white font-bold text-base shadow-lg shadow-abj-secondary/30 transition-all btn-pressable min-h-[48px]"
              >
                <Calendar className="w-5 h-5" />
                <span>Réserver une table au Bar (Zenchef)</span>
              </button>
            </div>
          </div>

          {/* OBO Mascot Display with friendly card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-abj-primary/40 to-abj-secondary/40 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-abj-soft flex flex-col items-center text-center max-w-xs">
                <img
                  src="/assets/obo1.png"
                  alt="OBO la mascotte joyeuse d'Au Beau Jeu"
                  className="w-40 sm:w-48 h-auto object-contain transform hover:rotate-2 transition-transform duration-200"
                />
                <div className="mt-3">
                  <span className="text-xs font-bold text-abj-dark bg-abj-cream px-3 py-1 rounded-full border border-abj-primary/30 inline-block">
                    Salut, moi c'est OBO ! 👋
                  </span>
                  <p className="text-xs text-abj-dark/70 mt-1">
                    Prêt à vous guider vers votre prochain jeu coup de cœur !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Main Action Buttons (CTAs) */}
        <div className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Bouton 1 : La Boutique */}
            <a
              href="#boutique"
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/90 hover:bg-white border-2 border-abj-primary text-abj-dark shadow-sm hover:shadow-abj-hover transition-all btn-pressable group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-abj-primary/20 text-abj-dark flex items-center justify-center group-hover:bg-abj-primary transition-colors">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-abj-dark/60 font-medium">Découvrir</div>
                  <div className="text-base sm:text-lg font-bold">La Boutique</div>
                </div>
              </div>
              <span className="text-abj-primary group-hover:translate-x-1 transition-transform font-bold text-xl">
                ↓
              </span>
            </a>

            {/* Bouton 2 : Le Bar à jeux */}
            <a
              href="#bar"
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/90 hover:bg-white border-2 border-abj-blue text-abj-dark shadow-sm hover:shadow-abj-hover transition-all btn-pressable group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-abj-blue/20 text-abj-dark flex items-center justify-center group-hover:bg-abj-blue transition-colors">
                  <Coffee className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-abj-dark/60 font-medium">Ludothèque & Carte</div>
                  <div className="text-base sm:text-lg font-bold">Le Bar à jeux</div>
                </div>
              </div>
              <span className="text-abj-blue group-hover:translate-x-1 transition-transform font-bold text-xl">
                ↓
              </span>
            </a>

            {/* Bouton 3 : Le TCG (Strict external link) */}
            <a
              href="https://tcg-arena.aubeaujeu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/90 hover:bg-white border-2 border-abj-yellow text-abj-dark shadow-sm hover:shadow-abj-hover transition-all btn-pressable group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-abj-yellow/30 text-abj-dark flex items-center justify-center group-hover:bg-abj-yellow transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-abj-dark/60 font-medium">Plateforme externe</div>
                  <div className="text-base sm:text-lg font-bold">Le TCG Arena</div>
                </div>
              </div>
              <span className="text-abj-yellow group-hover:translate-x-1 transition-transform font-bold text-xl">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Zenchef Booking Modal */}
      <ZenchefModal isOpen={isZenchefOpen} onClose={() => setIsZenchefOpen(false)} />
    </section>
  );
};
