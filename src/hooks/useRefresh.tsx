import { publicAxios } from '../api/axios';
import { LoginResponse } from 'types';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const useRefresh = () => {
  const { authUser,setAuthUser } = useContext(AuthContext);
  return async () => {
    try {

      const { data } = await publicAxios.get<LoginResponse | null>(
        'auth/refresh', {withCredentials: true},
      );
      if(!data) return null

      setAuthUser(() => authUser ? data : null);
      return data.jwtAccessToken;

    } catch (err) {

      // console.error(err)
      return null;

    }
  };
};
