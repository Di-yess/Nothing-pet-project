import { useEffect } from 'react';
import { getUsers } from '../../../../../../store/asyncThunk/getUser';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../../../types/Apphooks';

export default function useSearch() {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector((state) => state.allUsers.allUsers);
  const { chats, status } = useAppSelector((state) => state.chats);
  const login = useAppSelector((state) => state.user.login);

  useEffect(() => {
    if (login) {
      if (allUsers.length === 0) {
        dispatch(getUsers());
      }
    }
  }, [allUsers, dispatch]);
}
