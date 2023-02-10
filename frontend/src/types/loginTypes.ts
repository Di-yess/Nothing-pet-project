import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../store';
import { IUser } from './Interfaces';

export interface loginProps {
  fullName: string;
  email: string;
  password: string;
  check: boolean;
  navigate: NavigateFunction;
  e: React.FormEvent<HTMLFormElement>;
  dispatch: AppDispatch;
}

export interface setDataProps {
  navigate: NavigateFunction;
  dispatch: AppDispatch;
  data: IUser;
}
