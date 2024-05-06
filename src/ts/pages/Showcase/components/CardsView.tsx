import React from 'react';

import { IPagination } from 'ts/interfaces/Pagination';

import Card from './Card';
import style from '../styles/card.module.scss';

interface ITableViewProps {
  response?: IPagination<any>;
}

function CardsView({ response }: ITableViewProps) {
  if (!response) return null;

  const cards = (response?.content || []).map((item: any) => (
    <Card
      key={item?.code}
      title={item?.title}
      description={item?.description}
      icon={item?.cover}
      link={`#/report/${item?.id}`}
    />
  ));

  return (
    <div className={style.card_wrapper}>
      {cards}
    </div>
  );
}

export default CardsView;
