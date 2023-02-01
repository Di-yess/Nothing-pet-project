type chatsType = {
  chats: chatType[];
  status: string | null;
  error: string | null;
};

type chatType = {
  id: number;
  senderId: number;
  receiverId: number;
  sender: user;
  receiver: user;
  messages: Message[];
};

type user = {
  id: number;
  fullName: string;
  avatar: { link: string };
};

type Message = {
  message: { id: number; text: string; userId: number; createdAt: Date };
};

type chatChecker = {
  chat: boolean;
  chosenChat: null | number;
};

type newMessage = {
  chatId: number;
  data: Message ;
};

export type { chatsType, chatType, chatChecker, Message, newMessage };
