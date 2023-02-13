import { chooseChat } from 'store/chatSlice';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import { IGroupChatInfo } from 'types/Interfaces';
import './GroupChatItem.scss';
import GroupChatItemImg from './GroupChatItemImg/GroupChatItemImg';

type Props = {
  groupChat: IGroupChatInfo;
};

export default function GroupChatItem({ groupChat }: Props) {
  const chosenChat = useAppSelector((state) => state.chat.chosenChat);
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        chosenChat === groupChat.id
          ? 'groupChatItem chosenChat'
          : 'groupChatItem'
      }
      onClick={() => {
        dispatch(chooseChat(groupChat.id));
      }}
    >
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
