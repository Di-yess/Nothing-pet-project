import { useAppSelector } from '../../../types/Apphooks';
import { initState } from '../../../types/userInit';
import ImgCard from './imgCard/ImgCard';
import ImgChat from './imgChat/ImgChat';
import './InfoImg.scss';

export default function InfoImg({ user }: { user: initState }) {
  
  const chat = useAppSelector((state) => state.chat.chat);
  return <>{!chat ? <ImgCard user={user} /> : <ImgChat />}</>;
}
