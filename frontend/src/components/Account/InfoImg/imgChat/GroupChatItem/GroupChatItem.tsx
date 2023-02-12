import { IGroupChatInfo } from '../../../../../types/Interfaces';
import './GroupChatItem.scss';
import GroupChatItemImg from './GroupChatItemImg/GroupChatItemImg';

type Props = {
  groupChat: IGroupChatInfo;
};

export default function GroupChatItem({ groupChat }: Props) {
  console.log(groupChat);
  return (
    <div className="groupChatItem">
      <div className="groupChatName">{groupChat.name}</div>
      <div className="groupChatPeople">
        {groupChat.users.length > 0 &&
          groupChat.users
            .slice(0, 3)
            .map(({ user }) => <GroupChatItemImg user={user} key={user.id} />)}
      </div>
    </div>
  );
}

// несколько аватарок на item
