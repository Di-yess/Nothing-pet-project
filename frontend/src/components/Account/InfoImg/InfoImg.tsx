import { useAppSelector } from '../../../types/Apphooks';
import { initState } from '../../../types/userInit';
import ImgCard from './imgCard/ImgCard';
import ImgChat from './imgChat/ImgChat';
import useSearch from './imgChat/Search/functional/useSearch';
import './InfoImg.scss';

export default function InfoImg({ user }: { user: initState }) {
  const chat = useAppSelector((state) => state.chat.chat);
  // adding all users before work in search
  useSearch();

  return <>{!chat ? <ImgCard user={user} /> : <ImgChat />}</>;
}
