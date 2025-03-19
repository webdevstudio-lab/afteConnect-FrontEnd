export type ClientType = {
  name: string;
  contact?: string;
  email?: string;
  address?: string;
  type: string;
  description?: string;
};

export type UpdateClientType = {
  id: string;
  name: string;
  contact?: string;
  email?: string;
  address?: string;
  type: string;
  description?: string;
};
