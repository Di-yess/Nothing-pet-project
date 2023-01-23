import { motion as m } from 'framer-motion';
import React from 'react';

// for main page
export const variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

// Анимация
export default function AnimationPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: 'easeInOut', duration: 0.4 }}
      variants={animations}
      // className="content"
    >
      {children}
    </m.div>
  );
}
