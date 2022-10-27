import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        qty: { type: String, required: true },
        image: { type: String},
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      county: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },

    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    // userId: { type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', required: true },
    // user:[
    //   {
    //     userId: mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    //     user:String
    //   }
    // ],
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;

// import mongoose from 'mongoose';
// const shippingSchema = {
//   fullName: { type: String,required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   postalCode: { type: String, required: true },
//   county: { type: String, required: true },
// };

// const paymentSchema = {
//   paymentMethod: { type: String, required: true }
// };

// const orderItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   qty: { type: Number, required: true },
//   image: { type: String, required: true },
//   price: { type: Number, required: true },
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true
//   },
// });

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
//   orderItems: [orderItemSchema],
//   shippingAddress: shippingSchema,
//   paymentMethod: paymentSchema,
//   itemsPrice: { type: Number },
//   shippingPrice: { type: Number },
//   totalPrice: { type: Number },
//   isPaid: { type: Boolean, default: false },
//   paidAt: { type: Date },
//   isDelivered: { type: Boolean, default: false },
//   deliveredAt: { type: Date },
// },
//  {
//   timestamps: true
// });

// const orderModel = mongoose.model("Order", orderSchema);
// export default orderModel;
