import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../services/authService';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getSession();

    if (!session) {
      setIsAuthenticated(false);
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
