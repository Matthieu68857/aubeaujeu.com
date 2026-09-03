import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Sanity Check', () => {
  it('renders Au Beau Jeu main heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Au Beau Jeu/i })).toBeInTheDocument();
  });
});
