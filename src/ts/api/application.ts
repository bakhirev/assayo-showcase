import IAppSetting from 'ts/interfaces/AppSetting';

export default {
  getConfig(): Promise<IAppSetting> {
    const defaultReportUrl = window.location.hostname === 'localhost'
      ? 'http://localhost:3006/?dump=./test.txt'
      : 'https://bakhirev.github.io/demo/?lang=ru&dump=./test.txt';

    return Promise.resolve({
      showAuthorization: true,
      defaultReportUrl,
    });
  },
};
