import { motion as m } from 'framer-motion';
import { useAppSelector } from '../../../../types/Apphooks';
import { variants } from './functional';
import './ImgChat.scss';
import Person from './person/Person';
import Search from './Search/Search';

export default function ImgChat() {
  const chats = useAppSelector((state) => state.chats.chats);
  
  return (
    <m.div {...variants} className="infoImg" style={{ height: '500px' }}>
      <div className="person-wrapper">
        <Search />
        {chats && chats.map((chat) => <Person chat={chat}/>)}
      </div>
    </m.div>
  );
}
