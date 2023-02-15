import { NavigateFunction } from 'react-router-dom';

export interface loginProps {
  fullName: string;
  email: string;
  password: string;
  check: boolean;
  navigate: NavigateFunction;
}
