import { NoInfer } from 'react-redux';

export type initState = {
  login: boolean | undefined;
  fullName: string | null;
  img: string | null;
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
  img: string | null;
  phone: string | null;
  profession: string | null;
  email: string;
  adress: string | null;
};
