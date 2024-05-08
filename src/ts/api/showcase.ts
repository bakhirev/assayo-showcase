import { IPaginationRequest } from 'ts/interfaces/Pagination';

import getFakeLoader from 'ts/components/DataLoader/helpers/formatter';

const r = (list: any[], index: number) => list[index % list.length];
let nextId: number = 1;

function getItem(title: string, parentId: number = 0) {
  const id = nextId++;
  return {
    id,
    code: `some_${id}`,
    title,
    cover: `./assets/${r(['cover1', 'cover2', 'cover3'], nextId)}.jpg`,
    description: 'Некий текст тут написан и написан для длины текста',
    parentId,
  };
}

function getTree() {
  const nodes: any = [];
  const parents: any = [];
  [
    'Департамент B2B проектов',
    '  Отдел ERP системы «МорФлот план»',
    '  Отдел CRM системы «Лёгкие продажи»',
    '  Отдел CRM системы «IT-студия»',
    '  Отдел системы IP телефонии «АТС Хабаровск»',
    '  Отдел системы IP телефонии «АТС Пенза»',
    '  Отдел системы документации «Диплодок»',
    '  Отдел системы внешнего тестирования «QA Riza»',
    'Департамент B2C проектов',
    '  Подразделение GameDev проектов',
    '    Отдел игры «Azimut War»',
    '    Отдел игры «Love City»',
    '    Отдел игры «Bubble smart»',
    '    Отдел игры «Line 3D»',
    '  Подразделение SmartTV проектов',
    '    Отдел онлайн-кинотеатра «Кино 4+2»',
    '    Отдел тотализатора «NBA+»',
    '  Подразделение MobileApps проектов',
    '    Отдел приложения личных финансов «Копилочка»',
    '    Отдел приложения для бьюти-мастеров «Ноготочки Мск»',
    '    Отдел приложения для бьюти-мастеров «Ноготочки Екб»',
    'Департамент технической поддержки',
    '  Отдел поддержка системы «1С.Продажи»',
    '  Отдел поддержка системы «1С.Склад»',
    '  Отдел поддержка системы «Jira»',
    'Департамент внутренних проектов',
    'Департамент аудита и информационной безопастности',
    '  Отдел внутреннего аудита',
    '  Отдел внешнего аудита',
    '  Отдел информационной безопастности',
    'Департамент стратегического планирования',
    '  Отдел анализа внешних рынков (Азия)',
    '  Отдел анализа внешних рынков (Африка)',
    '  Отдел анализа внутреннего рынка (СНГ)',
  ].forEach((text) => {
    const level = text.match(/\s\s/gm)?.length || 0;
    const parentId = parents[level - 1] || 0;
    const node = getItem(text.trim(), parentId);
    parents[level] = node.id;
    nodes.push(node);
    if (text.match(/Отдел/gm)) {
      nodes.push(getItem('Frontend команда', node.id));
      nodes.push(getItem('Backend команда', node.id));
      nodes.push(getItem('QA команда', node.id));
      nodes.push(getItem('DevOps команда', node.id));
    }
  });
  return nodes;
}

const MOCK_TREE = getTree();
const MOCK_LIST = [
  getItem('Frontend команда'),
  getItem('Backend команда'),
  getItem('QA команда'),
  getItem('DevOps команда'),
];

export default {
  getReportsLikeTree(pagination?: IPaginationRequest) {
    return getFakeLoader({
      content: MOCK_TREE, pagination: { ...pagination, size: 2000 },
    });
  },
  getReportsLikeList(pagination?: IPaginationRequest) {
    return getFakeLoader({
      content: MOCK_LIST, pagination,
    });
  },

  getTokenForLog(id: string | number): Promise<any> {
    const report = MOCK_TREE.find((item: any) => `${item.id}` === `${id}`);
    return Promise.resolve(report?.code);
  },
};
