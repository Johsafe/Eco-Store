import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Admin from '../models/AdminUserModel.js';
import { isAuth } from '../Middleware/AuthMiddleware.js';
import { generateToken } from '../utils/jwt.js';

const adminRouter = express.Router();

adminRouter.post(
  '/adminlogin',
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error('Please add all fields');
    }

    const user = await Admin.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

adminRouter.post(
  '/adminregister',
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please add all fields');
    }

    if (password.length < 7) {
      res.status(400);
      throw new Error('Password must be up to 7 characters');
    }

    const userExists = await Admin.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    // const user = await newUser.save();
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);
adminRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await Admin.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

//get all users
adminRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const users = await Admin.find({});
    res.send(users);
  })
);
export default adminRouter;
