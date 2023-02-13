import { AnimatePresence } from 'framer-motion';
import { feedType } from '../../../types/feedType';
import Feed from '../Feed/Feed';

export default function FeedBacks({ feeds }: { feeds: feedType[] }) {
  return (
    <div className="feedBacks">
      <AnimatePresence mode="sync">
        {feeds.map((feed, i) => (
          <Feed feed={feed} i={i} key={feed.id} />
        ))}
      </AnimatePresence>
    </div>
  );
}
