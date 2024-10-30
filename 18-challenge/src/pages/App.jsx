import '../App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import { Dashboard, Home } from './index';
import { Login, Header, Logout } from '../components/index';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/login') {
      localStorage.setItem('lastVisited', location.pathname);
    }
  }, [location]);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PublicRoute path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;