import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { API } from '../../../../constants';
import { AppDispatch } from '../../../../store';
import { clearChosenChat } from '../../../../store/chatSlice';
import { clearChats } from '../../../../store/chatsSlice';
import { changeAvatar, clearInfo } from '../../../../store/userSlice';
import { IUpdateUser } from '../../../../types/Interfaces';
import { initState } from '../../../../types/userInit';

export async function edit(e: any, user: initState, dispatch: AppDispatch) {
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
      const { data } = await axios<IUpdateUser>({
        url: API + '/user',
        data: formData,
        method: 'put',
        withCredentials: true,
      });
      // dispatch new data
      console.log('type of data update', data);
      dispatch(changeAvatar(data.avatar.link));

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
    dispatch(clearInfo());
    dispatch(clearChats());
    dispatch(clearChosenChat());

    await axios<string>({
      url: API + '/logout',
      method: 'get',
      withCredentials: true,
    });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
}
