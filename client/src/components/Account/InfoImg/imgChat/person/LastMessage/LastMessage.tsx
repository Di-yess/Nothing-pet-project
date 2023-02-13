type Props = {
  fullName: string;
  lastMessage: string;
};

export default function LastMessage({ fullName, lastMessage }: Props) {
  return (
    <div className="person-name-message">
      <div className="person-name">{fullName}</div>
      <div className="person-message">
        {lastMessage.length > 17
          ? lastMessage.slice(0, 17) + '...'
          : lastMessage}
      </div>
    </div>
  );
}
