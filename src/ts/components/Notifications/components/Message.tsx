import React from 'react';

import IMessage from '../interfaces/Message';
import style from '../styles/index.module.scss';

interface ICardProps {
  message: IMessage,
}

function Card({ message }: ICardProps) {
  const className = {
    error: style.notifications_item_error,
    warning: style.notifications_item_warning,
    success: style.notifications_item_success,
    info: style.notifications_item_info,
  }[message.type || 'success'] || style.notifications_item_info;

  return (
    <div className={`${style.notifications_item} ${className}`}>
      {message.title && (
        <h6 className={style.notifications_item_title}>
          {message.title}
        </h6>
      )}
      {message.description && (
        <p className={style.notifications_item_description}>
          {message.description}
        </p>
      )}
    </div>
  );
}

export default Card;
