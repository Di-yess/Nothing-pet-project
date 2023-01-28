export const variants = (i: number) => ({
  initial: { opacity: 0, x: 200, transition: { duration: 0.25 } },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 250, transition: { duration: 0.25 } },
  transition: { delay: 0.15 * i, type: 'spring', stiffness: 75 },
});
