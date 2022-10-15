import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import classes from '../css/Signin.module.css';

const Signin = () => {

  const {search} = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const onSubmitForm = async e => {
    e.preventDefault();
  }
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

<div className={classes.boxContainer}>
               
               <form onSubmit={onSubmitForm}>
               <h3 className={classes.txt}>Welcome <br/>Back</h3>
               <h5>Please Login to continue </h5>
               <div className={classes.details}>
                  <input type="email" name="email"
                  placeholder="email" 
                  
                  
                  />
       
                  <input type="password" name="password" 
                  placeholder="password" 
                  
                 
                  />
                  <br/>
                  <Link className={classes.link} to='/forget'><h5>Forgot your password?</h5></Link> 
                  </div>
                  <button className={classes.button2}>Login</button>
                  <h5>New customer? 
                    <Link to={`/signup?redirect=${redirect}`} className={classes.link}>Create your account</Link> </h5>
                  </form>
                   </div>
    </div>
  )
}

export default Signin