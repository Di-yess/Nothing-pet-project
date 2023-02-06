import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../types/Apphooks';
import { readMessages } from '../../../../../../store/asyncThunk/readMessages';

type Props = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function MemoInput({ newMessage, setNewMessage }: Props) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  return (
    <input
      type="text"
      placeholder="Type message"
      value={newMessage}
      onClick={() => {
        if (chatId && userId) dispatch(readMessages({ chatId, userId }));
      }}
      onChange={(e) => setNewMessage(() => e.target.value)}
    />
  );
}
