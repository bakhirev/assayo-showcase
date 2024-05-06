import {
  action,
  makeAutoObservable,
  observable,
} from 'mobx';

class AuthorizationStore {
  state: string = 'WAITING';

  user: any = {};

  isInitialization: boolean = true;

  constructor() {
    makeAutoObservable(this, {
      state: observable,
      isInitialization: observable,
      getTokens: action,
    });

    this.getTokens();
  }

  getTokens() {
    Promise.resolve().then(() => {
      this.state = 'LOGIN';
      this.isInitialization = false;
    });
  }

  login() {
    if (this.state === 'LOADING') return;
    this.state = 'LOADING';
    setTimeout(() => {
      this.state = 'SUCCESS';
    }, 1000);
  }
}

const authorizationStore = new AuthorizationStore();

export default authorizationStore;
