// import axios from 'axios';
// import React, { useContext, useEffect, useReducer } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';
// import { Store } from '../Store';
// import { getError } from '../utils/GetError';
// import LoadingBox from '../utils/LoadingBox';
// import MessageBox from '../utils/MessageBox';
// // import moment from 'moment';
// import { Visibility } from '@mui/icons-material';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, orders: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default function OrderHistory() {
//   const { state } = useContext(Store);
//   const { userInfo } = state;

//   const navigate = useNavigate();
//   const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
//     loading: true,
//     error: '',
//   });

//   useEffect(() => {
//     const fetchOrder = async () => {
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5000/api/orders/mine`,
//           {
//             headers: {
//               Authorization: `Bearer ${userInfo.token}`,
//             },
//           }
//         );
//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (err) {
//         dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
//       }
//     };
//     fetchOrder();
//   }, [userInfo]);
//   return (
//     <div>
//       <Helmet>
//         <title>My Orders</title>
//       </Helmet>

//       <h1>My Order History</h1>

//       {loading ? (
//         <LoadingBox></LoadingBox>
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//         // {order.orderItems.length === 0 ? (
//         //   <div>
//         //     <h1>No orders yet please purchase some</h1>
//         //   </div>
//         // ) : (
//           <div style={{marginLeft:'3rem ',marginTop:'3rem',marginBottom:'7.5rem',borderRadius:'5px 10px 15px 30px',boxShadow:'1px 2px',padding:'1rem', width:'75rem'}}>
//         <table className="table table-sm table-striped" >
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>DATE</th>
//               <th>TOTAL</th>
//               <th>PAID</th>
//               <th>DELIVERED</th>
//               <th>ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{ order.createdAt && order.createdAt.substring(0, 10)}</td>
//                 {/* <td>{moment(order.createdAt).format('LL')}</td> */}
//                 <td>{order.totalPrice.toFixed(2)}</td>
//                 <td>{order.isPaid ? order.paidAt && order.paidAt.slice(0, 10) : 'NO'}</td>
              
//                 <td>
//                   {order.isDelivered
//                     ?order.deliveredAt && order.deliveredAt.slice(0, 10)
//                     : 'NO'}
                    
//                 </td>
//                 <td>
//                    <button
//                    style={{border:'none', backgroundColor:'transparent'}}
//                    type="button"
//                    variant="light"
//                    onClick={()=>{
//                     navigate(`/order/${order._id}`);
//                    }}
//                    >
//                     <Visibility/>
//                    </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//         )}
//       {/* )} */}
//     </div>
//       // }
//   );
// }
