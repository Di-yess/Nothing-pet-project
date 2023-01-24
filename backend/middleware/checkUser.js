function checkUser(req, res, next) {
  if (!req.session.userId) {
    res.sendStatus(400);
  }
  next();
}

export { checkUser };
