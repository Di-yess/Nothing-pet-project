import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { INewMessage } from '../../types/Interfaces';

type Vars = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  chatId: number | string;
};

export const postMessage = createAsyncThunk(
  'chats/postMessage',
  async (vars: Vars) => {
    const { newMessage, setNewMessage, chatId } = vars;
    if (!newMessage.trim()) return;
    try {
      const { data } = await axios<INewMessage>({
        url: API + '/chats/message',
        method: 'post',
        data: { newMessage: newMessage.trim(), chatId: Number(chatId) },
        withCredentials: true,
      });
      setNewMessage(() => '');
      return { chatId: Number(chatId), data: { message: data } };
    } catch (err) {
      console.log(err);
    }
  }
);
