import GitBlack from './icons/GitBlack';
import LinkedIn from './icons/LinkedIn';
import TelegramColor from './icons/TelegramColor';
import './Media.scss';

export default function Media() {
  return (
    <div className="accountMedia">
      <TelegramColor />
      <GitBlack />
      <LinkedIn />
    </div>
  );
}
