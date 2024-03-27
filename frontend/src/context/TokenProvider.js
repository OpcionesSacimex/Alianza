import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const TokenProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {
    token:false
  })
  const navigate = useNavigate();

  const login = async (data) => {
    setAuth(data)
    try {
      navigate("/cliente/dashboard", { replace: true });
    }
    catch (error) {
     
    }

  }

  const logout = async () => {
    setAuth({
      token:false
    })
    try {
      navigate("/login", { replace: true });
    } catch (error) {
     
    }
    
  }

  const value = useMemo(
    () => ({
      auth,
      setAuth,
      login,
      logout,
    }),
    [auth]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
