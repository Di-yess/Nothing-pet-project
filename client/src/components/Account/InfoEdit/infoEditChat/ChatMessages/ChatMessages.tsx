import { memo, useContext, useRef } from 'react';
import { GroupChatContext } from 'store/localContext/GroupChatContext';

import { Message } from 'types/chatsType';
import { IMessageGroup } from 'types/Interfaces';
import usePolling from './Hooks/usePolling';
import useScrollLast from './Hooks/useScrollLast';
import TextMessage from './TextMessage/TextMessage';

type Props = {
  messages: Message[] | IMessageGroup[] | null;
  userId: number | null;
};

export default memo(function ChatMessages({ messages, userId }: Props) {
  const lastMessageRef = useRef<null | HTMLDivElement>(null);
  const countMessageRef = useRef(messages?.length || null);
  const { createGroupChat } = useContext(GroupChatContext);

  usePolling(countMessageRef, messages?.length);
  useScrollLast(lastMessageRef, messages, countMessageRef);

  return (
    <div className={createGroupChat ? 'chatMessages blur' : 'chatMessages'}>
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
