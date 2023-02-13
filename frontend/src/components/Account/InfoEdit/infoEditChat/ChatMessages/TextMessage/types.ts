export type Message = {
  id: number;
  text: string;
  userId: number;
  createdAt: Date;
};

export type MessageWithUser = {
  id: number;
  text: string;
  userId: number;
  createdAt: Date;
  user: {
    id: number;
    fullName: string;
    avatar: { link: string | null };
  };
};

export function isMessageWithUser(object: any): object is MessageWithUser {
  return 'user' in object;
}
