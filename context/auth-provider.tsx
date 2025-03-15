"use client";

import useAuth from "@/hooks/use-auth";
import React, { createContext, useContext } from "react";

type UserType = {
  fullname: string;
  email: string;
  isActive: boolean;
  role: string;
  poste: string;
};

type AuthContextType = {
  user?: UserType;
  error: any;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading, isFetching, refetch } = useAuth();
  const user = data?.data?.user.user;

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, isFetching, refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const conext = useContext(AuthContext);
  if (!conext) {
    throw new Error("useAuthContext doit être utilisé dans un AuthProvider");
  }
  return conext;
};
