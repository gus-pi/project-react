import api from '@/api';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthContext provider');
  }

  return authContext;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get('/api/me');
        setToken(response.data.accessToken);
      } catch {
        setToken(null);
      }
    };

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
