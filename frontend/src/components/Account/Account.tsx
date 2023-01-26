import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../types/Apphooks';
import './Account.scss';
import AccountForm from './AccountForm/AccountForm';
import useSmooth from './functional/useSmooth';

export default function Account() {
  const user = useAppSelector((state) => state.user);
  const accountId = useParams().id;

  console.log('accountId', accountId);
  
  useSmooth();

  return <AccountForm user={user} accountId={Number(accountId)} />;
}
