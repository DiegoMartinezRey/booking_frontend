import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verify();
  }, []);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("name", user.name);
    localStorage.setItem("surname", user.surname);
    localStorage.setItem("role", user.role);
  };

  const verify = () => {
    try {
      const storedToken = localStorage.getItem("token");
      const storedName = localStorage.getItem("name");
      const storedSurname = localStorage.getItem("surname");
      const storedRole = localStorage.getItem("role");
      if (storedToken) {
        const decodedToken = jwtDecode(storedToken);
        setUser({
          token: storedToken,
          name: storedName,
          surname: storedSurname,
          role: storedRole,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, verify, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
