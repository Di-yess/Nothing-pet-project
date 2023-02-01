import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import { chatType } from '../../../../../types/chatsType';
import { personChatHandler } from './functional';
import './Person.scss';

export default function Person({ chat }: { chat: chatType }) {
  const user = useAppSelector((state) => state.user);
  const chosenChat = useAppSelector((state) => state.chat.chosenChat);
  const personChat = user.id === chat.sender.id ? chat.receiver : chat.sender;
  const messageAmount = chat.messages.length;
  const lastMessage = messageAmount
    ? chat.messages[chat.messages.length - 1].message.text
    : 'write me';
  const dispatch = useAppDispatch();

  return (
    <div
      className={chosenChat === chat.id ? 'person chosenChat' : 'person'}
      onClick={() => personChatHandler(chat, dispatch)}
    >
      <div className="message-counter">
        <div className="message-counter-number">5</div>
      </div>
      <div className="message-time">
        {messageAmount &&
          chat.messages[chat.messages.length - 1].message.createdAt
            .toLocaleString()
            .slice(0, -8)
            .replace('T', ' ')}
        time
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
