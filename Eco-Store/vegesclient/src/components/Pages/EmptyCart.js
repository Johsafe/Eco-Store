import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../images/EmptyCart.png';

const EmptyCart = () => {
  return (
    <div>
      <div style={{  alignItems: 'center' ,marginLeft:'35rem'}}>
        <div>
          <img src={Cart} alt="" style={{ width: '30%' }} />
        </div>
        <div style={{ fontSize:'1.5rem'}}>
           Your Cart is Empty.
          <Link to="/">Go Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
