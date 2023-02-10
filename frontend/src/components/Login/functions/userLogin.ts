import axios from 'axios';
import { API } from '../../../constants';
import { setInfo, userStatus } from '../../../store/userSlice';
import { IUser } from '../../../types/Interfaces';
import { loginProps, setDataProps } from '../../../types/loginTypes';

function setData({ navigate, dispatch, data }: setDataProps) {
  dispatch(setInfo(data));
  dispatch(userStatus(true));
  navigate('/');
}

export async function userLogin(userData: loginProps) {
  const { e, fullName, email, password, check, navigate, dispatch } = userData;
  e.preventDefault();
  if (!check) {
    try {
      //fetch на логин
      const { data } = await axios<IUser>({
        url: API + '/login',
        method: 'post',
        data: { email, password },
        withCredentials: true,
      });
      setData({ navigate, dispatch, data });
    } catch (err: any) {
      console.log(err.message);
    }
  } else {
    try {
      const { data } = await axios<IUser>({
        url: API + '/register',
        method: 'post',
        data: { fullName, email, password },
        withCredentials: true,
      });
      setData({ navigate, dispatch, data });
    } catch (err) {
      console.log(err);
    }
  }
}
