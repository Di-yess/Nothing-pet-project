import { memo } from 'react';

const emojis = [
  { id: 1, emoji: '🙂' },
  { id: 2, emoji: '😀' },
  { id: 3, emoji: '😄' },
  { id: 4, emoji: '😁' },
  { id: 5, emoji: '😆' },
  { id: 6, emoji: '😅' },
  { id: 7, emoji: '🤣' },
  { id: 8, emoji: '😂' },
  { id: 9, emoji: '😉' },
  { id: 10, emoji: '🥰' },
  { id: 11, emoji: '🤗' },
  { id: 12, emoji: '🤔' },
  { id: 13, emoji: '🙃' },
  { id: 14, emoji: '🤯' },
  { id: 15, emoji: '🥳' },
  { id: 16, emoji: '🥺' },
  { id: 17, emoji: '🙄' },
  { id: 18, emoji: '😕' },
  { id: 19, emoji: '😭' },
  { id: 20, emoji: '😟' },
];

type Props = {
  setShowEmojie: React.Dispatch<React.SetStateAction<boolean>>;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default memo(function EmojiList({
  setShowEmojie,
  setNewMessage,
}: Props) {
  console.log('emoji list');
  return (
    <div className="emojiList">
      {emojis &&
        emojis.map((emoji) => (
          <div
            key={emoji.id}
            className="emojiIcon"
            onClick={() => {
              setNewMessage((prev) => prev + emoji.emoji);
              setShowEmojie((prev) => !prev);
            }}
          >
            {emoji.emoji}
          </div>
        ))}
    </div>
  );
});
