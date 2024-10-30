import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const { dispatch } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { username } });
    const lastVisited = localStorage.getItem('lastVisited');
    history.push(lastVisited || '/');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;