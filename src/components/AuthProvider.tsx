import React, { createContext, useState, Dispatch } from 'react';
import { LoginResponse } from 'types';

export const AuthContext = createContext<{
  authUser: LoginResponse | null;
  setAuthUser: Dispatch<React.SetStateAction<LoginResponse | null>>;
}>({
  authUser: null,
  setAuthUser: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<LoginResponse | null>(null);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
    
  )
}
