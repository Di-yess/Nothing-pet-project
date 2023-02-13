import { IGroupChatInfo, IGroupChatUser } from 'types/Interfaces';
import GroupChatItemImg from '../GroupChatItemImg/GroupChatItemImg';

type Props = {
  users?: IGroupChatUser[];
};

export default function GroupChatMenu({ users }: Props) {
  return (
    <div className="groupChatItem" style={{ height:'25px' }}>
      {/* <div className="groupChatName">{groupChat.name}</div>
      <div className="groupChatPeople">
        {groupChat.users.length > 0 &&
          groupChat.users
            .slice(0, 3)
            .map(({ user }) => <GroupChatItemImg user={user} key={user.id} />)}
      </div> */}
    </div>
  );
}
