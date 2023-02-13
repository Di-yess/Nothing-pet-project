import { motion as m } from 'framer-motion';
import { memo } from 'react';

export default memo(function ArrowRight() {
  return (
    <m.svg
      whileTap={{ scale: 0.9 }}
      width="26"
      height="44"
      viewBox="0 0 26 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.6245 43.0422C0.680736 42.0984 0.680735 40.5683 1.6245 39.6245L19.249 22L1.6245 4.37551C0.680732 3.43174 0.680732 1.90159 1.6245 0.957824C2.56827 0.0140578 4.09842 0.0140577 5.04218 0.957824L24.3755 20.2912C25.3193 21.2349 25.3193 22.7651 24.3755 23.7088L5.04219 43.0422C4.09842 43.9859 2.56827 43.9859 1.6245 43.0422Z"
        fill="black"
      />
    </m.svg>
  );
});
