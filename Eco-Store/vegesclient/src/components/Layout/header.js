import React, { useContext, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../../images/logo.png';
import {
  ShoppingCart,
  PersonOutlineTwoTone,
  SearchTwoTone,
  Menu,
  Close,
} from '@mui/icons-material';
import { Store } from '../Store';
import { ToastContainer } from 'react-toastify';

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const styleIcon = {
    fontSize: '1.8rem',
    cursor: 'pointer',
  };

  const [showNav, setshowNav] = useState(false);
  return (
    // <Container>

    <div className="header">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="headerLogo">
        <Link to="/">
          <img src={logo} alt="Jose's Eco-Store" />
        </Link>
      </div>

      <div
        className={showNav ? 'headerTextMobile' : 'headerText'}
        onClick={() => setshowNav(false)}
      >
        <ul>
          <Link className="links" to="/" active="true">
            {' '}
            Home{' '}
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/contact">
            Contact{' '}
          </Link>
        </ul>
      </div>

      <div className="icons">
        <div>
          <SearchTwoTone style={styleIcon} className="iconsSearch" />
        </div>

        <div>
          <Link to="/cart">
            <ShoppingCart className="iconsCart" />
            {cart.cartItems.length > 0 && (
              <Badge pill color="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
        </div>
        {/* title={userInfo.name}  */}
        <div>
          {userInfo ? (
            <Nav className="me-auto">
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order Info</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Link className="nav-link" to="/signin">
              <PersonOutlineTwoTone style={styleIcon} className="iconsPerson" />
            </Link>
          )}
        </div>
        <div>
          <Link className="links" to="/admin">
            Admin{' '}
          </Link>
        </div>
      </div>

      <button className="menuIcon" onClick={() => setshowNav(!showNav)}>
        {showNav ? <Close /> : <Menu />}
      </button>

      {/* <div>
          <form className="search">
            <input
              class="srch"
              type="search"
              name="search"
              placeholder="Search Products...."
            />
            <button class="btn">Search</button>
          </form>
        </div> */}
    </div>
    // </Container>
  );
};

export default Header;
