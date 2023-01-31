import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import { chatType } from '../../../../../types/chatsType';
import { personChatHandler } from './functional';
import './Person.scss';

export default function Person({ chat }: { chat: chatType }) {
  const user = useAppSelector((state) => state.user);
  const personChat = user.id === chat.sender.id ? chat.receiver : chat.sender;
  const lastMessage = chat.messages[chat.messages.length - 1].message.text;
  const dispatch = useAppDispatch();

  return (
    <div
      className="person"
      onClick={() => personChatHandler(chat, dispatch )}
    >
      <div className="message-counter">
        <div className="message-counter-number">5</div>
      </div>
      <div className="message-time">
        {chat.messages[chat.messages.length - 1].message.createdAt
          .toLocaleString()
          .slice(0, -8)
          .replace('T', ' ')}
      </div>
      <div className="personInfo">
        <div className="personImg">
          <img
            src={
              personChat.avatar.link
                ? `http://localhost:5005/avatars/${personChat.avatar.link}.jpg`
                : '../imgs/user.png'
            }
            alt="img"
          />{' '}
        </div>
        <div className="person-name-message">
          <div className="person-name">{personChat.fullName}</div>
          <div className="person-message">
            {lastMessage.length > 17
              ? lastMessage.slice(0, 17) + '...'
              : lastMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
