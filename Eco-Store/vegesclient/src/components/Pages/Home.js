import React from 'react'
import classes from '../css/Home.module.css';
import HomeBg from '../../images/HomeBg.png'
// import organic from '../../images/organic.png'
import Delivery from '../../images/Delivery.png'
import payment from '../../images/payment.png'
import service from '../../images/fullTime.png'
import fresh from '../../images/freshFoods.png'
import payDeliver from '../../images/payDelivery.png'

const Home = () => {
  return (
    <div>
      <div className={classes.home}>
          <div className={classes.homeTxt}>
          <h4>100% HEALTY AND AFFORDABLE</h4>
          <h1>ORGANIC FRESH VEGETABLES</h1>
            <p>The world's most outstanding quality ,fresh and the most 
            delicious vegetables</p>
            <p>Welcome To Our Garden Of Eden</p>

          <button> Shop Now</button>
          </div>
      
        <div className={classes.homeImg}>
        <img src={HomeBg} alt=""/>
        </div>  
        </div>
        
      <div className={classes.homeFeatures}>
        <h1>Our Features</h1>
        <div className={classes.feature}>

        <div className={classes.featureBox}>
          <img src={fresh} alt="fresh"/>
          <h3>Fresh and Organic</h3>
          <p>Healthy vegetables</p>
        </div>

        <div className={classes.featureBox}>
          <img src={Delivery} alt=""/>
          <h3>Fast Deliver</h3>
          <p>Within 30 Minutes</p>
        </div>

        <div className={classes.featureBox}>
          <img src={service} alt=''/>
          <h3>24 / 7 Availability </h3>
          <p>Call us at anytime</p>
        </div>

        <div className={classes.featureBox}>
          <img src={payDeliver} alt=""/>
          <h3>Easy Payment</h3>
          <p>Cash or Credit</p>
        </div>

        <div className={classes.featureBox}>
           <img src={payment} alt=""/>
          <h3>48 Hrs  Return</h3>
          <p>Allow Refunds</p>
        </div>
        </div>
      </div>

      <div className={classes.deal}>
        <div className={classes.dealContent}>
        <h1>Deal of the Day</h1>
        <p>Welcome to our amazing offer of the deal of the
          day.Where you get your amazing products at very cheap ,
          affordable price.
        </p>

        <button>Get The Deal</button>

        </div>
      </div>




     
      </div>
  )
}

export default Home;