import { LocalShipping, Person, Place } from '@mui/icons-material';
import React from 'react'
import { Helmet } from 'react-helmet-async';
import classes from '../css/OrderScreen.module.css';
// import LoadingBox from '../utils/LoadingBox';
import MessageBox from '../utils/MessageBox';

const isDelivered =()=>{
    
}

export default function OrderScreen1() {
    const styleIcon = {
        fontSize: '5rem',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#dddddd',
        padding: '20px',
      };
  return(
 //loading ? (
//     <LoadingBox></LoadingBox>
//   ) : error ? (
//     <MessageBox variant="danger">{error}</MessageBox>
//   ) : 

    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <div className={classes.orderHead}>
        Order 
        <div className={classes.orderHeadTxt}>
          <div>
            <Person style={styleIcon} />
          </div>
          <div>
            <h5>Customer</h5>
            {/* <p>{order.shippingAddress.fullName}</p> */}
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
              {/* {order.shippingAddress.county} */}
            </p>
            <p>
              <strong>Pay Method : </strong>
              {/* {order.paymentMethod} */}
            </p>
            <p>
              {/* {order.isPaid ? (
                <MessageBox variant="success">
                  Paid at {order.paidAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Paid</MessageBox>
              )} */}
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
              {/* {order.shippingAddress.address},{order.shippingAddress.location}{' '} */}
            </p>
            <p>
              {/* {order.shippingAddress.postalCode},{order.shippingAddress.city} */}
            </p>
            <p>
              {' '}
              {/* {order.isDelivered ?  */}
                 { isDelivered ? (
                <MessageBox variant="success">
                  {/* Delivered at {order.deliveredAt} */}
                  Delivered at
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Delivered</MessageBox>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.orderBody}>
        <div>
          <table className="table table-striped">
            <thead>
              <td></td>
              <td></td>
              <td> Quantity</td>
              <td>Subtotal</td>
            </thead>
            <tbody>
              {/* {order.orderItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>

                  <td>{item.name}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>Ksh. {item.price * item.quantity}</td>
                </tr>
              ))} */}
              <tr>
                <td>My items</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes.placeOrder}>
          <h2>Order Summary</h2>
          <table style={{ width: '100%' }}>
            <tr>
              <td>
                <p>Products</p>
              </td>
              {/* <td>Ksh.{order.itemsPrice.toFixed(2)}</td> */}
            </tr>

            <tr>
              <td>
                <p>Shipping</p>
              </td>
              {/* <td>Ksh.{order.shippingPrice.toFixed(2)}</td> */}
            </tr>

            <tr>
              <td>
                <p>Total</p>
              </td>
              <td>
                {/* <strong>Ksh.{order.totalPrice.toFixed(2)}</strong> */}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
