import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../types/Apphooks';
import { getChats } from '../../../../../../store/asyncThunk/getChats';

export default function usePolling() {
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chatId) {
      const interval = window.setInterval(() => {
        console.log('interval');
        dispatch(getChats());
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [chatId, dispatch]);
}
