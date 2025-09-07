import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  return children;
}