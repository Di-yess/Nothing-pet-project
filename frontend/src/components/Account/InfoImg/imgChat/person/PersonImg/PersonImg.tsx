import React from 'react';
import { API } from '../../../../../../constants';
import { user } from 'types/chatsType';

type Props = {
  personChat: user;
};

export default function PersonImg({ personChat }: Props) {
  return (
    <div className="personImg">
      <img
        src={
          personChat.avatar.link
            ? `${API}/avatars/${personChat.avatar.link}.jpg`
            : '../imgs/user.png'
        }
        alt="img"
      />{' '}
    </div>
  );
}
