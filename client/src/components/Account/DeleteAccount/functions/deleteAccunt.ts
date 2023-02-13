import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { API } from '../../../../constants';
import { AppDispatch } from '../../../../store';
import { clearInfo } from '../../../../store/userSlice';

export async function deleteAccount(
  dispatch: AppDispatch,
  navigate: NavigateFunction
) {
  try {
    await axios<string>({
      url: API + '/user',
      method: 'delete',
      withCredentials: true,
    });
    setTimeout(() => {
      dispatch(clearInfo());
    }, 300);
    navigate('/');
  } catch (err) {
    console.log(err);
  }
}
