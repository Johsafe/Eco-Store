import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    productImage: { type: String } ,
    
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    qty: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);
export default Product;
