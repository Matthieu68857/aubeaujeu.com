import { describe, it, expect } from 'vitest';
import { ABJ_COLORS, ABJ_SHADOWS } from './constants/theme';

describe('ABJ Official Brand Theme Tokens', () => {
  it('contains the strict official hex colors from the brand guidelines', () => {
    expect(ABJ_COLORS.primary).toBe('#88C4B9');
    expect(ABJ_COLORS.secondary).toBe('#D994B6');
    expect(ABJ_COLORS.blue).toBe('#79B4D9');
    expect(ABJ_COLORS.mauve).toBe('#CF7A86');
    expect(ABJ_COLORS.yellow).toBe('#F9CE8C');
    expect(ABJ_COLORS.cream).toBe('#F6F6F2');
    expect(ABJ_COLORS.dark).toBe('#333333');
  });

  it('contains harmonic light tints for section backgrounds and badges', () => {
    expect(ABJ_COLORS.primaryLight).toBeDefined();
    expect(ABJ_COLORS.secondaryLight).toBeDefined();
    expect(ABJ_COLORS.blueLight).toBeDefined();
    expect(ABJ_COLORS.mauveLight).toBeDefined();
    expect(ABJ_COLORS.yellowLight).toBeDefined();
  });

  it('defines custom soft colored shadow tokens for tactile components', () => {
    expect(ABJ_SHADOWS.soft).toBeDefined();
    expect(ABJ_SHADOWS.hover).toBeDefined();
    expect(ABJ_SHADOWS.yellow).toBeDefined();
    expect(ABJ_SHADOWS.blue).toBeDefined();
  });
});
