import React from 'react';
import { useAuth } from '../context/authContext';
import Logout from './Logout';

const Header = () => {
  const { state } = useAuth();

  return (
    <header>
      {state.isAuthenticated && <p>Welcome, {state.user.username}</p>}
      {state.isAuthenticated && <Logout />}
    </header>
  );
};

export default Header;