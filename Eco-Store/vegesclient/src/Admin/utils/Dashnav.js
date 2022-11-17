import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaidIcon from '@mui/icons-material/Paid';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Helmet } from 'react-helmet-async';
import './DashNav.css';
import { NavLink } from 'react-router-dom';

export default function Dashnav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="box">
        <div style={{ width: isOpen ? '250px' : '60px' }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
              Logo
            </h1>
            <div style={{ marginLeft: isOpen ? '50px' : '0' }} className="bars">
              <MenuOpenIcon onClick={toggle} style={{ fontSize: '2rem' }} />
            </div>
          </div>
          
            {/* <NavLink className="link" to="/navigation/dashboard">
              <div className="icon">
                <HomeIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                Dashboard
              </div>{' '}
            </NavLink> */}

            <NavLink className="link" to="/product">
              <div className="icon">
              <LocalMallIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                Product
              </div>{' '}
            </NavLink>

            {/* <NavLink className="link" to="/category">
              <div className="icon">
              <CategoryIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                Category
              </div>{' '}
            </NavLink> */}

            <NavLink className="link" to="/orders">
              <div className="icon">
              <ShoppingBasketIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
               Orders
              </div>{' '}
            </NavLink>

            {/* <NavLink className="link" to="/transaction">
              <div className="icon">
              <PaidIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                Transaction
              </div>{' '}
            </NavLink> */}

            <NavLink className="link" to="/users">
              <div className="icon">
              <PeopleIcon />
              </div>
              <div
                className="link_text"
                style={{ display: isOpen ? 'block' : 'none' }}
              >
                Users
              </div>{' '}
            </NavLink>
          
        </div>
      </div>
    </div>
  );
}
