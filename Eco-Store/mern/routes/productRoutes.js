import express from 'express';
// import { createdProduct } from '../controllers/productController.js';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../Middleware/AuthMiddleware.js';
import slugify from 'slugify';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import multer from 'multer';
import shortid from 'shortid';
import path from 'path';
const __dirname = path.resolve();

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), './mern/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

productRouter.post(
  '/create',
  isAuth,
  upload.single('productImage'),
  expressAsyncHandler(async (req, res) => {
    //  res.status(200).json({ file: req.file ,body:req.body});
    const { name, category, description, price, inStock, qty, createdBy } =
      req.body;

    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      category,
      description,
      // qty,
      inStock,
      productImage: req.file.filename,
      createdBy: req.user._id,
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });
    // product.save((error, product) => {
  })
);

//get products

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
  })
);
//get product by slug
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

//get a product by id
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

//update product
productRouter.patch(
  '/:id',
  // upload.single('productImage'),
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
      const { name, description, price, inStock } = req.body;
      const product = await Product.findByIdAndUpdate(id, {
        name,
        // slug: slugify(name),
        description,
        price,
        inStock,
        // productImage: req.file.filename,
      });
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      console.error(err.message);
    }
  })
);

//delete a product
productRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
      await deletedProduct.remove();
      res.send({ message: 'Product Deleted', deletedProduct });
    } else {
      res.send('Error in Deletion.');
    }
  })
);

// productRouter.get('/:id', async(req,res) =>{
//   const product = await Category.findById(req.params.id);
//   if (product) {
//     res.send(product);
//   }else{
//     res.status(404).send({ message: 'Product not found'});
//     console.log(product)
//   }
// })

export default productRouter;
