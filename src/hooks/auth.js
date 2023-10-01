import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate('/dashboard/profile');
  };

  const logout = async () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
