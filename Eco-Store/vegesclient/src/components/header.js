import React ,{ useContext, useState} from 'react'
import './header.css'
import { Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { ShoppingCart , PersonOutlineTwoTone, SearchTwoTone, Menu ,Close} from '@mui/icons-material'
import { Store } from './Store'
import { Badge } from '@mui/material'

const Header = () => {
  const { state} = useContext(Store);
  const {cart} = state;
  

  const styleIcon ={
    fontSize:'1.8rem',
    cursor: 'pointer',
  };
 
  const [showNav,setshowNav]= useState(false);
  return (
    
    
    <div className="header">
      <div className="headerLogo">
        <img src={logo} alt="Jose's Eco-Store" />
      </div>
      
      <div className={showNav ? 'headerTextMobile': 'headerText'}
       onClick={()=> setshowNav(false)}>
        <ul>
        <Link className='links' to="/" active="true">Home</Link >
        <Link className='links' to="/about">About</Link>
        <Link className='links' to="/shop">Shop</Link>
        <Link className='links' to="/contact">Contact</Link>
        </ul>
        

      </div>
       
      <div className="icons">
        <SearchTwoTone style={styleIcon} className="iconsSearch"/>
        <Link to='/cart'>
          <ShoppingCart className="iconsCart"/>
          {cart.cartItems.length > 0 &&(
             <Badge  color="success">
             {cart.cartItems.reduce((a, c) => a + c.quantity ,0)}
              </Badge>
           )} 
           
      
        </Link> 
        <PersonOutlineTwoTone style={styleIcon} className="iconsPerson"/>
        
      </div>
    
      <button className="menuIcon" onClick={() =>setshowNav(!showNav)}>
        { showNav ? 
         <Close/> : <Menu />
      }
      </button>


      

      {/* <div >
        <form className='search'>        
            <input class="srch" type="search" 
            name="search" placeholder="Search Products...." 
            
            />
            <button class="btn">Search</button>

        </form>
      </div> */}
      
    </div>
     
  )
}

export default Header;