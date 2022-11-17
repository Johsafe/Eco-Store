import { LocalShipping, Person, Place } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import classes from '../css/OrderScreen1.module.css';
import { Store } from '../Store';
import { getError } from '../utils/GetError';
import LoadingBox from '../utils/LoadingBox';
import MessageBox from '../utils/MessageBox';
import mpesa from '../../images/mpesa.png'
import paypal from '../../images/paypal.png'
import Header from '../Layout/header';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default function OrderScreen1() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  const styleIcon = {
    fontSize: '5rem',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: '#dddddd',
    padding: '20px',
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `http://localhost:5000/api/orders/${orderId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (!userInfo) {
      return navigate('/login');
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Header/>
      <Helmet>
        <title>Order {orderId}</title>
      </Helmet>
      <div className={classes.orderHead}>
        <h1> Order {orderId}</h1>
        <div className={classes.orderUserInfo}>
          <div className={classes.orderHeadTxt}>
            <div>
              <Person style={styleIcon} />
            </div>
            <div>
              <h5>Customer</h5>
              <p>{order.shippingAddress.fullName}</p>
              <p></p>
              {/* <p>{userInfo.email}</p> */}
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
                {order.shippingAddress.county}
              </p>
              <p>
                <strong>Pay Method : </strong>
                {order.paymentMethod}
              </p>
              <p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  // <MessageBox variant="danger">Not Paid</MessageBox>
                  <div className="bg-danger p-1 col-12">
                    <p className="text-white text-center text-sm-start">
                      Not Paid
                    </p>
                  </div>
                )}
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
                {order.shippingAddress.address},{order.shippingAddress.location}{' '}
              </p>
              <p>
                {order.shippingAddress.postalCode},{order.shippingAddress.city}
              </p>
              <p>
                {' '}
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                    Delivered at
                  </MessageBox>
                ) : (
                  // <MessageBox variant="danger">Not Delivered</MessageBox>
                  <div className="bg-danger p-1 col-10">
                    <p className="text-white text-center text-sm-start">
                      Not Delivered
                    </p>
                  </div>
                )}
              </p>
            </div>
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
              {order.orderItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`http://localhost:5000/${item.productImage}`}
                      alt={item.name}
                    />
                  </td>

                  <td> {item.name} </td>
                  <td>Quantity ({item.quantity})</td>
                  <td>Ksh. {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={classes.placeOrder}>
          <h2>Order Summary</h2>
          <div className={classes.orderTable}>
            <table style={{ width: '100%' }}>
              <tr>
                <td>
                  <p>Products</p>
                </td>
                <td>Ksh.{order.itemsPrice.toFixed(2)}</td>
              </tr>

              <tr>
                <td>
                  <p>Shipping</p>
                </td>
                <td>Ksh.{order.shippingPrice.toFixed(2)}</td>
              </tr>

              <tr>
                <td>
                  <p>Total</p>
                </td>
                <td>
                  <strong>Ksh.{order.totalPrice.toFixed(2)}</strong>
                </td>
              </tr>
            </table>
            <div>
              {order.paymentMethod === 'M-pesa' ? (
                <button><img src={mpesa} alt="" /></button>
              ) : (
                <button><img src={paypal} alt="" /></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
