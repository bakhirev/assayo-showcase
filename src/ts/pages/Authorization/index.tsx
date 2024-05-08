import React from 'react';
import { observer } from 'mobx-react-lite';

import appSettingsStore from 'ts/store/ApplicationSettings';

import authorizationStore from './store/AuthorizationStore';
import Success from './components/Success';
import Loading from './components/Loading';
import Login from './components/Login';

const Authorization = observer(() => {
  const { state, isInitialization } = authorizationStore;
  const showAuthorization = appSettingsStore.settings?.showAuthorization;

  if (state === 'SUCCESS' || !showAuthorization) return (<Success/>);
  if (isInitialization) return null;

  return state === 'LOGIN'
    ? (<Login />)
    : (<Loading />);
});

export default Authorization;
