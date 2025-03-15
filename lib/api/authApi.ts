import API from "../axios-client";
import { LoginType, RegisterType, activationType } from "../types/authType";
import { baseUrl } from "../utils";

//AUTH API CALL

export const registerMutationFn = async (data: RegisterType) =>
  await API.post(`${baseUrl}/auth/register`, data);

export const loginMutationFn = async (data: LoginType) =>
  await API.post(`${baseUrl}/auth/login`, data);

export const activationMutationFn = async (data: activationType) => {
  const response = await API.patch(`${baseUrl}/auth/activation`, data);
  return response;
};

export const logoutMutationFn = async () =>
  await API.get(`${baseUrl}/auth/logout`);
