interface IUser {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  profession: string | null;
  adress: string | null;
  avatar: { link: string | null };
}

interface IAllUsers {
  id: number;
  fullName: string;
  avatar: { link: string | null };
}

interface IFeed {
  id: number;
  text: string;
  user: { id: number; fullName: string; avatar: { link: string | null } };
}

interface IChat {
  id: number;
  senderId: number;
  receiverId: number;
  sender: IAllUsers;
  receiver: IAllUsers;
  messages: IMessage[];
}

interface IMessage {
  message: {
    id: number;
    text: string;
    read: boolean;
    userId: number;
    createdAt: Date;
  };
}

interface INewMessage {
    id: number;
    text: string;
    read: boolean;
    userId: number;
    createdAt: Date;
}

export type { IFeed, IAllUsers, IUser, IChat, IMessage, INewMessage };
