import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GroupChatContext } from 'store/localContext/GroupChatContext';
import { useAppSelector } from 'types/Apphooks';
import './Account.scss';
import AccountForm from './AccountForm/AccountForm';
import useSmooth from './functional/useSmooth';

export default memo(function Account() {
  const [createGroupChat, setCreateGroupChat] = useState(false);
  const user = useAppSelector((state) => state.user);
  const accountId = useParams().id;

  console.log('accountId', accountId);

  useSmooth();

  return (
    <GroupChatContext.Provider value={{ createGroupChat, setCreateGroupChat }}>
      <AccountForm user={user} accountId={Number(accountId)} />
    </GroupChatContext.Provider>
  );
});
