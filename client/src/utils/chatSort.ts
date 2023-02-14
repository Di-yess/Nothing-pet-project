import { chatType } from 'types/chatsType';
type ChatSort = (a: chatType, b: chatType) => number;

export const chatSort: ChatSort = (chatPrev, chatNext) => {
  if (chatPrev.messages.length === 0) return 1;
  if (chatNext.messages.length === 0) return -1;
  if (
    chatNext.messages[chatNext.messages.length - 1].message.createdAt >
    chatPrev.messages[chatPrev.messages.length - 1].message.createdAt
  ) {
    return 1;
  } else return -1;
};
