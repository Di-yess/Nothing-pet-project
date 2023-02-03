import axios from 'axios';
import { AppDispatch } from '../../../../../../../../store';
import { chooseChat } from '../../../../../../../../store/chatSlice';
import { chatType } from '../../../../../../../../types/chatsType';
import { allUsersType } from '../../../../../../../../types/userInit';

export async function createChat({ newPersonId }: { newPersonId: number }) {
  try {
    const response = await axios.post('/chats', {
      newPersonId,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export function checkChat(
  chats: chatType[],
  dispatch: AppDispatch,
  loggedUserId: number | null,
  user: allUsersType
) {
  for (let i = 0; i < chats.length; i++) {
    if (
      (chats[i].senderId === loggedUserId ||
        chats[i].receiverId === loggedUserId) &&
      (chats[i].senderId === user.id || chats[i].receiverId === user.id)
    ) {
      console.log('choose the chat');
      dispatch(chooseChat(chats[i].id));
      return false;
    }
  }
  console.log('lets create chat');
  return true;
}

// Достать id юзера. Если есть чат с ним в редакс выбрать chosen chat
// Если нет - отправить запрос на бэк для создания чата и добавить в редакс новый
