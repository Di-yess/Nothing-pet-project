import { initState } from './../../../types/userInit';
import axios from 'axios';
import React from 'react';

export async function getUserById(
  id: number,
  setUserById: React.Dispatch<React.SetStateAction<initState>>
) {
  try {
    const response = await axios.get(`/user/${id}`);
    console.log('user in account form', response.data);
    setUserById(() => response.data);
  } catch (err) {
    console.log(err);
  }
}
