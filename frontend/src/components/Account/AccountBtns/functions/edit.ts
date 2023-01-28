import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../../../store';
import { clearInfo } from '../../../../store/userSlice';
import { initState } from '../../../../types/userInit';

export async function edit(e: any, user: initState) {
  const imgFile = document.querySelector<HTMLInputElement>('#inputImg');

  if (e.target.innerText === 'Edit') {
    // enable
    document
      .querySelectorAll<HTMLInputElement>('.infoInput')
      .forEach((infoInput) => {
        infoInput.disabled = false;
      });
    if (imgFile) {
      imgFile.disabled = false;
      imgFile.classList.toggle('cursor');
    }
    e.target.innerText = 'Accept';
  } else {
    const { fullName, email, phone, profession, adress } = user;
    try {
      const formData = new FormData();
      formData.append(
        'data',
        JSON.stringify({ fullName, email, phone, adress, profession })
      );
      if (imgFile?.files) {
        if (imgFile.files[0]) {
          formData.append('avatar', imgFile.files[0], imgFile.name);
        }
      }
      await axios.put('/user', formData);
      document
        .querySelectorAll<HTMLInputElement>('.infoInput')
        .forEach((infoInput) => {
          infoInput.disabled = true;
        });
      if (imgFile) {
        imgFile.disabled = true;
        imgFile.classList.toggle('cursor');
      }
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
    await axios.get('/logout');
    setTimeout(() => {
      dispatch(clearInfo());
    }, 300);
    console.log('logout here');
    navigate('/feedback');
  } catch (err) {
    console.log('Logout error');
    console.log(err);
  }
}
