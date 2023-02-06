import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Message } from '../../../../../../types/chatsType';

export default function useScrollLast(
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>,
  messages: Message[] | null,
  countMessageRef: React.MutableRefObject<number | null>
) {
  const [scrollPos, setScrollPos] = useState<number>(400);
  const firstScroll = useRef(false);

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
  }, [lastMessageRef]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    // Скролл при открывании чата в первый раз
    if (!firstScroll.current) {
      scrollToBottom();
      firstScroll.current = true;
      console.log('firstScroll.current', firstScroll.current);
    }

    // Скролл только тогда, когда прилетело новое сообщение
    if (
      scrollPos > 350 &&
      messages &&
      countMessageRef.current &&
      messages.length > countMessageRef.current
    ) {
      scrollToBottom();
      countMessageRef.current = messages.length;
      console.log(
        'change number of messageRef in useScroll',
        countMessageRef.current
      );
    }

    return () => {
      document.removeEventListener('scroll', () => {
        // setScrollPos(window.scrollY);
        // firstScroll.current = false;
        //console.log('firstScroll.current', firstScroll.current);
      });
    };
  }, [messages, countMessageRef, lastMessageRef, scrollPos, scrollToBottom]);
}
