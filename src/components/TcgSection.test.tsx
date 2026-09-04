import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TcgSection } from './TcgSection';

describe('TcgSection Component', () => {
  it('renders section with id="tcg" for anchor navigation', () => {
    const { container } = render(<TcgSection />);
    const section = container.querySelector('#tcg');
    expect(section).toBeInTheDocument();
  });

  it('renders title and introductory text about TCG hub and tournaments', () => {
    render(<TcgSection />);
    expect(screen.getByText(/L'Espace TCG & Tournois/i)).toBeInTheDocument();
    expect(screen.getByText(/tournois réguliers.*initiations.*avant-premières/i)).toBeInTheDocument();
  });

  it('renders key collectible card games badges (Pokémon, Lorcana, Magic, One Piece, Star Wars)', () => {
    render(<TcgSection />);
    expect(screen.getByText(/Pokémon/i)).toBeInTheDocument();
    expect(screen.getByText(/Disney Lorcana/i)).toBeInTheDocument();
    expect(screen.getByText(/Magic: The Gathering/i)).toBeInTheDocument();
    expect(screen.getByText(/One Piece/i)).toBeInTheDocument();
    expect(screen.getByText(/Star Wars: Unlimited/i)).toBeInTheDocument();
  });

  it('renders a prominent external CTA link to TCG Arena with security attributes', () => {
    render(<TcgSection />);
    const arenaLink = screen.getByRole('link', { name: /Rejoindre TCG-Arena/i });
    expect(arenaLink).toBeInTheDocument();
    expect(arenaLink).toHaveAttribute('href', 'https://tcg-arena.aubeaujeu.com/');
    expect(arenaLink).toHaveAttribute('target', '_blank');
    expect(arenaLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
