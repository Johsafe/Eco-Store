import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       //get token from header
//       token = req.headers.authorization.split(' ')[1];

//       //verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       //get user from the token

//       req.user = await User.findById(decoded.id).select('-password');
//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401);
//       throw new Error('Not authorized ,token failed');
//     }
//   }
//   if (!token) {
//     res.status(401);
//     throw new Error('Not authorized ,no token');
//   }
// });
// export default protect;




const isAuth =asyncHandler(async  (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
   );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
});

// const required =asyncHandler(async  (req, res, next) => {
//     const token = req.headers.authorization.split("")[1];
//     const user = jwt.verify(token , process.env.JWT_SECRET);
//     req.user = user;
//     next();
//     //jwt.decode()
// })


const adminMiddleware =asyncHandler(async  (req, res, next) => {
  if(req.user.role !== 'admin'){
    return res.status(400).json({ message : 'Access Denied'});
  }
  next();
});
export default isAuth;
