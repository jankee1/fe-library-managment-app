import axios from "axios";

const URL = "http://localhost:3001"

export const axiosPublic =  axios.create({
  baseURL: URL,
});

export const axiosPrivate =  axios.create({
  baseURL: URL,
  withCredentials: true
});