import { API } from '../../../../../../../constants';
import {
  addGroupUsers,
  chooseGroupUser,
} from '../../../../../../../store/groupChatSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../types/Apphooks';
import { IGroupChatUser } from '../../../../../../../types/Interfaces';
import { allUsersType } from '../../../../../../../types/userInit';

type Props = {
  user?: IGroupChatUser;
  searchUser?: allUsersType;
};

export default function GroupUser({ user, searchUser }: Props) {
  const dispatch = useAppDispatch();
  const groupUsers = useAppSelector((state) => state.groupChat.users);

  if (user)
    return (
      <>
        <div
          className={user.chosen ? 'groupUser chosenUser' : 'groupUser'}
          onClick={() => {
            dispatch(chooseGroupUser(user.id));
          }}
          key={user.id}
        >
          <div className="groupUserImg">
            <img
              src={
                user.avatar.link
                  ? `${API}/avatars/${user.avatar.link}.jpg`
                  : '../imgs/user.png'
              }
              alt="groupUser"
            />
          </div>
          <div className="groupUserName">
            <div>{user.fullName}</div>
          </div>
        </div>
      </>
    );
  if (searchUser)
    return (
      <div
        className="groupUser"
        onClick={() => {
          const checkUser = groupUsers.find(
            (user) => user.id === searchUser.id
          );
          if (!checkUser) {
            dispatch(addGroupUsers([{ ...searchUser, chosen: true }]));
          } else {
            if (!checkUser.chosen) {
              dispatch(chooseGroupUser(searchUser.id));
            }
          }
        }}
        key={searchUser.id}
      >
        <div className="groupUserImg">
          <img
            src={
              searchUser.avatar.link
                ? `${API}/avatars/${searchUser.avatar.link}.jpg`
                : '../imgs/user.png'
            }
            alt="groupUser"
          />
        </div>
        <div className="groupUserName">
          <div>{searchUser.fullName}</div>
        </div>
      </div>
    );
  return <></>;
}
