import API from "../axios-client";
import { ClientType, UpdateClientType } from "../types/clientType";
import { baseUrl } from "../utils";

//USER API CALL

export const createClientMutationFn = async (data: ClientType) =>
  await API.post(`${baseUrl}/clients/new`, data);

export const getOneClientMutationFn = async (id: string) =>
  await API.get(`${baseUrl}/clients/${id}`);

export const getAllClientMutationFn = async () =>
  await API.get(`${baseUrl}/clients/clients/all`);

export const updateClientMutationFn = async (data: UpdateClientType) =>
  await API.patch(`${baseUrl}/clients/update/${data.id}`, data);

export const deleteClientMutationFn = async (id: string) =>
  await API.delete(`${baseUrl}/clients/delete/${id}`);
