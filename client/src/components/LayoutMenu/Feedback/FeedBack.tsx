import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { variants } from '../../Test/AnimationPage';
import './FeedBack.scss';
import ArrowLeft from './feedBackForm/arrow/ArrowLeft';
import ArrowRight from './feedBackForm/arrow/ArrowRight';
import FeedBackForm from './feedBackForm/FeedBackForm';
import { feeds, nextFeed, prevFeed } from './feedBackForm/feedInfo';

export default function FeedBack() {
  const [feed, setFeed] = useState(feeds[0]);
  return (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
      className="feedBackForms"
    >
      <div className="slider">
        <div className="arrowLeft" onClick={() => prevFeed({ feed, setFeed })}>
          <ArrowLeft />
        </div>
        <div className="arrowRight" onClick={() => nextFeed({ feed, setFeed })}>
          <ArrowRight />
        </div>
        <FeedBackForm feed={feed} key={feed.id} />
      </div>
    </m.div>
  );
}
