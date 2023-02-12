import React from 'react';
import { API } from '../../../../../../constants';
import { IAllUsers } from '../../../../../../types/Interfaces';

type Props = {
  user: IAllUsers;
};

export default function GroupChatItemImg({ user }: Props) {
  return (
    <div className="groupChatItemImg">
      <img
        src={
          user.avatar.link
            ? `${API}/avatars/${user.avatar.link}.jpg`
            : '../imgs/user.png'
        }
        alt="userIcon"
      />
    </div>
  );
}
