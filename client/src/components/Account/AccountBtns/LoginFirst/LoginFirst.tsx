import { useEffect } from 'react';

type Props = {
  setCheckUser: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginFirst({ setCheckUser }: Props) {
    
  useEffect(() => {
    setTimeout(() => {
      setCheckUser(() => false);
    }, 5000);
  }, [setCheckUser]);

  return <div>LoginFirst</div>;
}
