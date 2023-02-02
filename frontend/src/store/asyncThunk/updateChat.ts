import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateChat = createAsyncThunk(
  'chats/updateChat',
  async (chatId: number, {}) => {
    try {
      const response = await axios.get(`/chats/chatmessages/${chatId}`);
      return { chatId, data: response.data };
    } catch (err) {
      console.log(err);
    }
  }
);

// export const updateChat = async (
//   chatId: number,
//   setPollingMessages: React.Dispatch<React.SetStateAction<Message[] | null>>
// ) => {
//   try {
//     console.log('chatId', chatId);
//     const response = await axios.get(`/chats/chatmessages/${chatId}`);
//     console.log('messages', response.data);
//     setPollingMessages(response.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
