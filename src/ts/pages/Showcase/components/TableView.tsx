import React from 'react';

import { IPagination } from 'ts/interfaces/Pagination';

import Table from 'ts/components/Table';
import Column from 'ts/components/Table/components/Column';
import { ColumnTypesEnum } from 'ts/components/Table/interfaces/Column';

interface ITableViewProps {
  response?: IPagination<any>;
  updateSort?: Function;
}

function TableView({ response, updateSort }: ITableViewProps) {
  if (!response) return null;

  return (
    <Table
      rows={response.content}
      updateSort={updateSort}
    >
      <Column
        template={ColumnTypesEnum.STRING}
        title="page.showcase.table.code"
        properties="code"
        width={150}
      />
      <Column
        template={ColumnTypesEnum.STRING}
        title="page.showcase.table.title"
        properties="title"
        width={250}
      />
      <Column
        template={ColumnTypesEnum.STRING}
        title="page.showcase.table.description"
        properties="description"
      />
    </Table>
  );
}

export default TableView;
