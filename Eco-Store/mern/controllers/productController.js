import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';
import slugify from 'slugify';
import Category from '../models/categoryModel.js';

export const createdProduct = expressAsyncHandler(async (req, res) => {
  //  res.status(200).json({ file: req.file ,body:req.body});

  const { name, category, description, price, inStock, qty, createdBy } =
    req.body;

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    category,
    description,
    qty,
    inStock,
    productImage: req.file.originalname,
    createdBy: req.user._id,
  });
  // console.log(req.file.originalname);
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, file: req.file });
    }
  });
});

// let productImage = {};

// if(req.file.length > 0){
//     // productImage = req.file.map((file) => {
//     //     return file.filename
//     // });
// }
