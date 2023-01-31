import { allUsersType } from '../../../../../../../types/userInit';

export default function ShowPerson({ user }: { user: allUsersType }) {
  async function createChat(user: allUsersType) {
    
  }
  return (
    <div className="showPerson" key={user.id} onClick={() => createChat(user)}>
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
  );
}
