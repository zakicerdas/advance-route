import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('isAuth') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {

    try {
      localStorage.setItem('isAuth', isAuthenticated ? 'true' : 'false');
    } catch {}
  }, [isAuthenticated]);

  const login = async ({ username, password }) => {
    await new Promise((r) => setTimeout(r, 300));
    if (username && password) {
      setIsAuthenticated(true);
      return { ok: true };
    }
    return { ok: false, error: 'Username/password tidak boleh kosong' };
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
