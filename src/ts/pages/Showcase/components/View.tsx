import React from 'react';
import { observer } from 'mobx-react-lite';

import { IPagination } from 'ts/interfaces/Pagination';
import PageWrapper from 'ts/components/Page/wrapper';
import viewSettings from 'ts/store/ViewSettings';

import CardsView from './CardsView';
import TableView from './TableView';

interface IViewProps {
  mode?: string;
  response?: IPagination<any>;
  updateSort?: Function;
}

export default observer(({ response, mode }: IViewProps) => {
  const type = viewSettings.getItem('showcase', 'cards');

  if (!response?.content) return null;
  console.log(mode);

  if (type === 'cards') {
    return (
      <CardsView response={response} />
    );
  }

  return (
    <PageWrapper template="table">
      <TableView response={response} />
    </PageWrapper>
  );
});
