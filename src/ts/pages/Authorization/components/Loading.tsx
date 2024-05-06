import React from 'react';
import { observer } from 'mobx-react-lite';

import Loading from 'ts/components/Loading';
import Wrapper from './Wrapper';

const LoadingPage = observer(() => {
  return (
    <Wrapper>
      <Loading/>
    </Wrapper>
  );
});

export default LoadingPage;
