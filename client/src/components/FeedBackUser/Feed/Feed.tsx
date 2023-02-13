import { motion as m } from 'framer-motion';
import { feedType } from '../../../types/feedType';
import { variants } from './functional';
import './Feed.scss';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../constants';

export default function Feed({ feed, i }: { feed: feedType; i: number }) {
  const navigate = useNavigate();
  return (
    <m.div {...variants(i)} className="feedUser">
      <div className="feedImg">
        <img
          src={
            feed.user.avatar.link
              ? `${API}/avatars/${feed.user.avatar.link}.jpg`
              : 'imgs/user.png'
          }
          alt="feedImg"
          onClick={() => navigate(`/account/${feed.user.id}`)}
        />
      </div>
      <div className="feedUserText">{feed.text}</div>
      <div className="feedUserName">
        {'- '}
        {feed.user.fullName}
      </div>
    </m.div>
  );
}
