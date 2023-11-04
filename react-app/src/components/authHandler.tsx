// Example React component that might capture query parameters from the URL
// after redirection, assuming you passed a token or user data in the URL.
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    if (token) localStorage.setItem('authToken', token);
    window.location.href = '/';
  }, [location]);

  return <div>Logging in...</div>;
};

export default AuthHandler;
