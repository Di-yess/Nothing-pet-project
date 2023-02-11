import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { GroupChatContext } from '../../../../store/localContext/GroupChatContext';
import { useAppSelector } from '../../../../types/Apphooks';
import GroupChatIcon from './GroupChatIcon/GroupChatIcon';
import './ImgChat.scss';
import Person from './person/Person';
import Search from './Search/Search';

export default function ImgChat() {
  const chats = useAppSelector((state) => state.chats.chats);
  const chosenChat = useAppSelector((state) => state.chat.chosenChat);
  const { setCreateGroupChat } = useContext(GroupChatContext);

  return (
    <m.div
      //{...variants}
      className="infoImg"
      style={{ height: '500px' }}
    >
      <div className="person-wrapper">
        <Search />
        {chats && chats.map((chat) => <Person chat={chat} key={chat.id} />)}
        <div
          onClick={() => {
            if (setCreateGroupChat) {
              if (chosenChat) {
                document
                  .querySelector('.chatMessages')
                  ?.classList.toggle('blur');
                document
                  .querySelector('.sendMessageInput')
                  ?.classList.toggle('blur');
              }
              setCreateGroupChat((prev) => !prev);
            }
          }}
        >
          <GroupChatIcon />
        </div>
      </div>
    </m.div>
  );
}
