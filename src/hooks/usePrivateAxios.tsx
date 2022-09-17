import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useContext } from 'react';
import { privateAxios } from '../api/axios';
import { AuthContext } from '../context/AuthProvider';
import { useRefresh } from './useRefresh';

interface AxiosRequestRetry extends AxiosRequestConfig {
  retry?: boolean;
}

export const usePrivateAxios = () => {
  const refresh = useRefresh();
  const { authUser } = useContext(AuthContext);

  privateAxios.interceptors.request.use(
    request => {
        if (authUser) {
          if (request.headers && !request?.headers?.authorization) 
            request.headers.authorization = `Bearer ${authUser.jwtAccessToken}`;
          return request;
        }
    },
    error => Promise.reject(error)
  )

  privateAxios.interceptors.response.use(
    response => response,
    async (err: Error | AxiosError) => { 
      if (axios.isAxiosError(err)) {
        const prevReq = err.config as AxiosRequestRetry;
        if ((err.response?.status === 401 || err.response?.status === 403) && !prevReq.retry) {
          prevReq.retry = true;
          const newAccessToken = await refresh();
          
          if (prevReq.headers && newAccessToken) 
            prevReq.headers.authorization = `Bearer ${newAccessToken}`;
          
          return privateAxios(prevReq); 
        }
      }
      return Promise.reject(err);
    })

  return privateAxios
}
