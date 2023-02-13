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
  User: {
    id: number;
    fullName: string;
    avatar: { link: string | null };
  };
};

export function isMessageWithUser(object: any): object is MessageWithUser {
  return 'User' in object;
}
