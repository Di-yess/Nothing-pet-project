import { feedType } from '../../../types/feedType';
import './Feed.scss';

export default function Feed({ feed }: { feed: feedType }) {
  return (
    <div className="feedUser">
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
    </div>
  );
}
