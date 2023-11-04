import React from 'react';
import { AuthGoogle } from '../beapi';

const handleLogin = async () => {
  const authGoogle: AuthGoogle = new AuthGoogle();
  authGoogle.initiate();
};

const GoogleLoginButton = () => {
  return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
