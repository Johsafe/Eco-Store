import React, { useContext, useEffect, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Subheader from '../Header/Subheader';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrdersScreen() {
  // const { state } = useContext(Store);
  // const { Info } = state;
  // localStorage.getItem('Info')
  // const Info;
  const Info = JSON.parse(localStorage.getItem('Info'));

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`http://localhost:5000/api/orders`, {
          headers: {
            Authorization: `Bearer ${Info.token}`,
          },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: error });
      }
    };

    fetchOrder();
  }, [Info]);
  return (
    <div>
      <SubLayout>
        <Subheader />
        <Container>
          <Helmet>
            <title>Orders</title>
          </Helmet>
          <h1>My Orders</h1>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order id</th>
                  {/* <th scope="col">Name</th> */}
                  <th scope="col">Email</th>
                  {/* <th scope="col">Paid</th> */}
                  <th scope="col">Total</th>
                  <th scope="col">Date</th>
                  {/* <th scope="col">Delivered</th> */}
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => (
                    <tr>
                      <th scope="row">#</th>
                      <td>{order._id}</td>
                      {/* <td>{order.shippingAddress.fullName}</td> */}
                      <td>{Info.email}</td>
                      {/* <td>
                    {order.isPaid
                      ? order.paidAt && order.paidAt.slice(0, 10)
                      : 'NO'}
                  </td> */}
                      <td>{order.totalPrice.toFixed(2)}</td>

                      <td>
                        {order.createdAt && order.createdAt.substring(0, 10)}
                      </td>
                      {/* <td>
                    {order.isDelivered
                      ? order.deliveredAt && order.deliveredAt.slice(0, 10)
                      : 'NO'}
                  </td> */}
                      <td>{order.orderStatus}</td>
                      <td>
                        <div>
                          <ButtonGroup
                            variant="text"
                            aria-label="text button group"
                            style={{ display: 'flex' }}
                          >
                            <Button>
                              <Link to={`/updateorder/${order._id}`}>
                                <VisibilityIcon />
                              </Link>
                            </Button>
                            {/* <Button>
                           <EditIcon />
                         </Button> */}
                            {/* <Button>
                           <DeleteIcon style={{ color: 'red' }} />
                         </Button> */}
                          </ButtonGroup>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
