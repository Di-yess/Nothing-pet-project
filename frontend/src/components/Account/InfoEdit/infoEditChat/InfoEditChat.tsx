import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { GroupChatContext } from 'store/localContext/GroupChatContext';
import { useAppSelector } from 'types/Apphooks';
import ChatMessages from './ChatMessages/ChatMessages';
import CreateGroupChat from './CreateGroupChat/CreateGroupChat';
import './InfoEditChat.scss';
import MessageInput from './MessageInput/MessageInput';

export default function InfoEditChat() {
  const userId = useAppSelector((state) => state.user.id);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  // chatId group of personal
  const chat = useAppSelector((state) =>
    state.chats.chats.find((chat) => chat.id === chatId)
  );
  const groupChat = useAppSelector((state) =>
    state.groupChats.chats.find(({ groupChat }) => groupChat.id === chatId)
  );

  const messages = chat?.messages || null;
  const groupMessages = groupChat?.groupChat.messages || null;
  const { createGroupChat } = useContext(GroupChatContext);

  // console.log('Infoeditchat', groupChat);

  return (
    <>
      {typeof chatId === 'number' ? (
        // personal chat
        <div className="infoEditChat">
          <ChatMessages messages={messages} userId={userId} />
          <MessageInput />
          <AnimatePresence>
            {createGroupChat && <CreateGroupChat />}
          </AnimatePresence>
        </div>
      ) : typeof chatId === 'string' ? (
        // group chat
        <div className="infoEditChat">
          <ChatMessages messages={groupMessages} userId={userId} />
          <AnimatePresence>
            {createGroupChat && <CreateGroupChat />}
          </AnimatePresence>
          <MessageInput groupChat={true} />
        </div>
      ) : (
        // окно для создания группового чата
        <div className="infoEditChat">
          <AnimatePresence>
            {createGroupChat && <CreateGroupChat />}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
