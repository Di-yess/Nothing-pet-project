import { motion as m } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'types/Apphooks';
import Footer from '../LayoutMenu/Footer/Footer';
import Arrow from './const/Arrow';
import { variants } from './const/variants';
import './Menu.scss';

export default function Menu({ children }: { children: React.ReactNode }) {
  const login = useAppSelector((state) => state.user.login);
  const ref = useRef<HTMLDivElement | null>(null);
  const rightMenuRef = useRef<HTMLDivElement | null>(null);

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
        <div className="rightMenu" ref={rightMenuRef}>
          <div className="liRightMenu">
            <Link to="/">About us</Link>
          </div>
          <div className="liRightMenu">
            <Link to="/feedback">Tell us</Link>
          </div>
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
        <div
          ref={ref}
          className="mobileRightMenu"
          onClick={() => {
            ref.current?.classList.toggle('actionMenu');
            rightMenuRef.current?.classList.toggle('showMenu');
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="explore">
          <div className="exploreText">Explore nothing</div>
          <Arrow />
        </div>
      </div>
      {children}
      <Footer />
    </m.div>
  );
}
