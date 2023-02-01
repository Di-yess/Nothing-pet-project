import { memo } from 'react';
import { Message } from '../../../../../types/chatsType';

type Props = {
  messages: Message[] | null;
  userId: number | null;
};

export default memo(function ChatMessages({ messages, userId }: Props) {
  console.log('chatMessages');
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
