import { chatType } from 'types/chatsType';

type Props = {
  chat: chatType;
};

export default function MessageTime({ chat }: Props) {
  return (
    <div className="message-time">
      {chat.messages.length !== 0 &&
        chat.messages[chat.messages.length - 1].message.createdAt
          .toLocaleString()
          .slice(0, -8)
          .replace('T', ' ')}
    </div>
  );
}
