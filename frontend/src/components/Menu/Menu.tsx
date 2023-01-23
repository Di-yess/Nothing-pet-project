import { motion as m } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../types/Apphooks';
import Arrow from './const/Arrow';
import { variants } from './const/variants';
import './Menu.scss';

export default function Menu({ children }: { children: React.ReactNode }) {
  const login = useAppSelector((state) => state.user.login);
  return (
    <m.div
      className="menu"
      initial="offscreen"
      animate="onscreen"
      exit="exit"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="topMenu">
        <div className="iconMenu">
          <Link to="/">Nothing</Link>
        </div>
        <div className="rightMenu">
          <div className="liRightMenu">About us</div>
          <div className="liRightMenu">Contacts</div>
          {login ? (
            <div className="liRightMenu">
              <Link to="/account">Account</Link>
            </div>
          ) : (
            <div className="liRightMenu">
              {' '}
              <Link to="/login">Sign in</Link>
            </div>
          )}
        </div>
        <div className="explore">
          <div className="exploreText">Explore nothing</div>
          <Arrow />
        </div>
      </div>
      {children}
    </m.div>
  );
}
