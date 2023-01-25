import { motion as m } from 'framer-motion';
import { feedType } from '../../../types/feedType';
import './Feed.scss';

const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export default function Feed({ feed, i }: { feed: feedType; i: number }) {
  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.15 * i }}
      className="feedUser"
    >
      <div className="feedImg">
        <img
          src={feed.user.avatar.link ? feed.user.avatar.link : 'imgs/user.png'}
          alt="feedImg"
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
