import { useAppSelector } from '../../../../types/Apphooks';
import ChatMessages from './ChatMessages/ChatMessages';
import './InfoEditChat.scss';
import MessageInput from './MessageInput/MessageInput';

export default function InfoEditChat() {
  const userId = useAppSelector((state) => state.user.id);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const chat = useAppSelector((state) =>
    state.chats.chats.find((chat) => chat.id === chatId)
  );
  const messages = chat?.messages || null;

  console.log('InfoEditChat');

  return (
    <>
      {chatId && (
        <div className="infoEditChat">
          <ChatMessages messages={messages} userId={userId} />
          <MessageInput />
        </div>
      )}
    </>
  );
}
