import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component (Revamped Expressive & Tactile)', () => {
  it('renders central prominent ABJ logo and brand tagline', () => {
    render(<Hero />);
    const logo = screen.getByAltText(/Logo Au Beau Jeu/i);
    expect(logo).toBeInTheDocument();
    expect(screen.getByText(/Boutique de jeux.*Café ludique.*événement TCG/i)).toBeInTheDocument();
  });

  it('renders 3 tactile anchor buttons pointing to the 3 main pillars (#boutique, #bar, #tcg)', () => {
    render(<Hero />);
    
    // Ancre 1: La Boutique
    const boutiqueBtn = screen.getByRole('link', { name: /La Boutique/i });
    expect(boutiqueBtn).toHaveAttribute('href', '#boutique');

    // Ancre 2: Le Bar à jeux
    const barBtn = screen.getByRole('link', { name: /Le Bar à jeux/i });
    expect(barBtn).toHaveAttribute('href', '#bar');

    // Ancre 3: TCG & Tournois (Internal anchor)
    const tcgBtn = screen.getByRole('link', { name: /TCG & Tournois/i });
    expect(tcgBtn).toHaveAttribute('href', '#tcg');
  });

  it('does NOT render any Zenchef reservation button (deferred for official component)', () => {
    render(<Hero />);
    expect(screen.queryByRole('button', { name: /Zenchef/i })).not.toBeInTheDocument();
  });

  it('renders the tactile spiral notebooks for Boutique and Bar schedules', () => {
    render(<Hero />);
    expect(screen.getByText(/LES HORAIRES DE LA BOUTIQUE/i)).toBeInTheDocument();
    expect(screen.getByText(/LES HORAIRES DU BAR À JEUX/i)).toBeInTheDocument();
  });

  it('renders the friendly OBO mascot sticker', () => {
    render(<Hero />);
    expect(screen.getByAltText(/OBO la mascotte/i)).toBeInTheDocument();
  });
});
