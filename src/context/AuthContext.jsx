import { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    if (email === 'admin@empresa.com' && password === 'admin') {
      setIsAuthenticated(true);
      toast.success('Inicio de sesión exitoso');
      return true;
    }
    toast.error('Credenciales incorrectas');
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    toast.info('Sesión cerrada');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
