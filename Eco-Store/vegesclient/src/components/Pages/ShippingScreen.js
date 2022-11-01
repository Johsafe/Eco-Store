import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import classes from '../css/ShippingScreen.module.css';
import { Store } from '../Store';
import CheckoutSteps from '../utils/CheckoutSteps';

const ShippingScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [county, setCounty] = useState(shippingAddress.county || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        county,
        city,
        postalCode,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        county,
        city,
        postalCode,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address </title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className={classes.shipContainer}>
        <div className={classes.delivery}>
          <h4>Delivery Address</h4>
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              placeholder="Enter Your Full Names e.g Mwamuye Joseph"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Address e.g P.O.BOX 64"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your County e.g Mombasa"
              value={county}
              required
              onChange={(e) => setCounty(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your City e.g Mombasa"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Postal e.g 0 5463"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
