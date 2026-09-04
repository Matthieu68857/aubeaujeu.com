import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Download, BookOpen, Layers, X, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';

const BAR_PHOTOS = [
  {
    src: '/old_photos/bar/1.jpg',
    title: 'Ambiance chaleureuse',
    subtitle: 'Tables spacieuses et assises confortables',
  },
  {
    src: '/old_photos/bar/2.jpg',
    title: 'Boissons locales & snacks',
    subtitle: 'Bières artisanales, jus bio et gourmandises',
  },
  {
    src: '/old_photos/bar/3 (1).jpg',
    title: 'La ludothèque en libre accès',
    subtitle: '+600 boîtes prêtes à être explorées',
  },
];

const CARTE_PAGES = [
  {
    src: '/assets/carte/PAGE 1.png',
    title: 'Menu - Boissons Chaudes & Fraîches',
    shortTitle: 'Page 1',
  },
  {
    src: '/assets/carte/PAGE 1 verso.png',
    title: 'Menu - Bières Pression & Bouteilles',
    shortTitle: 'Page 1 Verso',
  },
  {
    src: '/assets/carte/PAGE 2.png',
    title: 'Menu - Vins, Cidres & Planches',
    shortTitle: 'Page 2',
  },
  {
    src: '/assets/carte/PAGE 2 verso.png',
    title: 'Menu - Snacks, Desserts & Formules',
    shortTitle: 'Page 2 Verso',
  },
];

