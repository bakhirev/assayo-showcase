import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import localization from 'ts/helpers/Localization';
import de from 'ts/translations/de';
import en from 'ts/translations/en';
import es from 'ts/translations/es';
import fr from 'ts/translations/fr';
import ja from 'ts/translations/ja';
import pt from 'ts/translations/pt';
import ru from 'ts/translations/ru';
import zh from 'ts/translations/zh';

import initializationI18n from 'ts/helpers/i18n';

import IAppSetting from 'ts/interfaces/AppSetting';
import Notifications from 'ts/components/Notifications';
import applicationSettingsStore from 'ts/store/ApplicationSettings';
import Authorization from 'ts/pages/Authorization';
import applyUrlCommands from 'ts/helpers/RPC';
import applicationApi from 'ts/api/application';

import './styles/index.scss';

// eslint-disable-next-line
// @ts-ignore
if (module.hot) {
  // eslint-disable-next-line
  // @ts-ignore
  module.hot.accept();
}

localization.parse('de', de);
localization.parse('en', en);
localization.parse('es', es);
localization.parse('fr', fr);
localization.parse('ja', ja);
localization.parse('pt', pt);
localization.parse('ru', ru);
localization.parse('zh', zh);

function renderReactApplication() {
  render(
    <React.StrictMode>
      <HashRouter>
        <Authorization/>
        <Notifications/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

applicationApi.getConfig().then((config: IAppSetting) => {
  applicationSettingsStore.setSettings(config);
  applyUrlCommands((parameters: any) => {
    initializationI18n(parameters.lang || parameters.language);
    renderReactApplication();
  });
});
