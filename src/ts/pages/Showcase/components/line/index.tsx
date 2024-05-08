import React, { useState } from 'react';

import { IPagination } from 'ts/interfaces/Pagination';

import Line from './Line';
import style from '../../styles/line.module.scss';

function getVisibleTree(
  order: any[],
  all: any[],
  openedIds: any[], // @ts-ignore
  visible?: any[] = [], // @ts-ignore
  pathPrefix?: string = '',
) {
  order.forEach((parent: any) => {
    parent.path = pathPrefix ? `${pathPrefix}.${parent.id}` : `${parent.id}`;
    const children = all.filter((item: any) => item?.parentId === parent?.id);
    parent.hasChildren = !!children.length;
    visible.push(parent);

    if (!openedIds.includes(parent?.id)) return;
    if (parent.hasChildren) getVisibleTree(children, all, openedIds, visible, parent.path);
  });
  return visible;
}

interface ITableViewProps {
  response?: IPagination<any>;
}

function CardsView({ response }: ITableViewProps) {
  const list = response?.content || [];
  const [openedIds, setOpenedIds] = useState<Array<number | string>>([]);

  if (!list.length) return null;

  const firstLevel = list.filter((item: any) => !item?.parentId);
  const visibleList = getVisibleTree(firstLevel, list, openedIds);
  console.dir(visibleList);

  const cards = visibleList.map((item: any) => (
    <Line
      key={item?.code}
      item={item}
      openedIds={openedIds}
      setOpenedIds={setOpenedIds}
    />
  ));

  return (
    <div className={style.showcase_line_wrapper}>
      {cards}
    </div>
  );
}

export default CardsView;
