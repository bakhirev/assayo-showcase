import React, { useLayoutEffect, useState } from 'react';

import { IPagination } from 'ts/interfaces/Pagination';

import Card from './Card';
import style from '../../styles/card.module.scss';

interface ITableViewProps {
  response?: IPagination<any>;
}

function CardsView({ response }: ITableViewProps) {
  const [width, setWidth] = useState<number>(240);

  if (!response) return null;

  useLayoutEffect(() => {
    const padding = 24;
    const bodyWidth = document.body.getBoundingClientRect().width - padding;

    let count = 1;
    if (bodyWidth > 500) count = 2;
    if (bodyWidth > 800) count = 3;
    if (bodyWidth > 1000) count = 4;
    if (bodyWidth > 1150) count = 5;

    const cardWidth = Math.floor(bodyWidth / count) - padding;
    setWidth(cardWidth);
  }, []);

  const cards = (response?.content || []).map((item: any) => (
    <Card
      key={item?.code}
      title={item?.title}
      description={item?.description}
      icon={item?.cover}
      link={`#/report/${item?.id}`}
      width={width}
    />
  ));

  return (
    <div className={style.card_wrapper}>
      {cards}
    </div>
  );
}

export default CardsView;
