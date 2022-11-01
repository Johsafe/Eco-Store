import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from '../utils/CheckoutSteps';
import Form from 'react-bootstrap/Form';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import paymentbg from '../../images/paymentbg.png';

export default function PaymentScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'payPal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <Helmet>
        <title>Payment Method</title>
      </Helmet>
      <div style={{margin:'1rem 0 1.5rem 30rem'}}>
      <div className="container small-container">
        <div>
        < img src={paymentbg} alt="payment" style={{width:'20rem'}}/>
        </div>
        
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="payPal"
              label="payPal"
              value="payPal"
              checked={paymentMethodName === 'payPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="M-pesa"
              label="M-pesa"
              value="M-pesa"
              checked={paymentMethodName === 'M-pesa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button type="submit" className="btn-sm btn-success">
              {' '}
              Continue
            </button>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
}
