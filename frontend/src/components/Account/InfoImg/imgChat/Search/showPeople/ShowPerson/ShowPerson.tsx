import { createChat } from '../../../../../../../store/asyncThunk/createChat';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../types/Apphooks';
import { allUsersType } from '../../../../../../../types/userInit';
import { checkChat } from './functional';

export default function ShowPerson({ user }: { user: allUsersType }) {
  const chats = useAppSelector((state) => state.chats.chats);
  const loggedUserId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();

  return (
    <div
      className="showPerson"
      key={user.id}
      onClick={() =>
        checkChat(chats, dispatch, loggedUserId, user)
          ? dispatch(createChat({ newPersonId: user.id }))
          : null
      }
    >
      <div className="showPersonImg">
        <img
          src={
            user.avatar.link
              ? `http://localhost:5005/avatars/${user.avatar.link}.jpg`
              : '../imgs/user.png'
          }
          alt="userIcon"
        />
      </div>
      <div className="showPersonName">{user.fullName}</div>
    </div>
  );
}
