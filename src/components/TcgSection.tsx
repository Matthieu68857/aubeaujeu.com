import React from 'react';
import { ExternalLink, Trophy, Sparkles, Shield, Swords, Flame, HeartHandshake } from 'lucide-react';

export const TcgSection: React.FC = () => {
  const games = [
    {
      name: 'Pokémon',
      desc: 'Tournois officiels, ligue du samedi & échanges',
      color: 'bg-abj-yellow/25 border-abj-yellow',
      icon: Flame,
      tag: 'Classique',
    },
    {
      name: 'Disney Lorcana',
      desc: 'Soirées ligue conviviales & événements scellés',
      color: 'bg-abj-mauve/20 border-abj-mauve',
      icon: Sparkles,
      tag: 'Populaire',
    },
    {
      name: 'Magic: The Gathering',
      desc: 'Commander, Draft, Standard & avant-premières',
      color: 'bg-abj-primary/20 border-abj-primary',
      icon: Swords,
      tag: 'Expert',
    },
    {
      name: 'One Piece',
      desc: 'Tournois Store Championship & jeu libre',
      color: 'bg-abj-secondary/20 border-abj-secondary',
      icon: Shield,
      tag: 'Dynamique',
    },
    {
      name: 'Star Wars: Unlimited',
      desc: 'Initiations rapides et affrontements galactiques',
      color: 'bg-abj-blue/20 border-abj-blue',
      icon: Trophy,
      tag: 'Nouveau',
    },
  ];

  return (
    <section id="tcg" className="relative py-16 md:py-24 bg-[#FDF6EB] text-abj-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-abj-yellow text-abj-dark font-extrabold text-xs uppercase tracking-wider border-2 border-abj-dark shadow-abj-tactile">
            <Trophy className="w-4 h-4" />
            <span>La Référence TCG à Lille</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-abj-dark">
            L'Espace TCG & Tournois
          </h2>
          
          <p className="text-base sm:text-lg text-abj-dark/85 leading-relaxed font-medium">
            À Au Beau Jeu, le jeu de cartes est une passion vivante. Venez vivre des{' '}
            <strong>tournois réguliers, initiations conviviales et avant-premières officielles</strong>{' '}
            encadrées par notre équipe de passionnés.
          </p>
        </div>

        {/* Game Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.name}
                className={`p-5 rounded-2xl border-2 border-abj-dark bg-white shadow-abj-tactile hover:shadow-abj-tactile-lg transition-all transform hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-abj-dark/20 ${game.color}`}>
                      <Icon className="w-5 h-5 text-abj-dark" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-abj-dark/5 text-abj-dark">
                      {game.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-abj-dark mb-1">{game.name}</h3>
                  <p className="text-xs sm:text-sm text-abj-dark/75 font-medium">{game.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Bonus card: Initiation & Bienvenue */}
          <div className="p-5 rounded-2xl border-2 border-abj-dark bg-abj-primary/15 shadow-abj-tactile flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-abj-dark">
                  <HeartHandshake className="w-5 h-5 text-abj-dark" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-white text-abj-dark border border-abj-dark/20">
                  Tous niveaux
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-abj-dark mb-1">Prêt de Decks & Conseils</h3>
              <p className="text-xs sm:text-sm text-abj-dark/75 font-medium">
                Vous débutez ? Nous vous prêtons des decks et vous expliquons les règles avec plaisir !
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner to TCG-Arena */}
        <div className="max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-3xl bg-white border-2 border-abj-dark shadow-abj-tactile-lg space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-abj-dark">
            Consultez le planning et inscrivez-vous aux tournois
          </h3>
          <p className="text-sm text-abj-dark/80 font-medium">
            Retrouvez tous les créneaux, les résultats et réservez votre place sur notre plateforme dédiée TCG-Arena.
          </p>
          <div className="pt-2">
            <a
              href="https://tcg-arena.aubeaujeu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-abj-yellow hover:bg-[#ebd078] text-abj-dark font-extrabold text-base sm:text-lg border-2 border-abj-dark shadow-abj-tactile hover:shadow-abj-tactile-lg transform hover:-translate-y-0.5 transition-all btn-pressable"
            >
              <span>Rejoindre TCG-Arena</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
