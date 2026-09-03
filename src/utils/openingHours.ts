export interface DaySchedule {
  day: string;
  shortDay: string;
  isOpen: boolean;
  hoursText: string;
  openHour?: number;  // 0-23
  closeHour?: number; // e.g. 24 or 25 for 01:00 AM next day
}

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  { day: 'Lundi', shortDay: 'Lun', isOpen: false, hoursText: 'Fermé' },
  { day: 'Mardi', shortDay: 'Mar', isOpen: true, hoursText: '14h00 – 00h00', openHour: 14, closeHour: 24 },
  { day: 'Mercredi', shortDay: 'Mer', isOpen: true, hoursText: '14h00 – 00h00', openHour: 14, closeHour: 24 },
  { day: 'Jeudi', shortDay: 'Jeu', isOpen: true, hoursText: '14h00 – 00h00', openHour: 14, closeHour: 24 },
  { day: 'Vendredi', shortDay: 'Ven', isOpen: true, hoursText: '14h00 – 01h00', openHour: 14, closeHour: 25 },
  { day: 'Samedi', shortDay: 'Sam', isOpen: true, hoursText: '11h00 – 01h00', openHour: 11, closeHour: 25 },
  { day: 'Dimanche', shortDay: 'Dim', isOpen: true, hoursText: '14h00 – 20h00', openHour: 14, closeHour: 20 },
];

export interface OpeningStatus {
  isOpenNow: boolean;
  badgeText: string;
  detailText: string;
  currentDayName: string;
}

/**
 * Returns current status of ABJ according to Europe/Paris time
 */
export function getOpeningStatus(referenceDate: Date = new Date()): OpeningStatus {
  // Convert reference date to Europe/Paris time representation
  const parisString = referenceDate.toLocaleString('en-US', { timeZone: 'Europe/Paris' });
  const parisDate = new Date(parisString);

  // In JS: 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const dayIndex = parisDate.getDay();
  // Map dayIndex to 0 = Monday, ..., 6 = Sunday
  const scheduleIndex = (dayIndex + 6) % 7;
  const currentSchedule = WEEKLY_SCHEDULE[scheduleIndex];

  const currentHour = parisDate.getHours();
  const currentMinute = parisDate.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  let isOpenNow = false;
  let detailText = '';

  if (currentSchedule.isOpen && currentSchedule.openHour !== undefined && currentSchedule.closeHour !== undefined) {
    if (currentTimeDec >= currentSchedule.openHour && currentTimeDec < currentSchedule.closeHour) {
      isOpenNow = true;
      const closingDisplay = currentSchedule.closeHour >= 24 ? `${currentSchedule.closeHour - 24}h00` : `${currentSchedule.closeHour}h00`;
      detailText = `Ferme ce soir à ${closingDisplay}`;
    } else if (currentTimeDec < currentSchedule.openHour) {
      detailText = `Ouvre aujourd'hui à ${currentSchedule.openHour}h00`;
    } else {
      detailText = `Fermé pour la nuit`;
    }
  } else {
    detailText = 'Fermé le lundi — Réouverture mardi 14h00';
  }

  return {
    isOpenNow,
    badgeText: isOpenNow ? 'Ouvert en ce moment' : 'Fermé actuellement',
    detailText,
    currentDayName: currentSchedule.day,
  };
}
