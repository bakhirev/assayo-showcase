import React from 'react';

import UiKitButton from 'ts/components/UiKit/components/Button';

import style from '../../styles/line.module.scss';

interface ILineProps {
  item: any;
  openedIds: any[];
  setOpenedIds: Function;
}

function Line({
  item,
  openedIds,
  setOpenedIds,
}: ILineProps): React.ReactElement | null {
  const padding = 24;
  const level = (item?.path || '').split('.').length;
  const gap = level > 1 ? ((level - 1) * padding) : 0;
  const visibility = item.hasChildren ? 'visible' : 'hidden';
  const link = `#/report/${item?.id}`;

  return (
    <div className={style.showcase_line}>
      <div
        className={style.showcase_line_gap}
        style={{ width: `${gap}px` }}
      />
      <img
        src="./assets/menu/arrow_right.svg"
        className={style.showcase_line_open}
        style={{ visibility }}
        onClick={() => {
          const newIds = openedIds.includes(item?.id)
            ? openedIds.filter((id: any) => id !== item?.id)
            : [...openedIds, item?.id];
          setOpenedIds(newIds);
        }}
      />

      {item?.hasChildren ? (
        <span className={style.showcase_line_title}>
          {item?.title || '_'}
        </span>
      ) : (
        <a
          href={link}
          className={`${style.showcase_line_title} ${style.showcase_line_title_link}`}
        >
          {item?.title || '_'}
        </a>
      )}

      {!item?.hasChildren && (
        <div  className={style.showcase_line_buttons}>
          <UiKitButton
            mode={['slim']}
            className={style.showcase_line_button}
            onClick={() => {
              window.location.hash = link;
            }}
          >
            Открыть
          </UiKitButton>
        </div>
      )}
    </div>
  );
}

Line.defaultProps = {};

export default Line;
