import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/LoginPage"; // Add this import

function AuthControl() {
  const { user } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <div>
      <Login />
      <button disabled={isAuthenticated}>Register</button>
      <button disabled={isAuthenticated}>Login</button>
    </div>
  );
}

export default AuthControl;
