import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  isAuthenticated: false,
  login: ({ username, password }: { username: string; password: string }) => {
    console.log({ username, password });
  },
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const login = async ({ username, password }: { username: string; password: string }) => {
    try {
      const response = await axios.post('https://example.com/api/login', { username, password });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
