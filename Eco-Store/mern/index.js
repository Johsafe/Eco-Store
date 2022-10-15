import express from 'express';
import data from './data.js'
const app = express();

import cors from 'cors';
app.use(express.json());
app.use(cors());





app.get('/api/products' ,(req,res)=>{
    res.send(data.products);
});

app.get('/api/products/slug/:slug' ,(req,res)=>{
    const product = data.products.find((x)=> x.slug === req.params.slug);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:'Product not found'});
    }
});

app.get('/api/products/:id' ,(req,res)=>{
    const product = data.products.find((x)=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:'Product not found'});
    }
}); 

const port = process.env.PORT || 5000 ;
app.listen(port ,()=>{
    console.log(`server has started at http://localhost:${port}`);
})