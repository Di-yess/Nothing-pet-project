import { memo, useRef } from 'react';

import { Message } from '../../../../../types/chatsType';
import usePolling from './Hooks/usePolling';
import useScrollLast from './Hooks/useScrollLast';

type Props = {
  messages: Message[] | null;
  userId: number | null;
};

export default memo(function ChatMessages({ messages, userId }: Props) {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  //usePolling();
  useScrollLast(lastMessageRef, messages);

  return (
    <div className="chatMessages">
      {messages?.length ? (
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
            <div className="messageTime">
              {message.createdAt
                .toLocaleString()
                .slice(10, -8)
                .replace('T', ' ')}
            </div>
          </div>
        ))
      ) : (
        <div className="writeFirst">Be the first to write.</div>
      )}
      <div ref={lastMessageRef}></div>
    </div>
  );
});