export const Bar: React.FC = () => {
  const [currentCarteIndex, setCurrentCarteIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Touch swipe support with velocity detection
  const touchStartX = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);

  const prevCarte = () => {
    setCurrentCarteIndex((prev) => (prev === 0 ? CARTE_PAGES.length - 1 : prev - 1));
  };

  const nextCarte = () => {
    setCurrentCarteIndex((prev) => (prev === CARTE_PAGES.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartTime.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    const diffTime = Date.now() - touchStartTime.current;

    if (Math.abs(diffX) > 50 && diffTime < 400) {
      if (diffX > 0) {
        nextCarte();
      } else {
        prevCarte();
      }
    }

    touchStartX.current = null;
    touchStartTime.current = null;
  };

  // High quality PDF generation
  const downloadCartePdf = async () => {
    try {
      setIsGeneratingPdf(true);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      for (let i = 0; i < CARTE_PAGES.length; i++) {
        const page = CARTE_PAGES[i];
        if (i > 0) pdf.addPage();

        const img = new Image();
        img.src = page.src;
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        pdf.addImage(img, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      }

      pdf.save('Au-Beau-Jeu-Carte-du-Bar.pdf');
    } catch (err) {
      console.error('Erreur lors du téléchargement du PDF de la carte', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section id="bar" className="py-16 md:py-24 bg-[#fbfbf8] relative overflow-hidden text-abj-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-abj-blue text-white font-black text-xs sm:text-sm border-2 border-abj-dark shadow-abj-tactile mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Plus de 600 jeux disponibles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-abj-dark tracking-tight">
            Le Bar à Jeux & Sa Ludothèque
          </h2>
          <p className="mt-4 text-base sm:text-lg text-abj-dark/85 leading-relaxed font-medium">
            Installez-vous à une table, commandez une bonne bière locale ou une boisson artisanale, et laissez-vous tenter par notre collection de plus de <strong>600 jeux en libre accès</strong>. Nos animateurs passionnés sont là pour vous expliquer les règles !
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BAR_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border-2 border-abj-dark bg-white shadow-abj-tactile hover:shadow-abj-tactile-lg transform hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white border-t-2 border-abj-dark">
                <h3 className="font-extrabold text-base text-abj-dark">{photo.title}</h3>
                <p className="text-xs sm:text-sm text-abj-dark/75 mt-0.5 font-medium">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Menu Viewer */}
        <div className="bg-white rounded-3xl border-2 border-abj-dark shadow-abj-tactile-lg p-6 sm:p-8 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-abj-dark/15">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-abj-blue text-white flex items-center justify-center border-2 border-abj-dark shadow-xs">
                <BookOpen className="w-6 h-6 text-abj-dark" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-abj-dark">
                  La Carte du Bar
                </h3>
                <p className="text-xs sm:text-sm text-abj-dark/75 font-medium">
                  Feuilletez les 4 pages de notre carte : boissons, bières et douceurs
                </p>
              </div>
            </div>

            {/* Action Buttons: Fullscreen & PDF */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-abj-dark bg-white hover:bg-abj-cream text-abj-dark text-xs sm:text-sm font-extrabold shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all btn-pressable min-h-[44px]"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Plein écran</span>
              </button>

              <button
                onClick={downloadCartePdf}
                disabled={isGeneratingPdf}
                aria-label="Télécharger le menu en PDF"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-abj-primary hover:bg-[#72b0a5] text-abj-dark text-xs sm:text-sm font-black border-2 border-abj-dark shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all btn-pressable min-h-[44px] disabled:opacity-50"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Création du PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger le PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Touch Slider Viewport */}
          <div className="relative max-w-2xl mx-auto">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative rounded-2xl overflow-hidden bg-abj-cream/60 border-2 border-abj-dark shadow-inner cursor-grab active:cursor-grabbing select-none"
            >
              <img
                src={CARTE_PAGES[currentCarteIndex].src}
                alt={CARTE_PAGES[currentCarteIndex].title}
                className="w-full h-auto object-contain max-h-[650px] mx-auto transition-opacity duration-200"
              />

              {/* Page title badge */}
              <div className="absolute top-4 left-4 bg-abj-dark text-white px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20">
                <Layers className="w-3.5 h-3.5 text-abj-yellow" />
                <span>{CARTE_PAGES[currentCarteIndex].shortTitle} ({currentCarteIndex + 1}/4)</span>
              </div>
            </div>

            {/* Slider Previous/Next Controls */}
            <button
              onClick={prevCarte}
              aria-label="Page précédente"
              className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 p-3 rounded-full bg-white text-abj-dark shadow-abj-tactile border-2 border-abj-dark hover:bg-abj-yellow transition-all btn-pressable min-w-[48px] min-h-[48px] flex items-center justify-center z-10 transform hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 text-abj-dark" />
            </button>

            <button
              onClick={nextCarte}
              aria-label="Page suivante"
              className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 p-3 rounded-full bg-white text-abj-dark shadow-abj-tactile border-2 border-abj-dark hover:bg-abj-yellow transition-all btn-pressable min-w-[48px] min-h-[48px] flex items-center justify-center z-10 transform hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 text-abj-dark" />
            </button>

            {/* Pagination Thumbnails / Tabs */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-6">
              {CARTE_PAGES.map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCarteIndex(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl text-center text-xs font-black transition-all btn-pressable border-2 border-abj-dark min-h-[44px] flex flex-col items-center justify-center ${
                    idx === currentCarteIndex
                      ? 'bg-abj-primary text-abj-dark shadow-abj-tactile -translate-y-0.5'
                      : 'bg-abj-cream/80 text-abj-dark/75 hover:bg-white'
                  }`}
                >
                  <span className="truncate w-full">{page.shortTitle}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-abj-dark/70 font-medium mt-3 sm:hidden">
              💡 Glissez avec le doigt (swipe) pour tourner les pages de la carte
            </p>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative max-w-4xl max-h-[95vh] w-full flex flex-col items-center justify-center">
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Fermer le plein écran"
              className="absolute top-3 right-3 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white min-w-[48px] min-h-[48px] flex items-center justify-center z-50 btn-pressable"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={CARTE_PAGES[currentCarteIndex].src}
              alt={CARTE_PAGES[currentCarteIndex].title}
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border-2 border-white/20"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Fullscreen navigation buttons */}
            <div className="flex items-center space-x-6 mt-4 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prevCarte}
                aria-label="Page précédente"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white min-w-[48px] min-h-[48px] flex items-center justify-center btn-pressable"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-white text-sm font-bold">
                {currentCarteIndex + 1} / {CARTE_PAGES.length}
              </span>
              <button
                onClick={nextCarte}
                aria-label="Page suivante"
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white min-w-[48px] min-h-[48px] flex items-center justify-center btn-pressable"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
