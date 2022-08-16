import axios from "axios";
import { TloginPayload, TsignUpPayload } from "../components/signup/query";
const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  },
});

export const signup = async (data: TsignUpPayload) => {
  const response = await apiClient.post<any>("/users", data);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await apiClient.get<any>("/users");
  return response.data;
};

export const login = async (data: TloginPayload) => {
  const response = await apiClient.post<any>("/currentusers", data);
  return response.data;
};
