import { AnimatePresence, motion as m } from 'framer-motion';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'types/Apphooks';
import { userLogin } from './functions/userLogin';
import './Login.scss';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

export default function Login() {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: 'onTouched' });

  const onSubmit: SubmitHandler<FormValues> = (data, e: any) => {
    const { fullName, email, password } = data;
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
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginName">Nothing</div>
        
        {/* Name Input */}
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
              <div className="errorMessage">
                {errors?.fullName?.message?.toString()}
              </div>
              <input
                style={errors?.fullName && { border: '1px solid red' }}
                required
                {...register('fullName', {
                  required: 'Your name please',
                  minLength: 1,
                })}
              />
              <div className="inputDivText">Full name</div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Email Input */}
        <div className="inputDiv">
          {errors?.email && (
            <div className="errorMessage">
              {errors?.email?.message?.toString()}
            </div>
          )}
          <input
            style={errors?.email && { border: '1px solid #f47373' }}
            type="text"
            required
            {...register('email', {
              required: 'Email required',
              pattern: {
                value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                message: 'Invalid email',
              },
            })}
          />
          <div className="inputDivText">Login</div>
        </div>

        {/* Password Input */}
        <div className="inputDiv">
          <div className="errorMessage">
            {errors?.password?.message?.toString()}
          </div>
          <input
            style={errors?.password && { border: '1px solid #f47373' }}
            type="password"
            required
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 2,
                message: 'min 2 characters',
              },
            })}
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
