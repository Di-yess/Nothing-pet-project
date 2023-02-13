import { memo, useContext, useState } from 'react';
import { postGroupMessage } from 'store/asyncThunk/postGroupMessage';
import { postMessage } from 'store/asyncThunk/postMessage';
import { GroupChatContext } from 'store/localContext/GroupChatContext';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import Send from '../icons/Send';
import EmojiList from './EmojiList/EmojiList';
import './EmojiList/EmojiList.scss';
import MemoInput from './MemoInput/MemoInput';

type Props = {
  groupChat?: boolean;
};

export default memo(function MessageInput({ groupChat }: Props) {
  const dispatch = useAppDispatch();
  const { createGroupChat } = useContext(GroupChatContext);
  const chatId = useAppSelector((state) => state.chat.chosenChat);
  const [showEmojie, setShowEmojie] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  console.log('groupChat', groupChat);

  return (
    <form
      className={createGroupChat ? 'sendMessageInput blur' : 'sendMessageInput'}
      onSubmit={(e) => {
        e.preventDefault();
        // post message to person
        if (chatId && !groupChat) {
          dispatch(
            postMessage({
              newMessage,
              setNewMessage,
              chatId,
            })
          );
        }

        // post group message
        if (chatId && groupChat) {
          dispatch(
            postGroupMessage({
              newMessage,
              setNewMessage,
              chatId: chatId.toString(),
            })
          );
        }
      }}
    >
      {' '}
      <MemoInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        groupChat={groupChat}
      />
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
