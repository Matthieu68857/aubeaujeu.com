import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Users, Clock, Sparkles } from 'lucide-react';

interface ZenchefModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantId?: string; // Configurable Zenchef restaurant ID
}

export const ZenchefModal: React.FC<ZenchefModalProps> = ({
  isOpen,
  onClose,
  restaurantId = 'aubeaujeu',
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const zenchefBookingUrl = `https://bookings.zenchef.com/results?rid=${restaurantId}&pid=1001`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zenchef-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-abj-dark/60 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-abj-primary/20 overflow-hidden transform transition-all duration-200 animate-in fade-in zoom-in-95"
      >
        {/* Header with brand colors */}
        <div className="bg-gradient-to-r from-abj-primary to-abj-blue p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="p-2 bg-white/20 rounded-xl backdrop-blur-xs">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              <h2 id="zenchef-modal-title" className="text-xl font-bold font-sans">
                Réserver une table au Bar
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer la fenêtre de réservation"
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-150 btn-pressable flex items-center justify-center min-w-[44px] min-h-[44px]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-white/90 text-sm">
            Venez jouer, trinquer et vous détendre chez Au Beau Jeu !
          </p>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6">
          <div className="bg-abj-cream/80 p-4 rounded-2xl border border-abj-primary/15 space-y-3">
            <div className="flex items-start space-x-3 text-sm text-abj-dark">
              <Clock className="w-5 h-5 text-abj-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Réservation conseillée :</span> Les soirs du jeudi au samedi et le dimanche après-midi.
              </div>
            </div>
            <div className="flex items-start space-x-3 text-sm text-abj-dark">
              <Users className="w-5 h-5 text-abj-secondary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Groupes & Événements :</span> Plus de 600 jeux et nos animateurs pour vous conseiller.
              </div>
            </div>
          </div>

          {/* Direct CTA button to Zenchef portal */}
          <div className="space-y-3">
            <a
              href={zenchefBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl bg-abj-primary hover:bg-[#72b5a9] text-abj-dark font-bold text-base shadow-lg shadow-abj-primary/30 transition-all btn-pressable min-h-[48px]"
            >
              <Calendar className="w-5 h-5" />
              <span>Accéder au module Zenchef sécurisé</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-xs text-center text-abj-dark/70">
              Confirmation instantanée par email et SMS via la plateforme Zenchef.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-abj-cream/40 px-6 py-4 border-t border-gray-100 flex items-center justify-between text-xs text-abj-dark/80">
          <span>📍 127 rue du Molinel, Lille</span>
          <span>📞 09 83 01 42 74</span>
        </div>
      </div>
    </div>
  );
};
