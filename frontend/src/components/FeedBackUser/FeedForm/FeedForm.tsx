import { motion as m } from 'framer-motion';
import { API } from '../../../constants';
import { useAppSelector } from '../../../types/Apphooks';
import Quote from '../functions/Quote';
import DeleteBtn from './DeleteBtn/DeleteBtn';
import './FeedForm.scss';
import { feedFormProps, variants } from './functional';
import TextFeed from './TextFeed/TextFeed';

export default function FeedForm(props: feedFormProps) {
  const user = useAppSelector((state) => state.user);
  const { feedText, setFeedText, setTellBtn } = props;

  return (
    <m.div {...variants} className="feedForm">
      <div className="feedFormImg">
        <img
          src={
            user.avatar.link
              ? `${API}/avatars/${user.avatar.link}.jpg`
              : 'imgs/user.png'
          }
          alt="feedImg"
        />
      </div>
      <div className="qouteFeed">
        <Quote />
      </div>
      <TextFeed feedText={feedText} setFeedText={setFeedText} />
      <div className="feedFormName">
        {'- '}
        {user.fullName}
      </div>
      <DeleteBtn setTellBtn={setTellBtn} />
    </m.div>
  );
}
