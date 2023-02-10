import { AppDispatch } from '../../../../../../../../store';
import { readMessages } from '../../../../../../../../store/asyncThunk/readMessages';
import { chooseChat } from '../../../../../../../../store/chatSlice';
import { chatType } from '../../../../../../../../types/chatsType';
import { allUsersType } from '../../../../../../../../types/userInit';

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
      dispatch(chooseChat(chats[i].id));
      dispatch(readMessages({ chatId: chats[i].id, userId: user.id }));
      return false;
    }
  }
  return true;
}
