import React from 'react';
import classes from '../css/Shop.module.css';
import { Link, useNavigate } from 'react-router-dom';
//images
import spices from '../../images/organic-spices.png';
import veges from '../../images/vegges-logo.png';
import fruit from '../../images/fruit-logo.png';
import cereals from '../../images/org-cereals.png';
import freshmeat from '../../images/freshmeat.png';
import { Helmet } from 'react-helmet-async';
import Header from '../Layout/header';

const Shop = () => {
  window.scrollTo(0, 0);

  let navigate = useNavigate();
  return (
    <div>
      <Header />

      <Helmet>
        <title>Our Product</title>
      </Helmet>
      <div className={classes.subHeader}>
        <h1>Our Products</h1>
        <p>
          <button
            className={classes.button}
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            Home &gt;&gt;{' '}
          </button>
          Our Shop
        </p>
      </div>

      <div className={classes.container}>
        <div className={classes.bar}>
          <h2>Our Categories</h2>
        </div>

        <div className={classes.icons}>
          <Link to="" className={classes.box}>
            <img src={veges} alt="fruit" />
            <h3>All Products</h3>
          </Link>

          <Link to="" className={classes.box}>
            <img src={fruit} alt="fruit" />
            <h3> Fruits</h3>
          </Link>

          <Link to="" className={classes.box}>
            <img src={veges} alt="fruit" />
            <h3> Vegetables</h3>
          </Link>

          <Link to="" className={classes.box}>
            <img src={spices} alt="fruit" />
            <h3>Spices</h3>
          </Link>

          <Link to="" className={classes.box}>
            <img src={cereals} alt="cereals" />
            <h3>Cereals</h3>
          </Link>

          {/* <Link to="" className={classes.box}>
            <img src={freshmeat} alt="cereals" />
            <h3>Meat & Eggs</h3>
          </Link> */}
        </div>
        <div className={classes.bar}>
          <h2>Our Products</h2>
          <Link to="">View All &gt;&gt;</Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
