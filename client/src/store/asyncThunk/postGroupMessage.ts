import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { INewGroupMessage } from 'types/Interfaces';
import { API } from '../../constants';

type Vars = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  chatId: string;
};

export const postGroupMessage = createAsyncThunk(
  'groupChats/postGroupMessage',
  async (vars: Vars) => {
    const { newMessage, setNewMessage, chatId } = vars;
    if (!newMessage.trim()) return;
    try {
      const { data } = await axios<INewGroupMessage>({
        url: API + '/chats/groupmessage',
        method: 'post',
        data: { newMessage: newMessage.trim(), chatId: chatId },
        withCredentials: true,
      });
      setNewMessage(() => '');
      return { chatId, data: { message: data } };
    } catch (err) {
      console.log(err);
    }
  }
);
