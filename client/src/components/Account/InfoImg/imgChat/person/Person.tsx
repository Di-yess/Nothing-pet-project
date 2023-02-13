import { memo } from 'react';
import { readMessages } from 'store/asyncThunk/readMessages';
import { chooseChat } from 'store/chatSlice';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import { chatType } from 'types/chatsType';
import LastMessage from './LastMessage/LastMessage';
import MessageTime from './MessageTime/MessageTime';
import './Person.scss';
import PersonImg from './PersonImg/PersonImg';

export default memo(function Person({ chat }: { chat: chatType }) {
  const user = useAppSelector((state) => state.user);
  const chosenChat = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();
  const personChat = user.id === chat.sender.id ? chat.receiver : chat.sender;
  const lastMessage = chat.messages.length
    ? chat.messages[chat.messages.length - 1].message.text
    : 'write me';
  const unreadMessagesCount = chat.messages.filter(
    ({ message }) => !message.read && message.userId !== user.id
  ).length;

  function personChatHandler() {
    if (unreadMessagesCount > 0 && user.id) {
      dispatch(readMessages({ chatId: chat.id, userId: user.id }));
    }
    dispatch(chooseChat(chat.id));
  }
  // console.log('Person.tsx');

  return (
    <div
      className={chosenChat === chat.id ? 'person chosenChat' : 'person'}
      onClick={personChatHandler}
    >
      {unreadMessagesCount > 0 && (
        <div className="message-counter">
          <div className="message-counter-number">{unreadMessagesCount}</div>
        </div>
      )}
      <MessageTime chat={chat} />
      <div className="personInfo">
        <PersonImg personChat={personChat} />
        <LastMessage fullName={personChat.fullName} lastMessage={lastMessage} />
      </div>
    </div>
  );
});
