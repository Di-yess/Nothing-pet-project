import { memo, useEffect } from 'react';
import { setInterval } from 'timers/promises';
import { updateChat } from '../../../../../store/asyncThunk/updateChat';

import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import { Message } from '../../../../../types/chatsType';

type Props = {
  messages: Message[] | null;
  userId: number | null;
};

export default memo(function ChatMessages({ messages, userId }: Props) {
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chatId) {
      const interval = window.setInterval(() => {
        console.log('interval');
        dispatch(updateChat(chatId));
        return () => clearInterval(interval);
      },1500);
      // console.log('useEffect chatId', chatId);

      // setInterval( 1500);
    }
  }, [chatId]);
  // chat Id, all messages
  // санка для подтягивания невых сообщений

  return (
    <div className="chatMessages">
      {messages &&
        messages.map(({ message }) => (
          <div
            className={
              userId === message.userId
                ? 'chatMessageContainer sender'
                : 'chatMessageContainer receiver'
            }
            key={message.id}
          >
            <div className="chatMessage">{message.text}</div>
            {/* <div className="messageTime">
              {message.createdAt
                .toLocaleString()
                .slice(0, -8)
                .replace('T', ' ')}
            </div> */}
          </div>
        ))}
    </div>
  );
});
