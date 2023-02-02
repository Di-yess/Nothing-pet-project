import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import { chatType } from '../../../../../types/chatsType';
import { personChatHandler } from './functional';
import LastMessage from './LastMessage/LastMessage';
import MessageTime from './MessageTime/MessageTime';
import './Person.scss';
import PersonImg from './PersonImg/PersonImg';

export default function Person({ chat }: { chat: chatType }) {
  const user = useAppSelector((state) => state.user);
  const chosenChat = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();
  const personChat = user.id === chat.sender.id ? chat.receiver : chat.sender;
  const lastMessage = chat.messages.length
    ? chat.messages[chat.messages.length - 1].message.text
    : 'write me';

  return (
    <div
      className={chosenChat === chat.id ? 'person chosenChat' : 'person'}
      onClick={() => personChatHandler(chat, dispatch)}
    >
      <div className="message-counter">
        <div className="message-counter-number">5</div>
      </div>
      <MessageTime chat={chat} />
      <div className="personInfo">
        <PersonImg personChat={personChat} />
        <LastMessage fullName={personChat.fullName} lastMessage={lastMessage} />
      </div>
    </div>
  );
}
