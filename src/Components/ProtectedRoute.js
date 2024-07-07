import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const ProtectedRoute = ({ element: Component }) => {
  const { auth } = useContext(UserContext);
  const isAuthenticated = !!auth.email; // Changed from auth.email to auth.token
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
