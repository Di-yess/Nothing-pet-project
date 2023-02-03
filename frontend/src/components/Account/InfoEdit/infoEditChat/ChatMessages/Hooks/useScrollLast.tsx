import React, { useEffect, useState } from 'react';
import { Message } from '../../../../../../types/chatsType';

export default function useScrollLast(
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>,
  messages: Message[] | null
) {
  const [scrollPos, setScrollPos] = useState<number>(400);

  const scrollHandler = (e: Event) => {
    setScrollPos(window.scrollY);
  };

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    if (scrollPos > 350) scrollToBottom();

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [messages, lastMessageRef]);
}
