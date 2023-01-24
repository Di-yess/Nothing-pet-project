import { useAppSelector } from '../../types/Apphooks';
import AccountBtns from './AccountBtns/AccountBtns';
import InfoEdit from './InfoEdit/InfoEdit';
import InfoImg from './InfoImg/InfoImg';
import Media from './Media/Media';
import './Account.scss';
import Footer from '../LayoutMenu/Footer/Footer';
import { useEffect } from 'react';
import DeleteAccount from './DeleteAccount/DeleteAccount';

export default function Account() {
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    document.querySelector('#account-view')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });
  }, []);

  return (
    <div className="account" id="account-view">
      <div className="accountInfo">
        <InfoImg user={user} />
        <InfoEdit user={user} />
        <Media />
        <AccountBtns />
      </div>
      {/* <div className="feedBacks"></div> личный фидбеки */}
      <DeleteAccount />
    </div>
  );
}
