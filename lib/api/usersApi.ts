import API from "../axios-client";
import { UpdateUserType, UserType } from "../types/userType";
import { baseUrl } from "../utils";

//USER API CALL

export const getUserMutationFn = async () => await API.get(`${baseUrl}/user`);

export const getUserByIdMutationFn = async (id: string) => {
  const response = await API.get(`${baseUrl}/user/${id}`);
  return response.data.user.user;
};

export const resetUserMutationFn = async (id: string) => {
  console.log(id);
  const response = await API.patch(`${baseUrl}/user/reset/${id}`);
  console.log(response);
  return response;
};

export const getAllUsersMutationFn = async () => {
  const response = await API.get(`${baseUrl}/user/users/all`);
  return response.data.users.users;
};

export const updateUserMutationFn = async (data: UpdateUserType) => {
  const response = await API.patch(
    `${baseUrl}/user/update/${data.userId}`,
    data
  );
  console.log(response);
  return response;
};

export const deleteUserMutationFn = async (id: string) =>
  await API.delete(`${baseUrl}/user/${id}`);
