import { AnimatePresence, motion as m } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../types/Apphooks';
import { userLogin } from './functions/userLogin';
import './Login.scss';

export default function Login() {
  const [check, setCheck] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    userLogin({
      e,
      fullName,
      email,
      password,
      check,
      navigate,
      dispatch,
    });
  };

  return (
    <m.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.75,
        },
      }}
    >
      <form
        className="login"
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={(e) => {
        //   userLogin({
        //     e,
        //     fullName,
        //     email,
        //     password,
        //     check,
        //     navigate,
        //     dispatch,
        //   });
        // }}
      >
        <div className="loginName">Nothing</div>
        <AnimatePresence mode="sync">
          {check && (
            <m.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 250 }}
              transition={{
                duration: 0.3,
              }}
              className="inputDiv"
            >
              <input
                type="text"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <div className="inputDivText">Full name</div>
            </m.div>
          )}
        </AnimatePresence>
        <div className="inputDiv">
          <input
            type="text"
            name="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="inputDivText">Login</div>
        </div>
        <div className="inputDiv">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="inputDivText">Password</div>
        </div>
        <m.button whileTap={{ scale: 1.25 }} type="submit">
          {check ? 'Sign up' : 'Login'}
        </m.button>
        <div className="register" onClick={() => setCheck(!check)}>
          {check ? 'Login' : 'Sign up'}
        </div>
      </form>
    </m.div>
  );
}
