import { Navigate } from 'react-router-dom';
import { useAuth } from 'core/context';
import Admin from 'core/presentation/layout';

export function AppRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Admin /> : <Navigate to="/login" />;
}
