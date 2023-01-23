import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../types/Apphooks';
import './AccountBtns.scss';
import { edit, logout } from './functions/edit';

export default function AccountBtns() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="accountBtns">
      <button onClick={(e) => edit(e, user)}>Edit</button>
      <button className="logout" onClick={() => logout(dispatch, navigate)}>
        Logout
      </button>
    </div>
  );
}
