import { motion as m } from 'framer-motion';
import './FeedBackForm.scss';
import { feedFace } from './feedInfo';

export default function FeedBackForm({ feed }: { feed: feedFace }) {
  return (
    <m.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      // transition={{  duration: 0.35 }}
      className="feed"
    >
      <div className="feedImg">
        <img src={feed.img} alt="img" />
      </div>
      <div className="feedAbout">
        <div className="feedText">{feed.text}</div>
        <div className="feedName">{feed.name}</div>
      </div>
    </m.div>
  );
}
