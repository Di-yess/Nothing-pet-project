type Props = {
  message: { id: number; text: string; userId: number; createdAt: Date };
  userId: number | null;
};

export default function TextMessage({ message, userId }: Props) {
  return (
    <div
      className={
        userId === message.userId
          ? 'chatMessageContainer sender'
          : 'chatMessageContainer receiver'
      }
      key={message.id}
    >
      <div className="chatMessage">{message.text}</div>
      <div className="messageTime">
        {message.createdAt.toLocaleString().slice(10, -8).replace('T', ' ')}
      </div>
    </div>
  );
}
