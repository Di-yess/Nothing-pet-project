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
  messages: message[];
};

type user = {
  id: number;
  fullName: string;
  avatar: { link: string };
};

type message = {
  message: { id: number; text: string; userId: number; createdAt: Date };
};

type chatChecker = {
  chat: boolean;
  chosenChat: null | number;
};

export type { chatsType, chatType, chatChecker };
