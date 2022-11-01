import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import data from './data.js';
dotenv.config(); //fetch variable
//connect mongo db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

import cors from 'cors';
import dataRouter from './routes/dataRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';


const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/data', dataRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders' ,orderRouter);
app.use('/api/category' ,categoryRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server has started at http://localhost:${port}`);
});
