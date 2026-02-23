import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ================== Types ================== */

export interface User {
  name: string;
  email: string;
  avatarUrl?: string | null;
  mobile_number: string;
  birthdate?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: { token: string; user: User }) => void;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

/* ================== Context ================== */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ================== Provider ================== */

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Failed to parse stored user:", err);
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (data: { token: string; user: User }) => {
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setUser(data.user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* ================== Hook ================== */

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};