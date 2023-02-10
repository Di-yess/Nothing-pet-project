import axios from 'axios';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { API } from '../../../constants';
import { initState } from './../../../types/userInit';

export async function getUserById(
  id: number,
  setUserById: React.Dispatch<React.SetStateAction<initState>>,
  navigate: NavigateFunction
) {
  try {
    const { data } = await axios<initState>({
      url: API + `/user/all/${id}`,
      method: 'get',
      withCredentials: true,
    });
    if (!data) {
      navigate('/');
    } else {
      setUserById(() => data);
    }
  } catch (err) {
    console.log(err);
  }
}
