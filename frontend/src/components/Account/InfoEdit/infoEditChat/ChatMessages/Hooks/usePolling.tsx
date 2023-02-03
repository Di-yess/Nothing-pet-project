import { useEffect } from 'react';
import { updateChat } from '../../../../../../store/asyncThunk/updateChat';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../types/Apphooks';

export default function usePolling() {
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chatId) {
      const interval = window.setInterval(() => {
        console.log('interval');
        dispatch(updateChat(chatId));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [chatId, dispatch]);
}
