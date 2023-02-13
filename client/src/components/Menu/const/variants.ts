export const variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
