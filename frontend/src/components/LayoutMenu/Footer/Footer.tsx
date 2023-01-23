import './Footer.scss';
import Git from './Media/Git';
import Telegram from './Media/Telegram';
import Twitter from './Media/Twitter';

export default function Footer() {
  return (
    <div className="footer">
      <div className="media">
        <ul>
          <li>
            <Git />
          </li>
          <li>
            <Telegram />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
      <div className="logo">
        Nothing
        <div className="nothingTodo">
          *Nothing has nothing to do with{' '}
          <a href="https://intl.nothing.tech/">Nothing Company</a>
        </div>
      </div>
      <div className="footerMenu">
        <ul>
          <li>About us</li>
          <li>Contacts</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
}
