import React, { Children, createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const user = useSelector((state) => state.Auth.user);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
