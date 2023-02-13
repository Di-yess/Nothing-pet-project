import { MiddleWare } from '../types';

const checkUser: MiddleWare = (req, res, next) => {
  if ('userId' in req.session && req.session.userId) {
    next();
  } else {
    res.sendStatus(400);
  }
};

export { checkUser };
