import express from 'express';

import {
  createdCategory,
  getCategories,
} from '../controllers/categoryContoller.js';
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

categoryRouter.post('/create', createdCategory);
categoryRouter.get('/getCategories', getCategories);


categoryRouter.get('/:id', async(req,res) =>{
  const category = await Category.findById(req.params.id);
  if (category) {
    res.send(category);
  }else{
    res.status(404).send({ message: 'Product not found'});
    console.log(category)
  }
})

export default categoryRouter;
