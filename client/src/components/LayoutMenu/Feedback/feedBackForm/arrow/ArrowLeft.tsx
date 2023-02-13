import { motion as m } from 'framer-motion';
import { memo } from 'react';

export default memo(function ArrowLeft() {
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
        d="M24.3755 0.957825C25.3193 1.90159 25.3193 3.43174 24.3755 4.37551L6.75104 22L24.3755 39.6245C25.3193 40.5683 25.3193 42.0984 24.3755 43.0422C23.4318 43.9859 21.9016 43.9859 20.9578 43.0422L1.62451 23.7088C0.680745 22.7651 0.680745 21.2349 1.62451 20.2912L20.9578 0.957825C21.9016 0.0140582 23.4318 0.0140582 24.3755 0.957825Z"
        fill="black"
      />
    </m.svg>
  );
});
