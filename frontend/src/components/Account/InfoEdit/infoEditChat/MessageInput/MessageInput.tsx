import { memo, useContext, useState } from 'react';
import { postMessage } from 'store/asyncThunk/postMessage';
import { GroupChatContext } from 'store/localContext/GroupChatContext';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import Send from '../icons/Send';
import EmojiList from './EmojiList/EmojiList';
import './EmojiList/EmojiList.scss';
import MemoInput from './MemoInput/MemoInput';

export default memo(function MessageInput() {
  const dispatch = useAppDispatch();
  const { createGroupChat } = useContext(GroupChatContext);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const [showEmojie, setShowEmojie] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  // console.log('messageInput');

  return (
    <form
      className={createGroupChat ? 'sendMessageInput blur' : 'sendMessageInput'}
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
      <MemoInput newMessage={newMessage} setNewMessage={setNewMessage} />
      <button type="submit">
        <Send />
      </button>
      <div className="emoji">
        <div className="chooseEmoji" onClick={() => setShowEmojie(!showEmojie)}>
          😄
        </div>
        {showEmojie && (
          <EmojiList
            setShowEmojie={setShowEmojie}
            setNewMessage={setNewMessage}
          />
        )}
      </div>
    </form>
  );
});
