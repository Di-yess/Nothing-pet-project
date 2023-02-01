type Props = {
  e: React.FormEvent<HTMLFormElement>;
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
};

export async function postMessage({ e, newMessage, setNewMessage }: Props) {
  e.preventDefault();
  setNewMessage(() => '');
  console.log('send message');
}

// type SendMessage = (
//   e: React.FormEvent<HTMLFormElement>,
//   newMessage: string,
//   setNewMessage: React.Dispatch<React.SetStateAction<string>>
// ) => void;

// export const sendMessage: SendMessage = async (
//   e,
//   newMessage,
//   setNewMessage
// ) => {
//   e.preventDefault();
//   setNewMessage(() => '');
//   console.log('send message');
// };

// отправить запрос на создание нового сообщения в чате
// sender id, receiver id, chat id
// добавить в редакс , либо за рефетчить
