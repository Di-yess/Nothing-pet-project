// Создание комментария через контролируемую textarea
import axios from 'axios';
import { putFeeds } from '../../../store/feedSlice';
import { feedFormType } from './types';
import { feedType } from '../../../types/feedType';

export async function actFeedForm({
  e,
  setTellBtn,
  tellBtn,
  feedText,
  setFeedText,
  user,
  dispatch,
}: feedFormType) {
  const main = document.querySelector('.feedBacks');

  if (tellBtn && feedText.trim().length >= 5) {
    setFeedText('');
    try {
      // fetch
      const response = await axios.post('/feeds', {
        userId: user.id,
        text: feedText,
      });
      const newFeed: feedType = response.data;
      dispatch(putFeeds([newFeed]));
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
    console.log(textArea);
    const warning = document.createElement('p');
    warning.innerText = '*Need at least 5 symbols';
    warning.setAttribute('id', 'warning');
    warning.style.position = 'absolute';
    warning.style.bottom = '15px';
    warning.style.color = '#434343';
    textArea?.appendChild(warning);
  }
}
