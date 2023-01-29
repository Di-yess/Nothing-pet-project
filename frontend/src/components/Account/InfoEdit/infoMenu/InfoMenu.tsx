import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../types/Apphooks';
import { showChats, showInfo } from './functional';

export default memo(function InfoMenu() {
    const chat = useAppSelector((state) => state.chat.chat);
  const [infoBtn, setInfoBtn] = useState(!chat);
  const [chatsBtn, setChatsBtn] = useState(chat);
  const dispatch = useAppDispatch();

  return (
    <div className="infoMenu">
      <div
        className={
          infoBtn ? 'chatsBtn infoBtn infoBtnClicked' : 'chatsBtn infoBtn'
        }
        onClick={() => {
          showInfo({ setInfoBtn, setChatsBtn, chat, dispatch });
        }}
      >
        Info
      </div>
      <div
        className={chatsBtn ? 'chatsBtn infoBtnClicked' : 'chatsBtn'}
        onClick={() => {
          showChats({ setInfoBtn, setChatsBtn, chat, dispatch });
        }}
      >
        Chats
      </div>
    </div>
  );
});
