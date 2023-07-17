import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import classes from '../css/Itemdetails.module.css';
import Footer from '../footer';
import Header from '../Layout/header';
import { Store } from '../Store';

const Itemdetails = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(
          `http://localhost:5000/api/products/slug/${slug}`
        );
        const jsonData = await fetched.json();
        setProduct(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProducts();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCart = async () => {
    //item in cart
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    //it exist add quantity
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const response = await fetch(
      `http://localhost:5000/api/products/${product._id}`
    );
    const data = await response.json();
    // console.table(data);

    if (data.inStock < quantity) {
      window.alert('Sorry!! ,Product is out of stock');
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });

    navigate('/cart');
  };

  return (
    <div>
      <Header/>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <div className={classes.detail}>
        <div>
          <img 
          src={`http://localhost:5000/${product.productImage}`}
          // src={product.image} 
          alt={product.name} />
        </div>

        <div className={classes.detailCard}>
          <h1>{product.name}</h1>

          <div className={classes.detailPrize}>
            <p>Price :</p>
            <p>Ksh.{product.price}</p>
          </div>
          {/* <div className={classes.detailQty}>
            <p>Quantity :</p>
            <p>{product.qty}</p>
          </div> */}
          <div className={classes.detailDescr}>
            <p>description :</p>
            <p>{product.description}</p>
          </div>

          <div className={classes.detailStatus}>
            status:
            {product.inStock > 0 ? (
              <p
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '2px 6px',
                }}
              >
                In Stock
              </p>
            ) : (
              <p
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '2px 6px',
                }}
              >
                Out Of Stock
              </p>
            )}
          </div>

          <div className={classes.detailBtn}>
            {product.inStock > 0 && (
              <div>
                <button onClick={addToCart}>Add To Cart</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  );
};

export default Itemdetails;
