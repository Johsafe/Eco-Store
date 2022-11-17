// import { Dehaze, Home, ShoppingBasket } from '@material-ui/icons'
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaidIcon from '@mui/icons-material/Paid';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <HomeIcon />,
    },
    {
      path: '/product',
      name: 'Products',
      icon: <LocalMallIcon />,
    },
    {
      path: '/category',
      name: 'Categories',
      icon: <CategoryIcon />,
    },
    {
      path: '/orders',
      name: 'Orders',
      icon: <ShoppingBasketIcon />,
    },
    {
      path: '/transaction',
      name: 'Transaction',
      icon: <PaidIcon />,
    },
    {
      path: '/users',
      name: 'Users',
      icon: <PeopleIcon />,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="box">
        <div style={{ width: isOpen ? '300px' : '60px' }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
              Logo
            </h1>
            <div style={{ marginLeft: isOpen ? '50px' : '0' }} className="bars">
              <MenuOpenIcon onClick={toggle} style={{ fontSize: '2rem' }} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
