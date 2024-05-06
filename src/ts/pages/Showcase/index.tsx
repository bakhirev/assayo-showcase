import React from 'react';

import { IPaginationRequest } from 'ts/interfaces/Pagination';

import DataLoader from 'ts/components/DataLoader';
import Pagination from 'ts/components/DataLoader/components/Pagination';
import Title from 'ts/components/Title';
import showcaseApi from 'ts/api/showcase';

import ControlPanel from './components/ControlPanel';
import View from './components/View';

export default function Showcase() {
  const mode: string = 'all';
  return (
    <>
      <Title title="page.showcase.title"/>
      <ControlPanel />
      <DataLoader
        to="response"
        loader={(pagination?: IPaginationRequest) => showcaseApi.getReports(pagination)}
        watch={mode}
      >
        <View mode={mode} />
        <Pagination />
      </DataLoader>
    </>
  );
}
