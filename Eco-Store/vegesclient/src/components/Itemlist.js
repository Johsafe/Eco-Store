import React, {useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Itemcard from './itemcard'
import {Container, Grid} from '@mui/material'
import Shop from './Pages/Shop.js'


const Itemlist = () => {

  const [products, setProducts] = useState([]);
  
const fetchProducts = async() =>{
  
  try {
    const fetched = await fetch("http://localhost:5000/api/products")
    const jsonData = await fetched.json();
    setProducts(jsonData);
    
  } catch (err) {
    console.error(err.message);
    }
}

useEffect(() =>{
  fetchProducts();
},[]);
 
  return (
    <div >
      <Helmet>
        <title>Eco-Store</title>
      </Helmet>

        <Shop/>

      <Container>
        <Grid container spacing={1} sx={{justifyContent:'center',flexWrap:'wrap'}}>
        {
           products.map((product)=>(
          <Grid product >
          <Itemcard key={ product.slug} product={product} />
          </Grid>
        ))
      }
        </Grid>
      </Container>
     
      </div>
    
  )
}

export default Itemlist;