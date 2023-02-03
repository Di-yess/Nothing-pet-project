import { useState } from 'react';
import { postMessage } from '../../../../../store/asyncThunk/postMessage';
import { useAppDispatch, useAppSelector } from '../../../../../types/Apphooks';
import Send from '../icons/Send';

export default function MessageInput() {
  const dispatch = useAppDispatch();
  const chatId = useAppSelector((state) => state.chat.chosenChat);

  const [newMessage, setNewMessage] = useState('');
  return (
    <form
      className="sendMessageInput"
      onSubmit={(e) => {
        e.preventDefault();
        if (chatId) {
          dispatch(
            postMessage({
              newMessage,
              setNewMessage,
              chatId,
            })
          );
        }
      }}
    >
      {' '}
      <input
        type="text"
        placeholder="Type message"
        value={newMessage}
        onChange={(e) => setNewMessage(() => e.target.value)}
      />
      <button type="submit">
        <Send />
      </button>
    </form>
  );
}
