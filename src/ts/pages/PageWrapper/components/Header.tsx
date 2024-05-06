import React, { useState } from 'react';

import UiKitSwitch from 'ts/components/UiKit/components/Switch';
import style from '../styles/header.module.scss';

const MENU = [
  { id: 1, title: 'Витрина' },
  { id: 2, title: 'Репозитории' },
  { id: 3, title: 'Отчёты' },
];

function Header() {
  const [page, setPage] = useState<number[]>([1]);
  return (
    <div className={style.header}>
      <div className={style.header_logo} />

      <UiKitSwitch
        className={style.header_navigation}
        value={page}
        options={MENU}
        onChange={(currency: number[]) => {
          setPage(currency);
        }}
      />
    </div>
  );
}

export default Header;
