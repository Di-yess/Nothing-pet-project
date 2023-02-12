import { useEffect } from 'react';
import { addGroupUsers } from '../store/groupChatSlice';
import { useAppDispatch, useAppSelector } from '../types/Apphooks';
import { allUsersType } from '../types/userInit';


export default function useAddGroupUsers(users:allUsersType[]) {
  const groupUsers = useAppSelector((state) => state.groupChat.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (groupUsers.length === 0) {
      dispatch(
        addGroupUsers([...users].map((user) => ({ ...user, chosen: false })))
      );
    }
  }, [dispatch, groupUsers.length, users]);
}
