import { useAppSelector } from '../../../../types/Apphooks';
import './InfoEditChat.scss';

export default function InfoEditChat() {
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const userId = useAppSelector((state) => state.user.id);
  const chat = useAppSelector((state) =>
    state.chats.chats.find((chat) => chat.id === chatId)
  );
  const messages = chat?.messages || null;

  return (
    <>
      {chatId && (
        <div className="infoEditChat">
          {messages &&
            messages.map(({ message }) => (
              <div
                className={
                  userId === message.userId
                    ? 'chatMessage sender'
                    : 'chatMessage receiver'
                }
              >
                {message.text}
              </div>
            ))}
        </div>
      )}
    </>
  );
}


