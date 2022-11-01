import React, { useContext, useEffect, useReducer } from 'react';
import classes from '../css/PlaceOrderScreen.module.css';
import { LocalShipping, Person, Place } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from '../utils/CheckoutSteps';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import LoadingBox from '../utils/LoadingBox';
import { getError } from '../utils/GetError';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const styleIcon = {
    fontSize: '5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#dddddd',
    padding: '20px',
  };

  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 50 ? round2(0) : round2(10);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await axios.post(
        'http://localhost:5000/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
      toast.success(
        'Thanks for buying goods from us, Order Placed Successfully'
      );
    } catch (err) {
      dispatch({
        type: 'CREATE_FAIL',
      });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart, navigate]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Order Screen</title>
      </Helmet>
      <div className={classes.orderHead}>
        <div className={classes.orderHeadTxt}>
          <div>
            <Person style={styleIcon} />
          </div>
          <div>
            <h5>Customer</h5>
            <p>{cart.shippingAddress.fullName}</p>
            <p></p>
            <p>{userInfo.email}</p>
          </div>
        </div>
        <div className={classes.orderHeadTxt}>
          <div>
            <LocalShipping style={styleIcon} />
          </div>
          <div>
            <h5>Order info</h5>
            <p>
              <strong>Shipping: </strong>
              {cart.shippingAddress.county}
            </p>
            <p>
              <strong>Pay Method : </strong>
              {cart.paymentMethod}
            </p>
          </div>
        </div>
        <div className={classes.orderHeadTxt}>
          <div>
            <Place style={styleIcon} />
          </div>
          <div>
            <h5>Deliver to</h5>
            <p>
              <strong>Address: </strong>
              {cart.shippingAddress.address}{' '}
            </p>
            <p>
              {cart.shippingAddress.postalCode},{cart.shippingAddress.city}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.orderBody}>
        <div className={classes.orderTable}>
          <table className="table table-striped">
            <thead>
              <td></td>
              <td></td>
              <td> Quantity</td>
              <td>Subtotal</td>
            </thead>
            <tbody>
              {cart.cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>

                  <td>
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                  </td>
                  <td>Quantity ({item.quantity})</td>
                  <td>Ksh. {item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={classes.placeOrder}>
          <h2>Order Summary</h2>
          <div className={classes.orderTable}>
            <table className="table table-striped">
              <tr>
                <td>
                  <p>Products</p>
                </td>
                <td>Ksh.{cart.itemsPrice.toFixed(2)}</td>
              </tr>

              <tr>
                <td>
                  <p>Shipping</p>
                </td>
                <td>Ksh.{cart.shippingPrice.toFixed(2)}</td>
              </tr>

              <tr>
                <td>
                  <p>Total</p>
                </td>
                <td>
                  <strong>Ksh.{cart.totalPrice.toFixed(2)}</strong>
                </td>
              </tr>
            </table>
          </div>
          <div className="d-grid">
            <button
              type="button"
              onClick={placeOrderHandler}
              disabled={cart.cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
          {loading && <LoadingBox></LoadingBox>}
        </div>
      </div>
    </div>
  );
}
