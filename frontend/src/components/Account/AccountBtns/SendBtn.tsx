import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findOrCreateChat } from 'store/asyncThunk/findOrCreateChat';
import { useAppDispatch, useAppSelector } from 'types/Apphooks';
import { initState } from 'types/userInit';
import LoginFirst from './LoginFirst/LoginFirst';

export default function SendBtn({ user }: { user: initState }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userLogged = useAppSelector((state) => state.user.login);
  const [checkUser, setCheckUser] = useState(false);

  return (
    <div className="accountBtns writeBtn">
      <button
        onClick={() => {
          if (userLogged) {
            dispatch(findOrCreateChat(user.id));
            navigate('/account');
          } else {
            setCheckUser(true);
          }
        }}
      >
        Write
      </button>

      {checkUser && <LoginFirst setCheckUser={setCheckUser} />}
    </div>
  );
}

// получить id user-a. Узнать, если чат с этим юзером.
// Да - перенести в аккаунт с чатами с chosen chat айди юзера
// Нет - создать чат и присвоть chosen chat айди юзера

// Если нет чата просто создают и перебрасываю на аккаунт, где подтягиваются все чаты
