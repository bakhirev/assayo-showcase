import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import InputString from 'ts/components/UiKit/components/InputString';
import UiKitButton from 'ts/components/UiKit/components/Button';

import Wrapper from './Wrapper';
import authorizationStore from '../store/AuthorizationStore';

const Login = observer(() => {
  const [login, setLogin] = useState<string>('admin');
  const [password, setPassword] = useState<string>('*****');

  return (
    <Wrapper>
      <InputString
        value={login}
        placeholder="Логи"
        onChange={(value: string) => {
          setLogin(value || '');
        }}
      />
      <InputString
        value={password}
        placeholder="Пароль"
        onChange={(value: string) => {
          setPassword(value || '');
        }}
      />
      <UiKitButton
        mode={['primary', 'full_size']}
        onClick={() => {
          authorizationStore.login();
        }}
      >
        Войти
      </UiKitButton>
    </Wrapper>
  );
});

export default Login;
