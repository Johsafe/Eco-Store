import jwt from 'jsonwebtoken';
// import asyncHandler from 'express-async-handler';

  export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };

export const adminMiddleware =async  (req, res, next) => {
  if(req.user.role !== 'admin'){
    return res.status(400).json({ message : 'Access Denied'});
  }
  next();
};
