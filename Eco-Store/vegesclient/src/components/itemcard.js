import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Itemcard.module.css';
import { Store } from './Store';

const Itemcard = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const response = await fetch(
      `http://localhost:5000/api/products/${item._id}`
    );
    const data = await response.json();

    if (data.inStock < quantity) {
      window.alert('Sorry!! ,Product is out of stock');
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div>
      <div className={classes.products}>
        <div className={classes.container}>
          <div>
            <Link to={`/product/${product.slug}`}>
              <img
                className={classes.img}
                // src={product.productImage}
                src={`http://localhost:5000/${product.productImage}`}
                alt={product.name}
              />
            </Link>

            <div className={classes.text}>
              <Link to={`/product/${product.slug}`}>
                <p> {product.name}</p>
              </Link>
              <p>
                {' '}
                <strong>Ksh.{product.price} </strong>
              </p>
            </div>
            {product.inStock === 0 ? (
              <button disabled>Out of Stock </button>
            ) : (
              <button onClick={() => addToCartHandler(product)}>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
