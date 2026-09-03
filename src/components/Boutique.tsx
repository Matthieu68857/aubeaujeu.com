import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Gift, Compass, HeartHandshake, Sparkles } from 'lucide-react';

const BOUTIQUE_PHOTOS = [
  {
    src: '/old_photos/boutique/1 (1).jpg',
    title: 'Les rayons et nouveautés',
    caption: 'Des centaines de références sélectionnées avec passion à Lille',
  },
  {
    src: '/old_photos/boutique/2 (1).jpg',
    title: 'Une sélection pour tous les âges',
    caption: 'Du jeu d’ambiance familial aux jeux experts',
  },
  {
    src: '/old_photos/boutique/3.jpg',
    title: 'Conseils personnalisés',
    caption: 'Notre équipe vous guide pas à pas vers votre prochaine pépite',
  },
];

export const Boutique: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevPhoto = () => {
    setActiveIndex((prev) => (prev === 0 ? BOUTIQUE_PHOTOS.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev === BOUTIQUE_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="boutique" className="py-16 md:py-24 bg-white border-b border-abj-primary/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-abj-primary/15 text-abj-dark font-bold text-xs sm:text-sm border border-abj-primary/30 mb-4">
            <Sparkles className="w-4 h-4 text-abj-primary" />
            <span>9 ans de passion ludique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-abj-dark tracking-tight">
            La Boutique Au Beau Jeu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-abj-dark/80 leading-relaxed">
            Depuis <strong>9 ans</strong>, Au Beau Jeu est la boutique lilloise incontournable pour les amoureux des jeux de société. Que vous cherchiez un petit jeu d'ambiance pour animer un apéro ou une grande aventure stratégique, vous êtes ici chez vous.
          </p>
        </div>

        {/* Core content: Story & Interactive Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Carousel with real photos */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-abj-soft border border-abj-primary/20 bg-abj-cream">
              {/* Main active image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={BOUTIQUE_PHOTOS[activeIndex].src}
                  alt={BOUTIQUE_PHOTOS[activeIndex].title}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                
                {/* Gradient overlay for caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-abj-yellow">
                    Au Beau Jeu • Lille
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">{BOUTIQUE_PHOTOS[activeIndex].title}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{BOUTIQUE_PHOTOS[activeIndex].caption}</p>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none">
                <button
                  onClick={prevPhoto}
                  aria-label="Photo précédente"
                  className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-abj-dark shadow-md transition-all btn-pressable min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Photo suivante"
                  className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-abj-dark shadow-md transition-all btn-pressable min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail indicators */}
              <div className="p-3 bg-white flex justify-center space-x-2 border-t border-gray-100">
                {BOUTIQUE_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.src}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Afficher la photo ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 btn-pressable ${
                      idx === activeIndex
                        ? 'w-8 bg-abj-primary'
                        : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Values & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-abj-cream/60 border border-abj-primary/10">
              <div className="p-3 rounded-xl bg-abj-primary/20 text-abj-dark shrink-0">
                <Compass className="w-6 h-6 text-abj-primary" />
              </div>
              <div>
                <h4 className="font-bold text-base text-abj-dark">Conseil 100% sur-mesure</h4>
                <p className="text-sm text-abj-dark/70 mt-1">
                  On ne pousse pas à l'achat : on discute, on écoute vos goûts et on trouve le jeu qui fera mouche auprès de vos proches.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-abj-cream/60 border border-abj-secondary/10">
              <div className="p-3 rounded-xl bg-abj-secondary/20 text-abj-dark shrink-0">
                <Gift className="w-6 h-6 text-abj-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-base text-abj-dark">Nouveautés & Pépites rares</h4>
                <p className="text-sm text-abj-dark/70 mt-1">
                  Arrivages réguliers, extensions exclusives, puzzles, jeux de cartes et pépites indépendantes difficiles à trouver ailleurs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-abj-cream/60 border border-abj-yellow/20">
              <div className="p-3 rounded-xl bg-abj-yellow/30 text-abj-dark shrink-0">
                <HeartHandshake className="w-6 h-6 text-abj-dark" />
              </div>
              <div>
                <h4 className="font-bold text-base text-abj-dark">Testez avant d'acheter</h4>
                <p className="text-sm text-abj-dark/70 mt-1">
                  Passez côté bar pour essayer le jeu qui vous fait envie, puis repartez avec votre boîte neuve sous le bras !
                </p>
              </div>
            </div>

            {/* Mascot advice box */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-abj-primary/10 to-abj-blue/10 border border-abj-primary/20">
              <img
                src="/assets/obo2.png"
                alt="OBO conseilleur"
                className="w-14 h-14 object-contain shrink-0"
              />
              <p className="text-xs text-abj-dark/80 italic">
                « Passez nous voir au 127 rue du Molinel, on vous prépare toujours un accueil aux petits oignons ! »
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
