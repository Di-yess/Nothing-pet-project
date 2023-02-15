import { Link } from 'react-router-dom';
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
            <a
              href="https://github.com/Di-yess"
              target="_blank"
              rel="noreferrer"
            >
              <Git />
            </a>
          </li>
          <li>
            <a href="https://t.me/Di_yess" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
      <div className="logo">
        <div className="logoName">Nothing</div>
        <div className="nothingTodo">
          *Nothing has nothing to do with{' '}
          <a href="https://intl.nothing.tech/">Nothing Company</a>
        </div>
      </div>
      <div className="footerMenu">
        <ul>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/feedback">Tell us</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
