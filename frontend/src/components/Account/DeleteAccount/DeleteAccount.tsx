import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../types/Apphooks';
import './DeleteAccount.scss';
import { deleteAccount } from './functions/deleteAccunt';

export default function DeleteAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return (
    <div
      className="deleteAccount"
      onClick={() => deleteAccount(dispatch, navigate)}
    >
      Delete the account
    </div>
  );
}
