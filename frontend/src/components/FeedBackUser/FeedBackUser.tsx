import { AnimatePresence, motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getFeeds } from '../../store/asyncThunk/getFeeds';
import { useAppDispatch, useAppSelector } from '../../types/Apphooks';
import './FeedBackUser.scss';
import FeedForm from './FeedForm/FeedForm';
import FeedBacks from './Feeds/FeedBacks';
import { actFeedForm } from './functions/feedBtn';
import Quote from './functions/Quote';

export default function FeedBack() {
  const feeds = useAppSelector((state) => state.feeds.feeds);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [tellBtn, setTellBtn] = useState(false);
  const [feedText, setFeedText] = useState('');

  useEffect(() => {
    if (!feeds.length) dispatch(getFeeds());
  }, [dispatch]);

  return (
    <div className="feedMain">
      <Quote />
      <FeedBacks feeds={feeds} />
      <div className="btnTellUs">
        <AnimatePresence>
          {tellBtn && (
            <FeedForm
              feedText={feedText}
              setFeedText={setFeedText}
              setTellBtn={setTellBtn}
            />
          )}
        </AnimatePresence>
        {user.login ? (
          <m.button
            whileTap={{ scale: 1.15 }}
            onClick={(e) =>
              actFeedForm({
                feedText,
                tellBtn,
                setTellBtn,
                setFeedText,
                user,
                dispatch,
              })
            }
          >
            {!tellBtn ? 'Tell us' : 'Send'}
          </m.button>
        ) : (
          <div style={{ margin: '5vh auto' }}></div>
        )}
      </div>
    </div>
  );
}
