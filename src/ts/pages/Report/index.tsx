import React from 'react';
import { useParams } from 'react-router-dom';

import DataLoader from 'ts/components/DataLoader';
import showcaseApi from 'ts/api/showcase';

import ReportFrame from './components/frame';

export default function Report() {
  const { reportId } = useParams<any>();

  if (!reportId) return null;

  return (
    <DataLoader
      to="token"
      loader={() => showcaseApi.getTokenForLog(reportId)}
      watch={reportId}
    >
      <ReportFrame />
    </DataLoader>
  );
}
