import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import isMobile from 'ts/helpers/isMobile';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import style from './styles/index.module.scss';

interface IModalProps {
  id?: string,
  className?: string,
  onClose?: Function,
  children?: ReactNode;
}

function Modal({
  id,
  className,
  onClose,
  children,
}: IModalProps) {
  useEffect(() => {
    const overflowY = document.body.style.overflowY;
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = overflowY;
    };
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => (React.isValidElement(child)
    ? React.cloneElement(
      child, // @ts-ignore
      { onClose },
    ) : child));

  const customClass = isMobile
    ? style.modal_window_fullscreen
    : style.modal_window;

  return ReactDOM.createPortal((
    <div
      id={`${id}-wrapper`}
      className={`${style.modal_window_wrapper || ''}`}
      onClick={(event: any) => {
        event.stopPropagation();
        if (event.target?.id !== `${id}-wrapper`) return;
        if (onClose) onClose();
      }}
    >
      <div
        id={id}
        className={`${customClass} ${className || ''}`}
        onClick={(event: any) => {
          event.stopPropagation();
        }}
      >
        {childrenWithProps}
      </div>
    </div>
  ), document.body);
}

Modal.displayName = 'Modal';

Modal.defaultProps = {
  id: 'modal-window',
  className: '',
  onClose: undefined,
  children: undefined,
};

export {
  Modal,
  Header,
  Body,
  Footer,
};
