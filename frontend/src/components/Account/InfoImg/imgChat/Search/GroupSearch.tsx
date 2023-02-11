import { useContext, useState } from 'react';
import { GroupChatContext } from '../../../../../store/localContext/GroupChatContext';
import { useAppSelector } from '../../../../../types/Apphooks';
import GroupUsers from './GroupUsers/GroupUsers';
import InputSearch from './InputSearch/InputSearch';
import './Search.scss';
import ShowPeople from './showPeople/ShowPeople';

export default function GroupSearch() {
  const loggedUserId = useAppSelector((state) => state.user.id);
  const allUsers = useAppSelector((state) => state.allUsers.allUsers).filter(
    (user) => user.id !== loggedUserId
  );
  // for group
  const allChatUsers = useAppSelector((state) => state.chats.chats).map(
    (chat) => (chat.senderId === loggedUserId ? chat.receiver : chat.sender)
  );
  const [showPeople, setShowPeople] = useState(false);
  const [showUsers, setShowUsers] = useState(allUsers);
  const { createGroupChat } = useContext(GroupChatContext);

  return (
    <form className="groupSearch">
      <input className="groupSearchHeader" placeholder="Chat name" />
      <InputSearch setShowPeople={setShowPeople} setShowUsers={setShowUsers} />
      <GroupUsers users={allChatUsers} />
      {showPeople && <ShowPeople showUsers={showUsers} />}
    </form>
  );
}
