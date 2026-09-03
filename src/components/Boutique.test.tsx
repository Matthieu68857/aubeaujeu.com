import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Boutique } from './Boutique';

describe('Boutique Component', () => {
  it('renders section with id "boutique" for anchor navigation', () => {
    render(<Boutique />);
    const section = document.getElementById('boutique');
    expect(section).toBeInTheDocument();
  });

  it('highlights the 9 years history and Lille identity', () => {
    render(<Boutique />);
    expect(screen.getAllByText(/9 ans/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Lille/i).length).toBeGreaterThan(0);
  });

  it('renders boutique photos gallery or carousel', () => {
    render(<Boutique />);
    const images = screen.getAllByRole('img');
    const boutiqueImages = images.filter((img) =>
      img.getAttribute('src')?.includes('old_photos/boutique')
    );
    expect(boutiqueImages.length).toBeGreaterThanOrEqual(1);
  });
});
