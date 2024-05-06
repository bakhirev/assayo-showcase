import React, { ReactNode } from 'react';

import style from '../styles/index.module.scss';

interface IWrapperProps {
  children: ReactNode
}

function Wrapper({ children }: IWrapperProps) {
  return (
    <div className={style.login_wrapper}>
      <div className={style.login_window}>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
