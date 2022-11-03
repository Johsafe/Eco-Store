import express from 'express';
// import { createdProduct } from '../controllers/productController.js';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../Middleware/AuthMiddleware.js';
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
    cb(null ,path.join(path.dirname(__dirname), './mern/uploads'));
  
    
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
    product.save((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(201).json({ product, file: req.file });
      }
    });
  })
);

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

//find product by category
productRouter.get('/productbycategory' ,async(req,res) =>{
  const {slug} = req.params;
  const myproductCategory = Category.findOne({slug:slug}).select('_id name');
  if(myproductCategory){
  res.send(myproductCategory)
  }else{
    res.status(404).send({ message:'Product not present'})
  }
})

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

export default productRouter;
