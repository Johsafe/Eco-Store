import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import Card from '@mui/material/Card';

// import DeleteIcon from '@mui/icons-material/Delete';

import Subheader from '../Header/Subheader';
import profilePicture from '../images/user.png';

export default function UsersScreen() {
  const Info = JSON.parse(localStorage.getItem('Info'));

  const [user, setUser] = useState();
  const getUsers = async () => {
    try {
      const users = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${Info.token}`,
        },
      });
      const Users = await users.json();
      setUser(Users);
      console.log(users);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <SubLayout>
        <Subheader />
        <Container>
          <Helmet>
            <title>Users</title>
          </Helmet>
          <h1>My Users Screen</h1>

          <div style={{ display: 'flex', gap: '1rem', flexWrap:'wrap',justifyContent:'center' , textAlign: 'center' }}>
            {user &&
              user.map((user) => (
                // <Card >
                  <div style={{ textAlign: 'center'  }}>
                    <div>
                      <img
                        src={profilePicture}
                        alt="user"
                        style={{ width: '80px', borderRadius: '50%' }}
                      />
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                      <p>{user.name}</p>
                    </div>

                    <div>
                      <p>{user.email}</p>
                    </div>
                  </div>
                // </Card>
              ))}
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
