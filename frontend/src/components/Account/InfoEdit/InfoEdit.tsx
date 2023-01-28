import './InfoEdit.scss';
import { initState } from '../../../types/userInit';
import { useAppDispatch } from '../../../types/Apphooks';
import {
  changeAdress,
  changeEmail,
  changeName,
  changePhone,
  changeProfession,
} from '../../../store/userSlice';
import InfoMenu from './infoMenu/InfoMenu';

export default function InfoEdit({ user }: { user: initState }) {
  const dispatch = useAppDispatch();

  return (
    <div className="infoEdit">
      <InfoMenu />
      <div className="info">
        <div className="infotype">Full Name</div>
        <input
          type="text"
          value={user.fullName ? user.fullName : ''}
          disabled
          className="infoInput"
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
        />
      </div>
      <div className="info">
        <div className="infotype">Email</div>
        <input
          className="infoInput"
          type="text"
          value={user.email ? user.email : ''}
          disabled
          onChange={(e) => {
            dispatch(changeEmail(e.target.value));
          }}
        />
      </div>
      <div className="info">
        <div className="infotype">Phone</div>
        <input
          className="infoInput"
          type="text"
          value={user.phone ? user.phone : ''}
          disabled
          onChange={(e) => {
            dispatch(changePhone(e.target.value));
          }}
        />
      </div>
      <div className="info">
        <div className="infotype">Profession</div>
        <input
          type="text"
          value={user.profession ? user.profession : ''}
          disabled
          className="infoInput"
          onChange={(e) => {
            dispatch(changeProfession(e.target.value));
          }}
        />
      </div>
      <div className="info">
        <div className="infotype">Adress</div>
        <input
          type="text"
          value={user.adress ? user.adress : ''}
          disabled
          className="infoInput"
          onChange={(e) => {
            dispatch(changeAdress(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
