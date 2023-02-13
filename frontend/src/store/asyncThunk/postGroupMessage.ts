import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../constants';
import { INewGroupMessage, INewMessage } from 'types/Interfaces';

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
      console.log('INewGroupMessage thunk', data);
      setNewMessage(() => '');
      return { chatId, data: { message: data } };
    } catch (err) {
      console.log(err);
    }
  }
);

// обрабоать на бэке создание новго сообщения
// изменить тип получаемого сообщения и добавить в нужный групп-чат
