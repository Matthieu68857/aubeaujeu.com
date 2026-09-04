import React from 'react';
import { ShoppingBag, Coffee, Layers, MapPin, Phone } from 'lucide-react';
import { getOpeningStatus } from '../utils/openingHours';
import { SpiralNotebook } from './SpiralNotebook';

export const Hero: React.FC = () => {
  const status = getOpeningStatus();

  const boutiqueSchedule = [
    { day: 'Mardi', hours: '10h à 13h – 14h à 23h30' },
    { day: 'Mercredi', hours: '10h à 13h – 14h à 23h30' },
    { day: 'Jeudi', hours: '10h à 13h – 14h à 23h30' },
    { day: 'Vendredi', hours: '10h à 13h – 14h à 23h30' },
    { day: 'Samedi', hours: '10h à 13h – 14h à 23h30' },
    { day: 'Dim. & Lun.', hours: 'Fermé' },
  ];

  const barSchedule = [
    { day: 'Mardi', hours: '14h00 à 23h30' },
    { day: 'Mercredi', hours: '14h00 à 23h30' },
    { day: 'Jeudi', hours: '14h00 à 23h30' },
    { day: 'Vendredi', hours: '14h00 à 01h00' },
    { day: 'Samedi', hours: '11h00 à 01h00' },
    { day: 'Dimanche', hours: '14h00 à 20h00' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#F6F6F2]">
      {/* Playful Colorful Organic Blobs in corners (inspired by frontpage_wip.png) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-br-[120px] bg-abj-yellow opacity-85 z-0 transform -rotate-6 transition-transform duration-700 hover:rotate-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-bl-[140px] bg-abj-blue opacity-80 z-0 transform rotate-3"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-16 w-60 h-40 rounded-tr-[100px] bg-abj-mauve opacity-20 z-0"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 text-xs sm:text-sm font-semibold text-abj-dark/90">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-abj-dark/10 shadow-xs">
            <MapPin className="w-4 h-4 text-abj-mauve" />
            <span>127 Rue du Molinel, 59000 Lille</span>
          </div>

          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-abj-dark/10 shadow-xs">
            <Phone className="w-4 h-4 text-abj-primary" />
            <span>07 52 67 95 76</span>
          </div>
        </div>

        {/* Central Prominent Logo & Tagline (Fidèle à frontpage_wip.png) */}
        <div className="flex flex-col items-center text-center my-6 md:my-10 space-y-4">
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/assets/logo_horizontal.png"
              alt="Logo Au Beau Jeu"
              className="w-72 sm:w-96 md:w-[480px] lg:w-[560px] h-auto object-contain drop-shadow-sm select-none"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-abj-dark/85 max-w-xl">
            Boutique de jeux - Café ludique - événement TCG
          </p>
        </div>

        {/* 3 Main Action Anchors (La Boutique, Le Bar à jeux, TCG & Tournois) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 my-10 md:my-12">
          {/* Ancre 1 : La Boutique */}
          <a
            href="#boutique"
            className="flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-[#EBF5F3] border-2 border-abj-dark text-abj-dark shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all transform hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-abj-primary flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
                <ShoppingBag className="w-6 h-6 text-abj-dark" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider font-bold text-abj-dark/60">Espace Vente</div>
                <div className="text-lg font-extrabold text-abj-dark">La Boutique</div>
              </div>
            </div>
            <span className="text-xl font-black text-abj-primary group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>

          {/* Ancre 2 : Le Bar à jeux */}
          <a
            href="#bar"
            className="flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-[#EDF5FB] border-2 border-abj-dark text-abj-dark shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all transform hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-abj-blue flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
                <Coffee className="w-6 h-6 text-abj-dark" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider font-bold text-abj-dark/60">Ludothèque & Carte</div>
                <div className="text-lg font-extrabold text-abj-dark">Le Bar à jeux</div>
              </div>
            </div>
            <span className="text-xl font-black text-abj-blue group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>

          {/* Ancre 3 : TCG & Tournois */}
          <a
            href="#tcg"
            className="flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-[#FDF6EB] border-2 border-abj-dark text-abj-dark shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all transform hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-abj-yellow flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">
                <Layers className="w-6 h-6 text-abj-dark" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider font-bold text-abj-dark/60">Cartes & Événements</div>
                <div className="text-lg font-extrabold text-abj-dark">TCG & Tournois</div>
              </div>
            </div>
            <span className="text-xl font-black text-abj-yellow group-hover:translate-x-1 transition-transform">
              ↓
            </span>
          </a>
        </div>

        {/* Tactile Spiral Notebooks & Mascot OBO */}
        <div className="mt-8 pt-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
            {/* Carnet 1 : Boutique */}
            <div className="lg:col-span-5 flex justify-center">
              <SpiralNotebook
                title="LES HORAIRES DE LA BOUTIQUE :"
                variant="blue"
                items={boutiqueSchedule}
                showStatusBadge={false}
                className="transform -rotate-1 hover:rotate-0"
              />
            </div>

            {/* Carnet 2 : Bar */}
            <div className="lg:col-span-5 flex justify-center">
              <SpiralNotebook
                title="LES HORAIRES DU BAR À JEUX :"
                variant="yellow"
                items={barSchedule}
                showStatusBadge={true}
                isOpen={status.isOpenNow}
                statusText={status.isOpenNow ? status.badgeText : `${status.badgeText} (${status.detailText})`}
                className="transform rotate-1 hover:rotate-0"
              />
            </div>

            {/* OBO Mascot Sticker Guide */}
            <div className="lg:col-span-2 flex flex-col items-center justify-end pb-2">
              <div className="relative group cursor-pointer">
                <img
                  src="/assets/obo1.png"
                  alt="OBO la mascotte joyeuse d'Au Beau Jeu"
                  className="w-28 sm:w-32 md:w-36 h-auto object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 drop-shadow-md"
                />
                <span className="absolute -top-3 -right-2 bg-abj-secondary text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-white shadow-xs">
                  Coucou !
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
