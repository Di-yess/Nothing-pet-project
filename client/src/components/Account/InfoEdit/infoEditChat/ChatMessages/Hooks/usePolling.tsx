import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../types/Apphooks';
import { getChats } from '../../../../../../store/asyncThunk/getChats';
import { getGroupChats } from 'store/asyncThunk/getGroupChats';

export default function usePolling(
  countMessageRef: React.MutableRefObject<number | null>,
  messageAmount: number | undefined
) {
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chatId) {
      const interval = window.setInterval(() => {
        dispatch(getChats());
        dispatch(getGroupChats());
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [chatId, dispatch]);
}
