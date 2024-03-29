import React from 'react';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import { readMessages } from 'store/asyncThunk/readMessages';

type Props = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  groupChat?: boolean;
};

export default function MemoInput({
  newMessage,
  setNewMessage,
  groupChat,
}: Props) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  return (
    <input
      type="text"
      placeholder="Type message"
      value={newMessage}
      onClick={() => {
        if (chatId && userId && !groupChat)
          dispatch(readMessages({ chatId: Number(chatId), userId }));
      }}
      onChange={(e) => setNewMessage(() => e.target.value)}
    />
  );
}