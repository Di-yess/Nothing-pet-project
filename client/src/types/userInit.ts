export type initState = {
  id: number | null;
  login: boolean | undefined;
  fullName: string | null;
  avatar: { link: string | null };
  phone: string | null;
  profession: string | null;
  email: string | null;
  adress: string | null;
  status: null | 'loading' | 'fulfilled' | 'rejected';
  error: null | string;
};

export type infoUser = {
  id: number;
  fullName: string;
  avatar: { link: string | null };
  phone: string | null;
  profession: string | null;
  email: string;
  adress: string | null;
};

export type allUsersType = {
  id: number;
  fullName: string;
  avatar: { link: string | null };
};

export type allUsers = {
  allUsers: allUsersType[];
  status: null | string;
  error: null | string;
};
