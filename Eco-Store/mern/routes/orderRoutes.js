import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Middleware/AuthMiddleware.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

//create an order
orderRouter.post('/', isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
    user: req.user._id,
  });

  const order = await newOrder.save();
  res.status(201).send({ message: 'New Order Created', order });
});
// get specific user order
orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);
//get all orders
orderRouter.get('/', isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});

//get an order by id
orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order not found' });
    }
  })
);

//delete an order
orderRouter.delete('/:id', isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res
      .status(201)
      .send({ message: ' Order successfully deleted', deletedOrder });
  } else {
    res.status(404).send('Order Not Found.');
  }
});
export default orderRouter;
