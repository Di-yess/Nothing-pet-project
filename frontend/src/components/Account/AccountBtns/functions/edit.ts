import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../../../store';
import { clearInfo } from '../../../../store/userSlice';
import { initState } from '../../../../types/userInit';

export async function edit(e: any, user: initState) {
  if (e.target.innerText === 'Edit') {
    // enable
    document
      .querySelectorAll<HTMLInputElement>('.infoInput')
      .forEach((infoInput) => {
        infoInput.disabled = false;
      });
    e.target.innerText = 'Accept';
  } else {
    const { fullName, email, phone, profession, adress } = user;
    try {
      await axios.put('/user', {
        fullName,
        email,
        phone,
        profession,
        adress,
      });
      // disable
      document
        .querySelectorAll<HTMLInputElement>('.infoInput')
        .forEach((infoInput) => {
          infoInput.disabled = true;
        });
      e.target.innerText = 'Edit';
    } catch (err) {
      console.log(err);
    }
  }
}

export async function logout(
  dispatch: AppDispatch,
  navigate: NavigateFunction
) {
  try {
    await axios.get('/user/logout');
    setTimeout(() => {
      dispatch(clearInfo());
    }, 300);
    navigate('/');
  } catch (err) {
    console.log(err);
  }
}
