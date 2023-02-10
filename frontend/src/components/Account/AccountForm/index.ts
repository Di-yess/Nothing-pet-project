import axios from 'axios';
import React from 'react';
import { API } from '../../../constants';
import { initState } from './../../../types/userInit';

export async function getUserById(
  id: number,
  setUserById: React.Dispatch<React.SetStateAction<initState>>
) {
  try {
    const { data } = await axios<initState>({
      url: API + `/user/all/${id}`,
      method: 'get',
      withCredentials: true,
    });
    setUserById(() => data);
  } catch (err) {
    console.log(err);
  }
}
