import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../images/EmptyCart.png';

const EmptyCart = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src={Cart} alt="" style={{ width: '30%' }} />
        </div>
        <div>
          Cart is Empty.
          <Link to="/shop">Go Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
