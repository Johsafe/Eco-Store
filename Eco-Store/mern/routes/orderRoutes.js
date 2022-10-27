import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import isAuth from '../Middleware/AuthMiddleware.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems:req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
  })
);

export default orderRouter;






// import express from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import isAuth from '../Middleware/AuthMiddleware.js';
// import Order from '../models/orderModel.js';

// const orderRouter = express.Router();
// orderRouter.post(
//   '/',
  
//   expressAsyncHandler(async (req, res) => {
//     const {
//       orderItems,
//       shippingAddress,
//       paymentMethod,
//       itemsPrice,
//       shippingPrice,
//       totalPrice,
//     } = req.body;

//     if (orderItems && orderItems.length === 0) {
//       res.status(400);
//       throw new Error('No order items');
//       return;
//     } else {
//       const newOrder = new Order({
//         orderItems,
//         shippingAddress,
//         paymentMethod,
//         itemsPrice,
//         shippingPrice,
//         totalPrice,
//         user: req.user._id,
//       });
//       const createdOrder = await newOrder.save();
//       res.status(201).send({ message: 'New Order Created', createdOrder });
//     }
//     console.log(createdOrder)
//   })
// );

// export default orderRouter;
