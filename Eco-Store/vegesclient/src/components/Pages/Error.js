import React from 'react'
import { useNavigate} from 'react-router-dom'
import classes from '../css/Error.module.css'

import errorBg from '../../images/error.png'

const Error = () => {

  let navigate = useNavigate();
  return (
    <div>
      <div className={classes.Error}>
        <div className={classes.ErrorImg}>
          <img src={errorBg} alt="Error"/>
        </div>
        <div className={classes.ErrorTxt}>
          <h1>Ooops!</h1>
          <h2>Page Not Found</h2>
          <p>Sorry !!! We could not find what you are looking for.</p>

         <button  className={classes.button} onClick={
              ()=>{
               navigate("/");
           }  }>Go To HomePage</button>
        </div>
      </div>
      
    </div>
  )
}

export default Error