import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Confirm from 'ts/components/ModalWindow/Confirm';

import PageWrapper from '../../PageWrapper/index';
import Showcase from '../../Showcase/index';
import Report from '../../Report/index';

function Success(): React.ReactElement {
  return (
    <>
      <Confirm />
      <Routes>
        <Route
          path="/report/:reportId"
          element={(
            <Report />
          )}
        />
        <Route
          path="/reports"
          element={(
            <PageWrapper>
              <Showcase />
            </PageWrapper>
          )}
        />
        <Route
          path="*"
          element={(
            <PageWrapper>
              <Showcase />
            </PageWrapper>
          )}
        />
      </Routes>
    </>
  );
}

export default Success;
