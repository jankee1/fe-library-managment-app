import axios from "axios";

const URL = "http://localhost:3001"

export const publicAxios =  axios.create({
  baseURL: URL,
});

export const privateAxios =  axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});