import './InfoImg.scss';
import { initState } from '../../../types/userInit';

export default function InfoImg({user}: {user:initState}) {
  return (
    <div className="infoImg">
      <div className="userImg">
        <img src={user.img ? user.img : 'imgs/user.png'} alt="userIcon" />
      </div>
      <div className="userName">{user.fullName}</div>
      <div className="userProfession">{user.profession}</div>
      <div className="userLocation">{user.adress}</div>
    </div>
  );
}
