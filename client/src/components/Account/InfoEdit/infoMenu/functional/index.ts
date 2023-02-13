import { showChat } from '../../../../../store/chatSlice';
import { AppDispatch } from './../../../../../store/index';

type btnType = {
  setInfoBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setChatsBtn: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: AppDispatch;
  chat: boolean;
};

export function showInfo(props: btnType) {
  const { setInfoBtn, setChatsBtn, chat, dispatch } = props;
  setInfoBtn(() => true);
  setChatsBtn(() => false);

  if (chat) {
    dispatch(showChat(false));
    document.querySelector('.infoEdit')?.classList.remove('check');
  }
}

export function showChats(props: btnType) {
  const { setInfoBtn, setChatsBtn, chat, dispatch } = props;
  setInfoBtn(() => false);
  setChatsBtn(() => true);

  if (!chat) {
    dispatch(showChat(true));
    document.querySelector('.infoEdit')?.classList.add('check');
  }
}
