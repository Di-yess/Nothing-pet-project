import { AppDispatch } from '../../../../../../store';
import { chooseChat } from '../../../../../../store/chatSlice';
import { chatType } from '../../../../../../types/chatsType';

export function personChatHandler(chat: chatType, dispatch: AppDispatch) {
  dispatch(chooseChat(chat.id));
}
