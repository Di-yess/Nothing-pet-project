import { useContext } from 'react';
import { GroupChatContext } from '../../../../store/localContext/GroupChatContext';
import { useAppSelector } from '../../../../types/Apphooks';
import ChatMessages from './ChatMessages/ChatMessages';
import CreateGroupChat from './CreateGroupChat/CreateGroupChat';
import './InfoEditChat.scss';
import MessageInput from './MessageInput/MessageInput';

export default function InfoEditChat() {
  const userId = useAppSelector((state) => state.user.id);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const chat = useAppSelector((state) =>
    state.chats.chats.find((chat) => chat.id === chatId)
  );
  const { createGroupChat } = useContext(GroupChatContext);
  const messages = chat?.messages || null;

  // console.log('Infoeditchat', groupChat);

  return (
    <>
      {chatId ? (
        <div className="infoEditChat">
          <ChatMessages messages={messages} userId={userId} />
          <MessageInput />
          {createGroupChat && <CreateGroupChat />}
        </div>
      ) : (
        <div className="infoEditChat">{createGroupChat && <CreateGroupChat />}</div>
      )}
    </>
  );
}
