import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Vars = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  chatId: number;
};

export const postMessage = createAsyncThunk(
  'chats/postMessage',
  async (vars: Vars) => {
    const { newMessage, setNewMessage, chatId } = vars;
    if (!newMessage.trim()) return;
    try {
      const response = await axios.post('/chats/message', {
        newMessage: newMessage.trim(),
        chatId,
      });
      setNewMessage(() => '');
      return { chatId, data: { message: response.data } };
    } catch (err) {
      console.log(err);
    }
  }
);
