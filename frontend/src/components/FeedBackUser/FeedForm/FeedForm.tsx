import { motion as m } from 'framer-motion';
import { useAppSelector } from '../../../types/Apphooks';
import Quote from '../functions/Quote';
import DeleteIcon from './deleteIcon';
import './FeedForm.scss';

export default function FeedForm({
  feedText,
  setFeedText,
}: {
  feedText: string;
  setFeedText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const user = useAppSelector((state) => state.user);

  function closeForm() {
    
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 100, x: -125 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -250 }}
      transition={{ duration: 0.35 }}
      className="feedForm"
    >
      <div className="feedFormImg">
        <img src={user.img || 'imgs/user.png'} alt="feedImg" />
      </div>
      <div className="qouteFeed">
        <Quote />
      </div>
      <textarea
        name="postContent"
        value={feedText}
        onChange={(e) => {
          setFeedText(e.target.value);
        }}
        rows={4}
        cols={29}
        maxLength={115}
        placeholder="Type your feedback here"
        id="feedTextArea"
      />
      <div className="feedFormName">
        {'- '}
        {user.fullName}
      </div>
      <div className="feedFormDelete" onClick={(e) => closeForm()}>
        <DeleteIcon />
      </div>
    </m.div>
  );
}
