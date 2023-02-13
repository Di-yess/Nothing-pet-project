import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '.';
import { showChat } from 'store/chatSlice';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import { initState } from 'types/userInit';
import AccountBtns from '../AccountBtns/AccountBtns';
import SendBtn from '../AccountBtns/SendBtn';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import { accountFormType } from '../functional';
import InfoEdit from '../InfoEdit/InfoEdit';
import InfoImg from '../InfoImg/InfoImg';
import Media from '../Media/Media';

export default memo(function AccountForm({ user, accountId }: accountFormType) {
  const [userById, setUserById] = useState<initState>(user);
  const chat = useAppSelector((state) => state.chat.chat);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log('Account form rerender');

  useEffect(() => {
    console.log('use effect getUserById');
    if (accountId) {
      getUserById(accountId, setUserById, navigate);
    }
  }, [accountId, navigate, user.login]);

  // Если логин и автор совпадают личный кабинет
  if ((user?.id === accountId && user.login) || (!accountId && user.login)) {
    return (
      <div className="account" id="account-view">
        <div className="accountInfo">
          <InfoImg user={user} />
          <InfoEdit user={user} />
          {!chat && <Media />}
          {!chat && <AccountBtns />}
        </div>
        <DeleteAccount />
      </div>
    );
    // Если нашелся и тот, и тот
  } else if (accountId && userById?.id) {
    dispatch(showChat(false));
    return (
      <div className="account" id="account-view">
        <div className="accountInfo">
          <InfoImg user={userById} />
          <InfoEdit user={userById} />
          <Media />
          <SendBtn user={userById} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
});
