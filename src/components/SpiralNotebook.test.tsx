import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SpiralNotebook } from './SpiralNotebook';

describe('SpiralNotebook Component', () => {
  const sampleItems = [
    { day: 'Mardi', hours: '10h - 13h / 14h - 23h30' },
    { day: 'Mercredi', hours: '10h - 13h / 14h - 23h30' },
    { day: 'Jeudi', hours: '10h - 13h / 14h - 23h30' },
    { day: 'Vendredi', hours: '10h - 13h / 14h - 23h30' },
    { day: 'Samedi', hours: '10h - 13h / 14h - 23h30' },
  ];

  it('renders the notebook title and spiral loops', () => {
    render(
      <SpiralNotebook
        title="LES HORAIRES DE LA BOUTIQUE"
        variant="blue"
        items={sampleItems}
      />
    );

    expect(screen.getByText(/LES HORAIRES DE LA BOUTIQUE/i)).toBeInTheDocument();
    expect(screen.getByText('Mardi')).toBeInTheDocument();
    expect(screen.getByText('Samedi')).toBeInTheDocument();
  });

  it('displays an open/closed badge when showStatusBadge is true', () => {
    render(
      <SpiralNotebook
        title="LES HORAIRES DU BAR À JEUX"
        variant="yellow"
        items={sampleItems}
        showStatusBadge={true}
        isOpen={true}
        statusText="Ouvert actuellement"
      />
    );

    expect(screen.getByText(/Ouvert actuellement/i)).toBeInTheDocument();
  });

  it('applies variant styling for yellow and blue notebooks', () => {
    const { container: yellowContainer } = render(
      <SpiralNotebook
        title="Bar"
        variant="yellow"
        items={sampleItems}
      />
    );
    const { container: blueContainer } = render(
      <SpiralNotebook
        title="Boutique"
        variant="blue"
        items={sampleItems}
      />
    );

    expect(yellowContainer.querySelector('.header-yellow')).toBeInTheDocument();
    expect(blueContainer.querySelector('.header-blue')).toBeInTheDocument();
  });
});
