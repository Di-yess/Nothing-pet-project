import { IMessageGroup } from 'types/Interfaces';

type Props = {
  messages: IMessageGroup[] | null;
};

export default function GroupChat({ messages }: Props) {
  console.log('messasge in group chat', messages);
  return <div>Group chat here</div>;
}
