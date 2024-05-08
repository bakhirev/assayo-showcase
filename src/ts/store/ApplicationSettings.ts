import { observable, action, makeObservable } from 'mobx';

import IAppSetting from 'ts/interfaces/AppSetting';

class ApplicationSettingsStore {
  settings: IAppSetting = {};

  constructor() {
    makeObservable(this, {
      settings: observable,
      setSettings: action,
    });
  }

  setSettings(config: IAppSetting) {
    this.settings = config;
  }
}

const applicationSettingsStore = new ApplicationSettingsStore();

export default applicationSettingsStore;
