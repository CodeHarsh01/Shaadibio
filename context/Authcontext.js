"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { account } from "@/lib/appwrite";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check logged in user
  const getUser = async () => {
    try {
      const res = await account.get();
      setUser(res);
    } catch (error) {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  // login
  const login = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
    await getUser();
  };

  // signup
  const signup = async (email, password, name) => {
    await account.create("unique()", email, password, name);
    await login(email, password);
  };

  // logout
  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  // forgot password
  const forgotPassword = async (email) => {
    await account.createRecovery(
      email,
      "http://localhost:3000/reset-password"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);