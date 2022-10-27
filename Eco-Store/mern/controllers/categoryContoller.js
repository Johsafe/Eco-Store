import Category from '../models/categoryModel.js';
import expressAsyncHandler from 'express-async-handler';
import slugify from 'slugify';

export const createdCategory = expressAsyncHandler(async (req, res) =>{
    const categoryObj ={
        name: req.body.name,
        slug:slugify(req.body.name)
    }
    if (req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error,category) =>{
        if(error) return res.status(400).json({error});
        if(category){
            return res.status(201).json({category})
        }
    })
});

export const getCategories = expressAsyncHandler(async (req, res) =>{
    Category.find({})
    .exec((error ,categories) => {
        if(error) return res.status(400).json({ error});
        if(categories){
            res.status(200).json({categories})
        }
    })

});