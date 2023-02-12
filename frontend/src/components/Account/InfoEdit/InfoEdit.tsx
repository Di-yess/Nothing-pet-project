import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getChats } from '../../../store/asyncThunk/getChats';
import { getGroupChats } from '../../../store/asyncThunk/getGroupChats';
import { useAppDispatch, useAppSelector } from '../../../types/Apphooks';
import { initState } from '../../../types/userInit';
import './InfoEdit.scss';
import InfoEditCard from './infoEditCard/InfoEditCard';
import InfoEditChat from './infoEditChat/InfoEditChat';
import InfoMenu from './infoMenu/InfoMenu';

export default function InfoEdit({ user }: { user: initState }) {
  const chat = useAppSelector((state) => state.chat.chat);
  const { chats } = useAppSelector((state) => state.chats);
  const checkUserId = useAppSelector((state) => state.user.id);
  const accountId = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chats.length === 0) {
      dispatch(getChats());
      dispatch(getGroupChats());
    }
  }, [dispatch, chats.length]);

  return (
    <div className="infoEdit">
      {(checkUserId === Number(accountId.id) ||
        !Object.keys(accountId).length) && <InfoMenu />}
      {!chat ? <InfoEditCard user={user} /> : <InfoEditChat />}
    </div>
  );
}
