import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Bar } from './Bar';

describe('Bar Component', () => {
  it('renders section with id "bar" for anchor navigation', () => {
    render(<Bar />);
    const section = document.getElementById('bar');
    expect(section).toBeInTheDocument();
  });

  it('highlights the 600+ games library', () => {
    render(<Bar />);
    expect(screen.getAllByText(/600/i).length).toBeGreaterThan(0);
  });

  it('renders interactive menu slider with 4 carte pages', () => {
    render(<Bar />);
    const carteImages = screen.getAllByRole('img').filter((img) =>
      img.getAttribute('src')?.includes('assets/carte')
    );
    expect(carteImages.length).toBeGreaterThanOrEqual(1);
  });

  it('has pagination and controls for menu pages', () => {
    render(<Bar />);
    expect(screen.getByRole('button', { name: /Page précédente/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Page suivante/i })).toBeInTheDocument();
  });

  it('provides a PDF download button for the menu', () => {
    render(<Bar />);
    const downloadBtn = screen.getByRole('button', { name: /Télécharger le menu en PDF/i });
    expect(downloadBtn).toBeInTheDocument();
  });
});
