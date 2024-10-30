import React from 'react';
import { useAuth } from '../context/authContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const { dispatch } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;