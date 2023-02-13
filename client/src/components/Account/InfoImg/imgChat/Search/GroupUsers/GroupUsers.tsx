import useAddGroupUsers from '../../../../../../hooks/useAddGroupUsers';
import { useAppSelector } from '../../../../../../types/Apphooks';
import { allUsersType } from '../../../../../../types/userInit';
import GroupUser from './GroupUser/GroupUser';
type Props = {
  showPeople: boolean;
  showUsers: allUsersType[];
};

export default function GroupUsers({ showPeople, showUsers }: Props) {
  const loggedUserId = useAppSelector((state) => state.user.id);
  const groupUsers = useAppSelector((state) => state.groupChat.users);
  const allChatUsers = useAppSelector((state) => state.chats.chats).map(
    (chat) => (chat.senderId === loggedUserId ? chat.receiver : chat.sender)
  );

  useAddGroupUsers(allChatUsers);

  return (
    <>
      {!showPeople ? (
        <div className="groupUsers">
          {groupUsers &&
            groupUsers.map((user) => <GroupUser user={user} key={user.id} />)}
        </div>
      ) : (
        <div className="groupUsers">
          {showUsers &&
            showUsers.map((user) => <GroupUser searchUser={user} key={user.id} />)}
        </div>
      )}
    </>
  );
}
