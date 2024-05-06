import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import viewSettings from 'ts/store/ViewSettings';
import isMobile from 'ts/helpers/isMobile';

import style from '../styles/controlPanel.module.scss';

export default observer(() => {
  const { t } = useTranslation();
  const type = viewSettings.getItem('showcase', 'cards');

  const icon = {
    table: './assets/icons/Cards.svg',
    cards: './assets/icons/Table.svg',
  }[type];

  const title = {
    table: t('common.viewType.cards'),
    cards: t('common.viewType.table'),
  }[type];

  return (
    <div className={style.control_panel}>
      <div className={style.control_panel_buttons}>
        {!isMobile && (
          <img
            title={title}
            src={icon}
            className={style.control_panel_icon}
            onClick={() => {
              const newType = type === 'table' ? 'cards' : 'table';
              viewSettings.setItem('showcase', newType, 'cards');
            }}
          />
        )}
      </div>
    </div>
  );
});
