import React from 'react';
import classes from '../css/About.module.css';
import { useNavigate } from 'react-router-dom';
import about from '../../images/imgAbout.png';

// images
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';
import gallery7 from '../../images/gallery7.jpg';
import gallery8 from '../../images/gallery8.jpg';
import gallery9 from '../../images/gallery9.jpg';
import gallery10 from '../../images/gallery10.jpg';
import gallery11 from '../../images/gallery11.jpg';
import gallery12 from '../../images/gallery12.jpg';
import Header from '../Layout/header';
import Footer from '../footer';

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className={classes.subHeader}>
        <h1>About Us</h1>
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
          About Us
        </p>
      </div>

      <div className={classes.aboutContent}>
        <div className={classes.aboutBox}>
          <img src={about} alt="Organic Store" />
        </div>
        <div className={classes.aboutText}>
          <h3>Welcome To Our Shop</h3>
          <h2> Fresh And Organic Groceries</h2>
          <p>
            Our services are dedicated suppliers of high fresh fruits and
            vegetables.we ensure that our products are of outsanding quality
            ,freshness and the most delicious.
          </p>
          <p>
            We guarantee food safety and grown under circumstance with attention
            to people and the enviroment
          </p>
          <p>
            Our mission is to bring the natural love of life and health. Shop
            with us know for fresh ,health and cheap vegetables for your family
          </p>

          <button>Shop Now</button>
        </div>
      </div>

      <div className={classes.gallery}>
        <div className={classes.galleryTxt}>
          <h2>
            Our <span>Gallery </span>
          </h2>
        </div>

        <div className={classes.galleryImg}>
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
          <img src={gallery6} alt="" />
          <img src={gallery7} alt="" />
          <img src={gallery8} alt="" />
          <img src={gallery9} alt="" />
          <img src={gallery10} alt="" />
          <img src={gallery11} alt="" />
          <img src={gallery12} alt="" />
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default About;
