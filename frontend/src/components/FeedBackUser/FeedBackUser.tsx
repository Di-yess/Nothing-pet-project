import { useEffect } from 'react';
import { getFeeds } from '../../store/asyncThunk/getFeeds';
import { useAppDispatch, useAppSelector } from '../../types/Apphooks';
import Feed from './Feed/Feed';
import './FeedBackUser.scss';

export default function FeedBack() {
  const feeds = useAppSelector((state) => state.feeds.feeds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!feeds.length) dispatch(getFeeds());
  }, [dispatch]);

  return (
    <>
      <div className="feedBacks">
        {feeds.map((feed) => (
          <Feed feed={feed} />
        ))}
      </div>
      <button>Tell us</button>
    </>
  );
}
