// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema(
//   {
//     orderItems: [
//       {
//         slug: { type: String, required: true },
//         name: { type: String, required: true },
//         qty: { type: String, required: true },
//         image: { type: String},
//         price: { type: Number, required: true },
//         productId: {
//           type: mongoose.Schema.ObjectId,
//           ref: 'Product',
//           required: true,
//         },
//       },
//     ],
//     shippingAddress: {
//       fullName: { type: String, required: true },
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       county: { type: String, required: true },
//     },
//     paymentMethod: { type: String, required: true },
//     paymentResult: {
//       id: String,
//       status: String,
//       update_time: String,
//       email_address: String,
//     },

//     itemsPrice: { type: Number, required: true },
//     shippingPrice: { type: Number, required: true },
//     totalPrice: { type: Number, required: true },
//     user: {
//       type: mongoose.Schema.ObjectId,
//        ref:'User', required: true },
//     isPaid: { type: Boolean, default: false },
//     paidAt: { type: Date },
//     isDelivered: { type: Boolean, default: false },
//     deliveredAt: { type: Date },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order = mongoose.model('Order', orderSchema);
// export default Order;

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  shippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    county: { type: String, required: true },
    // phoneNo: { type: Number, required: true },
  },

  orderItems: [
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      slug: { type: String, required: true, unique: true },
      price: {
        type: Number,
        required: true,
      },
      qty: {
        type: String,
        required: true,
      },
      // productImage: {
      //   type: String,
      //   required: true,
      // },
      // productId: {
      //   type: mongoose.Schema.ObjectId,
      //   ref: "Product",
      //   required: true,
      // },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },

  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: 'Processing',
  },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model('Order', orderSchema);
export default Order;
