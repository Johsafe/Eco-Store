// import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import signup from '../../images/signup.jpg';
import classes from '../css/Register.module.css';
import Header from '../Layout/header';
import { Store } from '../Store';
import { getError } from '../utils/GetError';

function RegisterScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    } else {
      setPasswordType('password');
    }
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.error('please input name');
    }
    if (!email) {
      return toast.error('please input email');
    }
    if (!password) {
      return toast.error('please input password');
    }
    if (!confirmPassword) {
      return toast.error('please input confirmPassword');
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/users/register',
        {
          name,
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
      <Header />
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className={classes.signContainer}>
        <div className={classes.signDetails}>
          <img src={signup} alt="welcome" />
          {/* <p>To stay in contact with us</p>
          <p>Please sign up with your personal account details</p> */}
        </div>
        <div className={classes.signForm}>
          <h5>Please Signup to Continue</h5>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type={isShown ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type={isShown ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <div className={classes.checkboxContainer}>
              <input
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={togglePassword}
              />
              <label htmlFor="checkbox">Show password?</label>
            </div>

            <button type="submit">Sign Up</button>
            <h5>
              Already have an account ?{' '}
              <Link
                to={`/signin?redirect=${redirect}`}
                className={classes.link}
              >
                Log In
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
