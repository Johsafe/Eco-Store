import React from 'react'
import classes from '../css/Contact.module.css';
import { useNavigate} from 'react-router-dom'

//images
import header from '../../images/contactHead.png'
import Email from '../../images/email.png';
import Number from '../../images/contactNum.png';
import Address from '../../images/Address.png';
import Message from '../../images/Message.png';
import Telephone from '../../images/Telephone.png';


const Contact = () => {

  let navigate = useNavigate();
  return (
    <div>
      
    <div className={classes.subHeader}>
    <h1>Our Contact</h1>
    <p><button 
  className={classes.button} onClick={
    ()=>{
      navigate("/");
    }  }> Home &gt;&gt; </button>Our Contact</p>
     </div>

    <div className={classes.contact}>
     <div className={classes.contactHead}>
      <img src={header} alt="Contact us"/>
     </div>
     <div  className={classes.contactContainer}>
      <div className={classes.contactBox}>
        <img src={Email} alt="Email"/>
        <h2>Our Email</h2>
        <p>ecostore@gmail.com</p>
        <p>joseveges@yahoo.com</p>
      </div>

      <div className={classes.contactBox}>
        <img src={Number} alt="Number"/>
        <h2>Phone Number</h2>
        <p>+254-798-789-091</p>
        <p>+254-788-456-120</p>
        <p></p>
      </div>

      <div className={classes.contactBox}>
        <img src={Telephone} alt="Telephone"/>
        <h2>Telephone Number</h2>
        <p>0708-167-771</p>
        <p>0797-654-321</p>
        <p></p>
      </div>

      <div className={classes.contactBox}>
        <img src={Message} alt="Message"/>
        <h2>Mobile Number</h2>
        <p>+254-798-709-091</p>
        <p>0765-432-190</p>
        <p></p>
      </div>

      <div className={classes.contactBox}>
        <img src={Address} alt="Address"/>
        <h2>Our Main Office</h2>
        <p>Mombasa,Kenya - 8010098</p>
        
      </div>
     </div>
     </div>



</div>
  )
}

export default Contact