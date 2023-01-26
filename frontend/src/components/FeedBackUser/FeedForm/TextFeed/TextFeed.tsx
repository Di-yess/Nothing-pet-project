import { textFeedProps } from '../functional';

export default function TextFeed({ feedText, setFeedText }: textFeedProps) {
  return (
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
  );
}
