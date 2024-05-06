import React, { ReactNode } from 'react';

import AccessControl from 'ts/components/AccessControl';
import { USER_ROLES } from 'ts/helpers/constants';

import Header from './components/Header';
import style from './styles/body.module.scss';

interface IPageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ children }: IPageWrapperProps) {
  return (
    <>
      <AccessControl roles={[USER_ROLES.ADMIN]}>
        <Header />
      </AccessControl>
      <div className={style.body_wrapper}>
        {children}
      </div>
    </>
  );
}
