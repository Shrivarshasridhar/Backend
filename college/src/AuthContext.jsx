import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded credentials (admin/password123 for testing)
  const validUsername = "admin";
  const validPassword = "password123";

  const login = (username, password) => {
    // Check if username and password match the hardcoded values
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true); // Login success
      return true;
    } else {
      setIsAuthenticated(false); // Login failure
      return false;
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
