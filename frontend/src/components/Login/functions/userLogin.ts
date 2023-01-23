import axios from 'axios';
import { setInfo, userStatus } from '../../../store/userSlice';
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
      const response = await axios.post('/login', { email, password });
      const { data } = response;
      console.log(data);
      setData({ navigate, dispatch, data });
    } catch (err: any) {
      console.log(err.message);
    }
  } else {
    try {
      // fetch на new account
      const response = await axios.post('/register', {
        fullName,
        email,
        password,
      });
      const { data } = response;
      setData({ navigate, dispatch, data });
    } catch (err) {
      console.log(err);
    }
  }
}
