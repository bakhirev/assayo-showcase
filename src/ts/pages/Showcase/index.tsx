import React from 'react';
import { observer } from 'mobx-react-lite';

import { IPaginationRequest } from 'ts/interfaces/Pagination';

import DataLoader from 'ts/components/DataLoader';
import Pagination from 'ts/components/DataLoader/components/Pagination';
import Title from 'ts/components/Title';
import showcaseApi from 'ts/api/showcase';
import viewSettings from 'ts/store/ViewSettings';

import ControlPanel from './components/ControlPanel';
import View from './components/View';

const Showcase = observer(() => {
  const type = viewSettings.getItem('showcase', 'lines');
  const mode: string = 'all';
  return (
    <>
      <Title title="page.showcase.title"/>
      <ControlPanel />
      <DataLoader
        to="response"
        loader={(pagination?: IPaginationRequest) => type === 'table'
          ? showcaseApi.getReportsLikeTree(pagination)
          : showcaseApi.getReportsLikeList(pagination)}
        watch={`${mode}${type}`}
      >
        <View mode={mode} />
        <Pagination />
      </DataLoader>
    </>
  );
});

export default Showcase;
