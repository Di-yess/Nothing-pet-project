import { motion as m } from 'framer-motion';
import { variants } from './functional';
import './ImgChat.scss';
import Person from './person/Person';
import Search from './Search/Search';

export default function ImgChat() {
  return (
    <m.div {...variants} className="infoImg" style={{ height: '500px' }}>
      <div className="person-wrapper">
        <Search />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </m.div>
  );
}
