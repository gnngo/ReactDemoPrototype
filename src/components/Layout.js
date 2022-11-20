import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <Button onClick={() => navigate('/')}>Home</Button>
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Restaurateur</Button>
        ) : (
          <Button onClick={() => logOut()}>Logout</Button>
        )}
        <Button onClick={() => navigate('/')}>Customer</Button>
      </nav>
      <Outlet />
    </>
  );
}