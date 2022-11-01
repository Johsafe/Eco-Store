import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import welcome from '../../images/welcome.png';
import classes from '../css/Signin.module.css';
import { Store } from '../Store';
import { getError } from '../utils/GetError';

function LoginScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error('please input email');
    }
    if (!password) {
      return toast.error('please input password');
    }

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/users/login',
        {
          email,
          password,
        }
      );
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <div className={classes.signContainer}>
        <div className={classes.signDetails}>
          <img src={welcome} alt="welcome" />
          <p>To stay connected with us</p>
          <p>Please log in with your personal account details</p>
        </div>
        <div className={classes.signForm}>
          <h5>Please Login to Continue</h5>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Log in</button>
            <h5>
              New Customer?{' '}
              <Link
                to={`/register?redirect=${redirect}`}
                className={classes.link}
              >
                Create Your Account
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
