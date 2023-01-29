import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../types/Apphooks';
import { initState } from '../../../types/userInit';
import './InfoEdit.scss';
import InfoEditCard from './infoEditCard/InfoEditCard';
import InfoEditChat from './infoEditChat/InfoEditChat';
import InfoMenu from './infoMenu/InfoMenu';

export default function InfoEdit({ user }: { user: initState }) {
  const dispatch = useAppDispatch();
  const chat = useAppSelector((state) => state.chat.chat);
  const checkUserId = useAppSelector((state) => state.user.id);
  const accountId = useParams();
  console.log('your id', checkUserId);
  console.log('infoEdit', accountId);

  return (
    <div className="infoEdit">
      {(checkUserId === Number(accountId.id) ||
        !Object.keys(accountId).length) && <InfoMenu />}
      {!chat ? <InfoEditCard user={user} /> : <InfoEditChat />}
    </div>
  );
}
