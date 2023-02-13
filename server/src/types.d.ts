import { type Request, type Response, type NextFunction } from 'express';

declare module 'express-session' {
  interface SessionData {
    userId: number;
  }
}

export type MiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type Controller = (req: Request, res: Response) => void;

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  profession: string | null;
  adress: string | null;
  password: string;
  avatar: { link: string | null } | null;
}

export interface ISession {
  userId: number;
}

export interface IGroupChatUser {
  id: number;
  fullName: string;
  avatar: { link: string | null };
  chosen: boolean;
}

export interface INewChatUsers {
  newChatUsers: IGroupChatUser[];
  chatName: string;
}
