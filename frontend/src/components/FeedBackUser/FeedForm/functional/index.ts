import React from 'react';

export type feedFormProps = {
  feedText: string;
  setFeedText: React.Dispatch<React.SetStateAction<string>>;
  setTellBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

export type textFeedProps = {
  feedText: string;
  setFeedText: React.Dispatch<React.SetStateAction<string>>;
};

export const variants = {
  initial: { opacity: 0, y: 100, x: -125 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -250 },
  transition: { duration: 0.35 },
};
