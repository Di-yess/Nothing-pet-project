import React from 'react';
import { user } from '../../../../../../types/chatsType';

type Props = {
  personChat: user;
};

export default function PersonImg({ personChat }: Props) {
  return (
    <div className="personImg">
      <img
        src={
          personChat.avatar.link
            ? `http://localhost:5005/avatars/${personChat.avatar.link}.jpg`
            : '../imgs/user.png'
        }
        alt="img"
      />{' '}
    </div>
  );
}
