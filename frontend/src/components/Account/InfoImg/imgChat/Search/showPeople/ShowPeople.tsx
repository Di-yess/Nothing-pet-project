import { allUsersType } from '../../../../../../types/userInit';
import './ShowPeople.scss';

export default function ShowPeople({ showUsers }: { showUsers: allUsersType[] }) {
  return (
    <div className="showPeople">
      {showUsers.map((user) => (
        <div className="showPerson">
          <div className="showPersonImg">
            <img
              src={
                user.avatar.link
                  ? `http://localhost:5005/avatars/${user.avatar.link}.jpg`
                  : '../imgs/user.png'
              }
              alt="userIcon"
            />
          </div>
          <div className="showPersonName">{user.fullName}</div>
        </div>
      ))}
    </div>
  );
}
