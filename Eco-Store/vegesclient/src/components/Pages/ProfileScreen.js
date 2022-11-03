import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import avatar from '../../images/strawberry.png';
import '../css/Profile.css';
import { Store } from '../Store';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function ProfileScreen() {

  const { state} = useContext(Store);
  const { userInfo } = state;
  return (
    <div>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className='my-2'>My User Profile</h1>

      <div className="profileContainer">
        <div>
          <img src={avatar} alt="avatar" className="profileImg" />
          <h1>{userInfo.name}</h1>

          <button className="btnProfile"><Link to='/editprofile'>Edit My profile</Link></button>
          <button className="btnProfile">Change Password</button>
        </div>
        <div className="information">
          <div className="info">
            <h4
              style={{
                padding: '0px 5px',
              }}
            >
              Full Name:
            </h4>
            <p>{userInfo.name}</p>
          </div>
          <div className="info">
            <h4
              style={{
                padding: '0px 5px',
              }}
            >
              Email:
            </h4>
            <p>{userInfo.email}</p>
          </div>
          {/* <div className="info">
            <h4
              style={{
                padding: '0px 5px',
              }}
            >
              Role:
            </h4>
            <p>{userInfo.isAdmin}</p>
          </div> */}
          {/* <div className="info">
            <h4
              style={{
                padding: '0px 5px',
              }}
            >
              Phone Number:
            </h4>
            <p>Phone number</p>
          </div> */}
          <div className="info">
            <h4
              style={{
                padding: '0px 5px',
              }}
            >
              Joined on:
            </h4>
            <p>{moment(userInfo.createdAt).format('LL')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
