import React, { useCallback, useEffect, useState } from 'react';
import { Message } from '../../../../../../types/chatsType';

export default function useScrollLast(
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>,
  messages: Message[] | null
) {
  const [scrollPos, setScrollPos] = useState<number>(400);

  const scrollHandler = (e: Event) => {
    setScrollPos(window.scrollY);
  };

  const scrollToBottom = useCallback(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  },[lastMessageRef]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    if (scrollPos > 350) scrollToBottom();

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [messages, lastMessageRef, scrollPos, scrollToBottom]);
}
