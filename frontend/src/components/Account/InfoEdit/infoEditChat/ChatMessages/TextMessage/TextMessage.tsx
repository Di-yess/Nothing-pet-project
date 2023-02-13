import { API } from '../../../../../../constants';

import { isMessageWithUser, Message, MessageWithUser } from './types';

type Props = {
  message: Message | MessageWithUser;
  userId: number | null;
};

export default function TextMessage({ message, userId }: Props) {
  return (
    <>
      {!isMessageWithUser(message) ? (
        // personal message
        <div
          className={
            userId === message.userId
              ? 'chatMessageContainer sender'
              : 'chatMessageContainer receiver'
          }
          key={message.id}
        >
          <div className="chatMessage">{message.text}</div>
          <div className="messageTime">
            {message.createdAt.toLocaleString().slice(10, -8).replace('T', ' ')}
          </div>
        </div>
      ) : (
        // group message with avatar
        <div
          className={
            userId === message.userId
              ? 'chatMessageContainer sender'
              : 'chatMessageContainer receiver'
          }
          key={message.id}
        >
          {!(userId === message.userId) && (
            <div className="chatMessageAvatar">
              <img
                src={
                  `${API}/avatars/${message.User.avatar.link}.jpg` ||
                  '../imgs/user.png'
                }
                alt=""
              />
            </div>
          )}
          <div className="chatMessage">{message.text}</div>
          <div className="messageTime">
            {message.createdAt.toLocaleString().slice(10, -8).replace('T', ' ')}
          </div>
        </div>
      )}
    </>
  );
}
