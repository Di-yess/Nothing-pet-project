import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { variants } from '../../Test/AnimationPage';
import './PreFooter.scss';

export default function PreFooter() {
  return (
    <m.div
      className="preFooter"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="preFooterText">Hesitate? Don`t.</div>
      <button>
        <Link to="/login">Sign in</Link>
      </button>
    </m.div>
  );
}
