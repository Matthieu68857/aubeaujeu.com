import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Maximize2, X, Beer, BookOpen, Layers } from 'lucide-react';
import jsPDF from 'jspdf';

const CARTE_PAGES = [
  {
    src: '/assets/carte/PAGE 1.png',
    title: 'Page 1 — Boissons & Spécialités',
    shortTitle: 'Page 1',
  },
  {
    src: '/assets/carte/PAGE 1 verso.png',
    title: 'Page 1 Verso — Bières & Vins',
    shortTitle: 'Page 1 Verso',
  },
  {
    src: '/assets/carte/PAGE 2.png',
    title: 'Page 2 — Snacks, Planches & Douceurs',
    shortTitle: 'Page 2',
  },
  {
    src: '/assets/carte/PAGE 2 verso.png',
    title: 'Page 2 Verso — Formules & Ludothèque',
    shortTitle: 'Page 2 Verso',
  },
];

const BAR_AMBIANCE_PHOTOS = [
  {
    src: '/old_photos/bar/1 (2).jpg',
    title: 'Soirées jeux animées',
    subtitle: 'Ambiance conviviale et rires garantis',
  },
  {
    src: '/old_photos/bar/2 (2).jpg',
    title: 'Tables spacieuses & bières locales',
    subtitle: 'Tout pour jouer confortablement entre amis',
  },
  {
    src: '/old_photos/bar/3 (1).jpg',
    title: 'La ludothèque en libre accès',
    subtitle: '+600 boîtes prêtes à être explorées',
  },
];

export const Bar: React.FC = () => {
  const [currentCarteIndex, setCurrentCarteIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Touch swipe support with velocity detection (Emil Kowalski guidelines)
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
    const distance = touchStartX.current - touchEndX;
    const timeElapsed = Date.now() - touchStartTime.current;
    const velocity = Math.abs(distance) / timeElapsed;

    if (Math.abs(distance) > 40 || velocity > 0.15) {
      if (distance > 0) {
        nextCarte();
      } else {
        prevCarte();
      }
    }
    touchStartX.current = null;
    touchStartTime.current = null;
  };

  // Generate multi-page PDF combining all 4 carte pages
  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [800, 1130],
      });

      for (let i = 0; i < CARTE_PAGES.length; i++) {
        if (i > 0) pdf.addPage([800, 1130], 'portrait');
        
        // Load image as HTMLImageElement
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            pdf.addImage(img, 'PNG', 0, 0, 800, 1130);
            resolve();
          };
          img.onerror = () => resolve(); // fallback gracefully
          img.src = CARTE_PAGES[i].src;
        });
      }

      pdf.save('Au-Beau-Jeu-Menu-Bar.pdf');
    } catch (err) {
      console.error('PDF generation error:', err);
      // Fallback: open current image directly
      window.open(CARTE_PAGES[currentCarteIndex].src, '_blank');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section id="bar" className="py-16 md:py-24 bg-gradient-to-b from-[#fbfbf8] via-abj-cream to-[#f7f7f3] border-b border-abj-primary/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-abj-blue/20 text-abj-dark font-bold text-xs sm:text-sm border border-abj-blue/40 mb-4">
            <BookOpen className="w-4 h-4 text-abj-blue" />
            <span>Plus de 600 jeux disponibles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-abj-dark tracking-tight">
            Le Bar à Jeux & Sa Ludothèque
          </h2>
          <p className="mt-4 text-base sm:text-lg text-abj-dark/80 leading-relaxed">
            Installez-vous à une table, commandez une bonne bière locale ou une boisson artisanale, et laissez-vous tenter par notre collection de plus de <strong>600 jeux de société</strong>. Nos animateurs passionnés sont là pour vous expliquer les règles !
          </p>
        </div>

        {/* Ambiance Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {BAR_AMBIANCE_PHOTOS.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-abj-soft border border-abj-primary/15 group aspect-[4/3] bg-white"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="font-bold text-base sm:text-lg leading-tight">{item.title}</h3>
                <p className="text-xs text-white/80 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Menu Slider Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-abj-soft border border-abj-blue/20">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <Beer className="w-6 h-6 text-abj-blue" />
                <h3 className="text-2xl font-bold text-abj-dark">La Carte du Bar</h3>
              </div>
              <p className="text-sm text-abj-dark/70 mt-1">
                Feuilletez les 4 pages de notre carte des boissons et snacks.
              </p>
            </div>

            {/* Actions: Fullscreen & Download PDF */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-abj-cream hover:bg-abj-cream/80 text-abj-dark font-medium text-xs sm:text-sm border border-abj-primary/20 transition-all btn-pressable min-h-[44px]"
                aria-label="Plein écran"
              >
                <Maximize2 className="w-4 h-4 text-abj-dark" />
                <span className="hidden sm:inline">Plein écran</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-abj-primary hover:bg-[#72b5a9] text-abj-dark font-bold text-xs sm:text-sm shadow-md transition-all btn-pressable min-h-[44px]"
                aria-label="Télécharger le menu en PDF"
              >
                <Download className="w-4 h-4" />
                <span>{isGeneratingPdf ? 'Génération...' : 'Télécharger le menu en PDF'}</span>
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-2xl mx-auto">
            
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative rounded-2xl overflow-hidden bg-abj-cream/50 border border-abj-primary/15 shadow-inner cursor-grab active:cursor-grabbing select-none"
            >
              <img
                src={CARTE_PAGES[currentCarteIndex].src}
                alt={CARTE_PAGES[currentCarteIndex].title}
                className="w-full h-auto object-contain max-h-[650px] mx-auto transition-opacity duration-200"
              />

              {/* Page title badge */}
              <div className="absolute top-4 left-4 bg-abj-dark/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-abj-yellow" />
                <span>{CARTE_PAGES[currentCarteIndex].shortTitle} ({currentCarteIndex + 1}/4)</span>
              </div>
            </div>

            {/* Slider Previous/Next Controls */}
            <button
              onClick={prevCarte}
              aria-label="Page précédente"
              className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 p-3 rounded-full bg-white text-abj-dark shadow-xl border border-abj-primary/30 hover:bg-abj-cream transition-all btn-pressable min-w-[48px] min-h-[48px] flex items-center justify-center z-10"
            >
              <ChevronLeft className="w-6 h-6 text-abj-dark" />
            </button>

            <button
              onClick={nextCarte}
              aria-label="Page suivante"
              className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 p-3 rounded-full bg-white text-abj-dark shadow-xl border border-abj-primary/30 hover:bg-abj-cream transition-all btn-pressable min-w-[48px] min-h-[48px] flex items-center justify-center z-10"
            >
              <ChevronRight className="w-6 h-6 text-abj-dark" />
            </button>

            {/* Pagination Thumbnails / Tabs */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-6">
              {CARTE_PAGES.map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCarteIndex(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl text-center text-xs font-bold transition-all btn-pressable border min-h-[44px] flex flex-col items-center justify-center ${
                    idx === currentCarteIndex
                      ? 'bg-abj-primary text-abj-dark border-abj-primary shadow-sm ring-2 ring-abj-primary/30'
                      : 'bg-abj-cream/80 text-abj-dark/70 border-abj-primary/15 hover:bg-white'
                  }`}
                >
                  <span className="truncate w-full">{page.shortTitle}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-abj-dark/60 mt-3 sm:hidden">
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
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
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
              <span className="text-white text-sm font-semibold">
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
