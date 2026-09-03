import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders ABJ logo and OBO mascot', () => {
    render(<Hero />);
    expect(screen.getByAltText(/Logo Au Beau Jeu/i)).toBeInTheDocument();
    expect(screen.getByAltText(/OBO la mascotte/i)).toBeInTheDocument();
  });

  it('renders all 3 required call-to-action buttons with correct targets', () => {
    render(<Hero />);
    
    // Bouton 1: La Boutique
    const boutiqueBtn = screen.getByRole('link', { name: /La Boutique/i });
    expect(boutiqueBtn).toHaveAttribute('href', '#boutique');

    // Bouton 2: Le Bar à jeux
    const barBtn = screen.getByRole('link', { name: /Le Bar à jeux/i });
    expect(barBtn).toHaveAttribute('href', '#bar');

    // Bouton 3: Le TCG (strict external link)
    const tcgBtn = screen.getByRole('link', { name: /Le TCG Arena/i });
    expect(tcgBtn).toHaveAttribute('href', 'https://tcg-arena.aubeaujeu.com/');
    expect(tcgBtn).toHaveAttribute('target', '_blank');
  });

  it('renders opening status badge and weekly schedule toggle', () => {
    render(<Hero />);
    expect(screen.getByLabelText(/Voir la grille complète des horaires d'ouverture/i)).toBeInTheDocument();
  });

  it('opens Zenchef reservation modal on button click', () => {
    render(<Hero />);
    const zenchefBtn = screen.getByRole('button', { name: /Réserver une table au Bar \(Zenchef\)/i });
    fireEvent.click(zenchefBtn);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Accéder au module Zenchef sécurisé/i)).toBeInTheDocument();
  });
});
