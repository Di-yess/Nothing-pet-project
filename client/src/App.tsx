import { AnimatePresence } from 'framer-motion';
import Error from 'pages/Error';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Account from './components/Account/Account';
import FeedBack from './components/FeedBackUser/FeedBackUser';
import Layout from './components/Layout/Layout';
import LayoutMenu from './components/LayoutMenu/LayoutMenu';
import Login from './components/Login/Login';
import { getUser } from './store/asyncThunk/getUser';
import { useAppDispatch, useAppSelector } from './types/Apphooks';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const serverStatus =
    useAppSelector((state) => state.user.error) === 'Network Error';

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {serverStatus ? (
        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<LayoutMenu />} />
              <Route path="feedback" element={<FeedBack />} />
              <Route path="account" element={<Account />} />
              <Route path="account/:id" element={<Account />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
