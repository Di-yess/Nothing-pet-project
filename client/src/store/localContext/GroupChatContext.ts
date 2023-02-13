import { createContext } from 'react';

interface IGroutChatType {
  createGroupChat?: boolean;
  setCreateGroupChat?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GroupChatContext = createContext<IGroutChatType>({});
