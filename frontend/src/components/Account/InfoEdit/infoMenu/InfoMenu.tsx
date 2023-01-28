import { memo, useState } from 'react';
import { changeColor } from './functional';

export default memo(function InfoMenu() {
  const [infoBtn, setInfoBtn] = useState(true);
  const [chatsBtn, setChatsBtn] = useState(false);

  return (
    <div className="infoMenu">
      <div
        className={
          infoBtn ? 'chatsBtn infoBtn infoBtnClicked' : 'chatsBtn infoBtn'
        }
        onClick={() => {
          setInfoBtn(() => true);
          setChatsBtn(() => false);
        }}
      >
        Info
      </div>
      <div
        className={chatsBtn ? 'chatsBtn infoBtnClicked' : 'chatsBtn'}
        onClick={() => {
          setInfoBtn(() => false);
          setChatsBtn(() => true);
        }}
      >
        Chats
      </div>
    </div>
  );
});

// создать state отрисовки и навешивания классов выше и в аккаунте
