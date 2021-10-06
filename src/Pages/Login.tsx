import React from 'react';
import LoginFormContainer from '../Containers/LoginFormContainer/LoginFormContainer';

const Login: React.FC = () => {
  return (
    <section className={'layout'}>
      <h1>Войти в систему</h1>
      <LoginFormContainer />
    </section>
  );
};

export default Login;