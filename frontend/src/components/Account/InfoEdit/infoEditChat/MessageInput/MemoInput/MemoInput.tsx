import React from 'react';

type Props = {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function MemoInput({ newMessage, setNewMessage }: Props) {
  // console.log('memoinput');
  return (
    <input
      type="text"
      placeholder="Type message"
      value={newMessage}
      onChange={(e) => setNewMessage(() => e.target.value)}
    />
  );
}
