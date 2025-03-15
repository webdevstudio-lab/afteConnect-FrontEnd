export type UserType = {
  fullname: string;
  password: string;
  role: string;
  poste: string;
};

export type UpdateUserType = {
  fullname: string;
  poste: string;
  role: string;
  userId: string;
};
