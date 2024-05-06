export default function getLinkOnReport(
  token: string,
  language?: string,
): string {
  if (Math.random()) return 'https://assayo.online/demo/?lang=ru&dump=./test.txt';

  const baseUrl = `${location.origin}${location.pathname}`;
  const prefix = baseUrl[baseUrl.length - 1] === '/' ? '' : '/';
  const url = `${baseUrl}${prefix}`;

  const parameters = Object
    .entries({
      dump: `${url}services/v1/logs/${token}`,
      lang: language || 'ru',
    })
    .map(([key, value]: string[]) => `${key}=${value}`)
    .join('&');


  return `${url}demo/?${parameters}`;
}
