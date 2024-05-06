import { IPaginationRequest } from 'ts/interfaces/Pagination';

import getFakeLoader from 'ts/components/DataLoader/helpers/formatter';

const r = (list: any[], index: number) => list[index % list.length];

const MOCK_DATA = (new Array(20)).fill(1).map((v: any, i: number) => {
  const id = i + 1;
  return {
    id,
    code: `some_${id}`,
    title: [
      `${r(['MCC', 'MNC', 'ITSM', 'INC'], i)}`,
      'отчёт по',
      `${r(['Frontend', 'Backend', 'QA', 'DevOps'], i)}`,
    ].join(' '),
    cover: `./assets/${r(['cover1', 'cover2', 'cover3'], i)}.jpg`,
    description: 'Некий текст тут написан и написан для длины текста',
  };
});

export default {
  getReports(pagination?: IPaginationRequest) {
    return getFakeLoader({
      content: MOCK_DATA, pagination,
    });
  },

  getTokenForLog(id: string | number): Promise<any> {
    const report = MOCK_DATA.find((item: any) => `${item.id}` === `${id}`);
    return Promise.resolve(report?.code);
  },
};
