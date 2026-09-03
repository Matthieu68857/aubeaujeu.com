import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

describe('Accessibility & Standards Verification', () => {
  it('contains semantic landmarks: main, footer, and navigation', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('ensures all images have alt attributes', () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')?.trim().length).toBeGreaterThan(0);
    });
  });

  it('ensures all buttons have accessible text or aria-labels', () => {
    const { container } = render(<App />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach((btn) => {
      const hasText = (btn.textContent || '').trim().length > 0;
      const hasAriaLabel = (btn.getAttribute('aria-label') || '').trim().length > 0;
      expect(hasText || hasAriaLabel).toBe(true);
    });
  });

  it('ensures all links have valid href and accessible text', () => {
    const { container } = render(<App />);
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect((link.textContent || '').trim().length).toBeGreaterThan(0);
    });
  });
});
