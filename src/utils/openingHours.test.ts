import { describe, it, expect } from 'vitest';
import { getOpeningStatus, WEEKLY_SCHEDULE } from './openingHours';

describe('Opening Hours Utility', () => {
  it('defines schedule for every day of the week', () => {
    expect(WEEKLY_SCHEDULE).toBeDefined();
    expect(WEEKLY_SCHEDULE.length).toBe(7);
    expect(WEEKLY_SCHEDULE[0].day).toBe('Lundi');
    expect(WEEKLY_SCHEDULE[0].isOpen).toBe(false);
  });

  it('correctly identifies when bar is open during active hours', () => {
    // Wednesday at 16:30 Paris time
    const wednesdayAfternoon = new Date('2026-09-02T16:30:00+02:00');
    const status = getOpeningStatus(wednesdayAfternoon);
    expect(status.isOpenNow).toBe(true);
    expect(status.badgeText).toMatch(/Ouvert/i);
  });

  it('correctly identifies when bar is closed at night', () => {
    // Wednesday at 03:00 Paris time
    const wednesdayNight = new Date('2026-09-02T03:00:00+02:00');
    const status = getOpeningStatus(wednesdayNight);
    expect(status.isOpenNow).toBe(false);
    expect(status.badgeText).toMatch(/Fermé/i);
  });

  it('identifies Monday as closed all day', () => {
    // Monday at 15:00 Paris time
    const mondayDay = new Date('2026-08-31T15:00:00+02:00');
    const status = getOpeningStatus(mondayDay);
    expect(status.isOpenNow).toBe(false);
    expect(status.badgeText).toMatch(/Fermé/i);
  });
});
