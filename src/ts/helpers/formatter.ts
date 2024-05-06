function getLangPrefix() {
  // @ts-ignore
  const code = window?.localization?.language || 'ru';
  return {
    ru: 'ru-RU',
    en: 'en-EN',
    zh: 'zh-ZH',
    es: 'es-ES',
    fr: 'fr-FR',
    pt: 'pt-PT',
    de: 'de-DE',
    ja: 'ja-JA',
  }[code] || 'ru-RU';
}

export function getDate(timestamp: string) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString(getLangPrefix(), { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getDateForExcel(timestamp: string) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toISOString().substring(0, 10).split('-').reverse().join('.');
}

export function getShortDate(timestamp: string) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString(getLangPrefix(), { day: 'numeric', month: 'long' });
}

export function getShortTime(timestamp: string) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });
}

export function getMoney(value: number, options?: any) {
  return (value || 0).toLocaleString(getLangPrefix(), {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
    ...(options || {}),
  });
}

export function getShortMoney(value: number, maximumFractionDigits:number = 1) {
  return getMoney(value, {
    notation: 'compact',
    maximumFractionDigits,
  });
}

export function getShortNumber(value: number) {
  if (value === Infinity || value === -Infinity) return '—';
  const fractionDigits = value < 15 ? 1 : 0;
  return (value || 0).toFixed(fractionDigits);
}

export function getShortName(name: string) {
  return name?.split(/[\s.]+/gm)[1] || name;
}
