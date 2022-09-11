import React, { createContext, useState, Dispatch } from 'react';

export const AuthContext = createContext<{
  jwtAccessToken: string | null;
  setJwtAccessToken: Dispatch<React.SetStateAction<string | null>>;
}>({
  jwtAccessToken: null,
  setJwtAccessToken: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [jwtAccessToken, setJwtAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ jwtAccessToken, setJwtAccessToken }}>
      {children}
    </AuthContext.Provider>
    
  )
}
