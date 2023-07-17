import React from 'react';
import classes from '../css/Home.module.css';
import HomeBg from '../../images/HomeBg.png';
import feature from '../../images/features.png';
import Footer from '../footer';

const Home = () => {
  return (
    <div>
      <div className={classes.home}>
        <div className={classes.homeTxt}>
          <h4>100% HEALTY AND AFFORDABLE</h4>
          <h1>ORGANIC FRESH VEGETABLES</h1>
          <p>
            The world's most outstanding quality ,fresh and the most delicious
            vegetables. Welcome To Our Garden Of Eden
          </p>

          <button> Shop Now</button>
        </div>

        <div className={classes.homeImg}>
          <img src={HomeBg} alt="Home" />
        </div>
      </div>

      <div className={classes.homeFeatures}>
        <h1>Our Features</h1>
        <div className={classes.features}>
          <img src={feature} alt="features" />
        </div>
      </div>

      <div className={classes.deal}>
        <div className={classes.dealContent}>
          <h1>Deal of the Day</h1>
          <p>
            Welcome to our amazing offer of the deal of the day.Where you get
            your amazing products at very cheap , affordable price.
          </p>

          <button>Get The Deal</button>
        </div>
      </div>
      <Footer/> 
    </div>
  );
};

export default Home;
