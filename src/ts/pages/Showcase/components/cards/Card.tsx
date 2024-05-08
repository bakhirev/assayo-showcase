import React from 'react';
import { useTranslation } from 'react-i18next';

import style from '../../styles/card.module.scss';

interface ICardProps {
  title: string;
  description?: string;
  icon?: string;
  link?: string;
  width?: number;
}

function Card({
  title,
  description,
  icon,
  link,
  width,
}: ICardProps): React.ReactElement | null {
  const { t } = useTranslation();

  return (
    <a
      href={link}
      className={style.card_with_icon}
      style={{ width: `${width}px` }}
    >
      <h4 className={style.card_with_icon_title}>
        {t(title || '')}
      </h4>
      <figcaption className={style.card_with_icon_description}>
        {t(description || '')}
      </figcaption>
      <div
        className={style.card_with_icon_icon}
        style={{ backgroundImage: `url(${icon || '/assets/cover.png'})` }}
      />
    </a>
  );
}

Card.defaultProps = {
  description: '',
  icon: undefined,
  link: undefined,
  width: 240,
};

export default Card;
