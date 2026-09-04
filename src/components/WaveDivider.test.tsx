import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WaveDivider } from './WaveDivider';
import { ABJ_COLORS } from '../constants/theme';

describe('WaveDivider Component', () => {
  it('renders a decorative SVG wave with aria-hidden="true"', () => {
    const { container } = render(<WaveDivider color={ABJ_COLORS.primary} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies the passed fill color to the wave path', () => {
    const { container } = render(<WaveDivider color={ABJ_COLORS.yellow} />);
    const path = container.querySelector('path');
    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute('fill', ABJ_COLORS.yellow);
  });

  it('supports inverted orientation for transition tops', () => {
    const { container } = render(<WaveDivider color={ABJ_COLORS.blue} inverted />);
    const div = container.firstElementChild;
    expect(div).toHaveClass('rotate-180');
  });

  it('supports different wave variants', () => {
    const { container: gentle } = render(<WaveDivider color={ABJ_COLORS.cream} variant="gentle" />);
    const { container: double } = render(<WaveDivider color={ABJ_COLORS.cream} variant="double" />);
    
    const pathGentle = gentle.querySelector('path')?.getAttribute('d');
    const pathDouble = double.querySelector('path')?.getAttribute('d');
    expect(pathGentle).not.toBe(pathDouble);
  });
});
