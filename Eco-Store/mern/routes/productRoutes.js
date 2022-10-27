import express from 'express';
import { createdProduct } from '../controllers/productController.js';
import Product from '../models/productModel.js';
import multer from 'multer';
import shortid from 'shortid';
import path from 'path';
const __dirname = path.resolve();

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname), '/mern/uploads'));
    
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

productRouter.post('/create', upload.single("productImage"), createdProduct);


//get products

productRouter.get('/', async (req, res) => {
  //fetch all products
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

export default productRouter;
