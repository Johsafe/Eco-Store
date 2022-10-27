import express from 'express';

const userRouter = express.Router();

import {
  profileUser,
  registerUser,
  loginUser,
} from '../controllers/userController.js';
// import protect from '../Middleware/AuthMiddleware.js';

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', profileUser);

export default userRouter;
