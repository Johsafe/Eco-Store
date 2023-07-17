import React, { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import Itemcard from './itemcard';
import { Container, Grid } from '@mui/material';
import Shop from './Pages/Shop.js';
import axios from 'axios';
import MessageBox from './utils/MessageBox';
import LoadingBox from './utils/LoadingBox';
import logger from 'use-reducer-logger';
import Footer from './footer';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const Itemlist = () => {
  // const [products, setProducts] = useState([]);

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  const fetchProducts = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const fetched = await axios.get('http://localhost:5000/api/products');
      dispatch({ type: 'FETCH_SUCCESS', payload: fetched.data });
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Eco-Store</title>
      </Helmet>

      <Shop />

      <div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Container>
            <Grid
              container
              spacing={2}
              // sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
            >
              {products.map((product) => (
                <Grid product>
                  <Itemcard key={product.slug} product={product} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </div>
      <Footer/> 
    </div>
  );
};

export default Itemlist;
