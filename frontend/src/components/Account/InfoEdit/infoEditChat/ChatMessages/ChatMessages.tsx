import { memo, useRef } from 'react';

import { Message } from '../../../../../types/chatsType';
import usePolling from './Hooks/usePolling';
import useScrollLast from './Hooks/useScrollLast';
import TextMessage from './TextMessage/TextMessage';

type Props = {
  messages: Message[] | null;
  userId: number | null;
};

export default memo(function ChatMessages({ messages, userId }: Props) {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);
  const countMessageRef = useRef(messages?.length || null);

  usePolling(countMessageRef, messages?.length);
  useScrollLast(lastMessageRef, messages, countMessageRef);

  return (
    <div className="chatMessages">
      {messages?.length ? (
        messages.map(({ message }) => (
          <TextMessage message={message} userId={userId} key={message.id} />
        ))
      ) : (
        <div className="writeFirst">Be the first to write.</div>
      )}
      <div className="lastMessage" ref={lastMessageRef}></div>
    </div>
  );
});
