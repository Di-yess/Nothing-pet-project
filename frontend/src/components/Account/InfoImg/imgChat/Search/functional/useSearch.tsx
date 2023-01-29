import { useEffect } from 'react';
import { getUsers } from '../../../../../../store/asyncThunk/getUser';
import {
    useAppDispatch,
    useAppSelector
} from '../../../../../../types/Apphooks';

export default function useSearch() {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector((state) => state.allUsers.allUsers);

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(getUsers());
    }
  }, [allUsers, dispatch]);
}
