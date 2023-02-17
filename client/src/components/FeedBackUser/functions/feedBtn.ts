// Создание комментария через контролируемую textarea
import axios from 'axios';
import { putFeeds } from '../../../store/feedSlice';
import { feedFormType } from './types';
import { feedType } from '../../../types/feedType';
import { API } from '../../../constants';

export async function actFeedForm(props: feedFormType) {
  const main = document.querySelector('.feedBacks');
  const { setTellBtn, tellBtn, feedText, setFeedText, user, dispatch } = props;
  // you can`t post unlogged
  if (!user.login) return;

  if (tellBtn && feedText.trim().length >= 5) {
    setFeedText('');
    try {
      const { data } = await axios<feedType>({
        url: API + '/feeds',
        method: 'post',
        data: { userId: user.id, text: feedText },
        withCredentials: true,
      });

      // Добавление ?
      dispatch(putFeeds([data]));
      // blur
      main?.classList.toggle('blur');
      // close form
      setTellBtn((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  } else if (tellBtn && feedText.trim().length < 5) {
    // add Warning
    addWarning();
  } else if (!tellBtn) {
    main?.classList.toggle('blur');
    setTellBtn((prev) => !prev);
  }
}

function addWarning() {
  if (!document.querySelector('#warning')) {
    const textArea = document.querySelector('.feedForm');
    const warning = document.createElement('p');
    warning.innerText = '*Need at least 5 symbols';
    warning.setAttribute('id', 'warning');
    warning.style.position = 'absolute';
    warning.style.bottom = '15px';
    warning.style.color = '#434343';
    textArea?.appendChild(warning);
  }
}
