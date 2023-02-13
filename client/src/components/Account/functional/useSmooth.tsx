import { useEffect } from 'react';

function useSmooth() {
  useEffect(() => {
    document.querySelector('#account-view')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });
  }, []);
}

export default useSmooth;
