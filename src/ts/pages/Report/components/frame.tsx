import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UiKitButton from 'ts/components/UiKit/components/Button';

import getLinkOnReport from '../helpers/getLinkOnReport';
import style from '../styles/frame.module.scss';

interface IReportProps {
  token?: string;
}

export default function ReportFrame({ token }: IReportProps) {
  const navigate = useNavigate();
  const { i18n } = useTranslation('home');

  if (!token) return null;
  const link = useMemo(() => getLinkOnReport(token, i18n.language), [token]);

  return (
    <>
      <div className={style.frame_buttons}>
        <UiKitButton
          mode={['second', 'full_size']}
          className={style.frame_button}
          onClick={() => {
            navigate('/');
          }}
        >
          Список отчётов
        </UiKitButton>
      </div>
      <iframe
        className={style.frame}
        data-test-id="report-frame"
        src={link}
      />
    </>
  );
}

ReportFrame.defaultProps = {
  token: undefined,
};
