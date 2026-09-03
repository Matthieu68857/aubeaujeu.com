import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Sanity Check', () => {
  it('renders Au Beau Jeu heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Au Beau Jeu/i })).toBeInTheDocument();
  });
});
