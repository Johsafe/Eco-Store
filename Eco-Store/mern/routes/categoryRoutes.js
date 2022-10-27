import express from 'express';

import adminMiddleware from '../Middleware/AuthMiddleware.js'

import { createdCategory, getCategories } from '../controllers/categoryContoller.js';

const categoryRouter = express.Router();

categoryRouter.post( '/create' , adminMiddleware ,createdCategory);
categoryRouter.get('/getCategories',getCategories);
    
export default categoryRouter;