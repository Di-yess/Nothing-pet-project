import { useContext, useState } from 'react';
import { createGroupChat } from '../../../../../store/asyncThunk/createGroupChat';
import { GroupChatContext } from '../../../../../store/localContext/GroupChatContext';
import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import CreateChatBtn from './CreateChatBtn/CreateChatBtn';
import GroupUsers from './GroupUsers/GroupUsers';
import InputSearch from './InputSearch/InputSearch';
import './Search.scss';

export default function GroupSearch() {
  const dispatch = useAppDispatch();
  const loggedUserId = useAppSelector((state) => state.user.id);
  const allUsers = useAppSelector((state) => state.allUsers.allUsers).filter(
    (user) => user.id !== loggedUserId
  );
  const newChatUsers = useAppSelector((state) => state.groupChat.users).filter(
    (user) => user.chosen
  );
  const { setCreateGroupChat } = useContext(GroupChatContext);

  console.log('newChatUsers', newChatUsers);
  const [showPeople, setShowPeople] = useState(false);
  const [showUsers, setShowUsers] = useState(allUsers);

  return (
    <form
      className="groupSearch"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(createGroupChat(newChatUsers));
        if (setCreateGroupChat) setCreateGroupChat(() => false);
        console.log('it works', e.target);
      }}
    >
      <input className="groupSearchHeader" placeholder="Chat name" />
      <InputSearch
        setShowPeople={setShowPeople}
        setShowUsers={setShowUsers}
        groupSearch={true}
      />
      <GroupUsers showPeople={showPeople} showUsers={showUsers} />
      <CreateChatBtn />
    </form>
  );
}

// Передать всех юзеров чата ;
// Получить ответ о создании чата и добавить его в редакс ;
// Очистить прежние значения groupChat в редакс.
