import { motion as m } from 'framer-motion';
import GroupSearch from '../../../InfoImg/imgChat/Search/GroupSearch';
import './CreateGroupChat.scss';

export default function CreateGroupChat() {
  return (
    <m.div
      initial={{ opacity: 0, y: 36, x: -200 }}
      animate={{ opacity: 1, y: 36, x: -156 }}
      exit={{ opacity: 0, y: 36, x: -75 }}
      transition={{ duration: 0.35 }}
      className="createGroupChat"
    >
      <GroupSearch />
    </m.div>
  );
}
