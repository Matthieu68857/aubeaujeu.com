import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Global Layout & Navigation Structure', () => {
  it('renders Au Beau Jeu main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Au Beau Jeu/i })).toBeInTheDocument();
  });

  it('renders all key sections including the new TCG section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#boutique')).toBeInTheDocument();
    expect(container.querySelector('#bar')).toBeInTheDocument();
    expect(container.querySelector('#tcg')).toBeInTheDocument();
  });

  it('renders organic wave dividers between sections', () => {
    const { container } = render(<App />);
    const waveDividers = container.querySelectorAll('svg[aria-hidden="true"]');
    expect(waveDividers.length).toBeGreaterThanOrEqual(3);
  });
});
