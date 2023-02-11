import { useState } from 'react';
import { API } from '../../../../../../constants';
import { allUsersType } from '../../../../../../types/userInit';

export default function GroupUsers({ users }: { users: allUsersType[] }) {
  const [groupUsers, setGroupUsers] = useState(
    [...users].map((user) => ({ ...user, chosen: false }))
  );
  
  // добавить количество отображенных(мб сделать все-таки слайс?*)
  // мб да, сделать все-таки слайс

  return (
    <div className="groupUsers">
      {groupUsers &&
        groupUsers.map((user) => (
          <div
            className={user.chosen ? 'groupUser chosenUser' : 'groupUser'}
            onClick={() => {
              console.log('onclick', groupUsers);
              setGroupUsers((prev) =>
                prev.map((prevUser) =>
                  prevUser.id === user.id
                    ? { ...prevUser, chosen: !prevUser.chosen }
                    : { ...prevUser }
                )
              );
            }}
            key={user.id}
          >
            <div className="groupUserImg">
              <img
                src={
                  user.avatar.link
                    ? `${API}/avatars/${user.avatar.link}.jpg`
                    : '../imgs/user.png'
                }
                alt="groupUser"
              />
            </div>
            <div className="groupUserName">
              <div>{user.fullName}</div>
            </div>
          </div>
        ))}
    </div>
  );
}
