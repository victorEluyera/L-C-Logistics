import axios from "axios";
import { TloginPayload, TsignUpPayload } from "../components/signup/query";
const api = axios.create({
  baseURL: "https://l-c-logistics.vercel.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export const signup = async (data: TsignUpPayload) => {
  const response = await api.post<any>("/users", data);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get<any>("/users");
  return response.data;
};

export const login = async (data: TloginPayload) => {
  const response = await api.post<any>("/currentusers", data);
  return response.data;
};
