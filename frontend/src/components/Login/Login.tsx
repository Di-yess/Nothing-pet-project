import { motion as m } from 'framer-motion';
import { useState } from 'react';
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

  return (
    <m.form
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.75,
        },
      }}
      className="login"
      onSubmit={(e) => {
        userLogin({ e, fullName, email, password, check, navigate, dispatch });
      }}
    >
      {check && (
        <input
          type="text"
          name="fullName"
          placeholder="full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      )}
      <input
        type="text"
        name="login"
        placeholder="login"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{check ? 'Sign in' : 'Login'}</button>
      <div className="register" onClick={() => setCheck(!check)}>
        {check ? 'Login' : 'Sign in'}
      </div>
    </m.form>
  );
}
