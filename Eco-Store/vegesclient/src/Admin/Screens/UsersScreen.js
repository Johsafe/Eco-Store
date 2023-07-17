import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import './UsersScreen.css';

// import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import Subheader from '../Header/Subheader';
import profilePicture from '../images/user.jpg';

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

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const searchHandler = (searchValue) => {
    setSearch(searchValue);

    if (search !== '') {
      const newContactList = user.filter((user) => {
        return Object.values(user)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(user);
    }
  };

  const navigate = useNavigate();
  let admin = JSON.parse(localStorage.getItem('Info'));
  function logOut() {
    localStorage.clear();
    navigate('/admin');
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SubLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottom: '0.1rem solid rgba(0, 0, 0, 0.1)',
            padding: '0.5rem 0',
            // position: 'fixed',
            marginBottom: '1rem',
            height: '4rem',
          }}
        >
          <div>
            <form>
              <div className="input-group">
                <div class="form-outline" style={{ width: '36rem' }}>
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    placeholder="Search for a user"
                    aria-label="Search"
                    onChange={(e) => searchHandler(e.target.value)}
                  />
                </div>

                {/* <button
              type="button"
              style={{
                width: '5rem',
                padding: '0.4rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                background: 'blue',
                color: 'white',
              }}
            >
              <SearchIcon />
            </button> */}
              </div>
            </form>
          </div>
          <React.Fragment>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                marginRight: '2rem',
              }}
            >
              {/* <Typography sx={{ minWidth: 50 }}>
            <NightlightIcon />
          </Typography>
          <Typography sx={{ minWidth: 50 }}>
            <NotificationsIcon />
          </Typography>
          <Typography sx={{ minWidth: 50 }}>Eng</Typography> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  {admin.name}
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {/* <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
              <MenuItem onClick={logOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
        <Container>
          <Helmet>
            <title>Users</title>
          </Helmet>
          <h1>My Users Screen</h1>

          {/* <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {user &&
              user.map((user) => (
                // <Card >
                <div style={{ textAlign: 'center' }}>
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
          </div> */}

          <Card>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0.5rem',
                alignItems: 'center',
              }}
            >
              {search.length > 1
                ? searchResult.map((user) => (
                    <div className="profile-card-2">
                      <img
                        src={profilePicture}
                        alt="user"
                        className="img img-responsive"
                      />
                      <div className="profile-name">{user.name}</div>
                      <div className="profile-username">{user.email}</div>
                    </div>
                  ))
                : user &&
                  user.map((user) => (
                    <div className="profile-card-2">
                      <img
                        src={profilePicture}
                        alt="user"
                        className="img img-responsive"
                      />
                      <div className="profile-name">{user.name}</div>
                      <div className="profile-username">{user.email}</div>
                    </div>
                  ))}
            </div>
          </Card>
          {/* <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {search.length > 1
                  ? searchResult.map((user) => (
                      <tr>
                        <th scope="row">#</th>
                        <td>
                          <Avatar>
                            <div>
                              <img src={profilePicture} alt="user" />
                            </div>
                          </Avatar>
                        </td>

                        <td>{user.name}</td>

                        <td>{user.email}</td>
                      </tr>
                    ))
                  : user &&
                    user.map((user) => (
                      <tr>
                        <th scope="row">#</th>
                        <td>
                          <Avatar>
                            <div>
                              <img src={profilePicture} alt="user" />
                            </div>
                          </Avatar>
                        </td>

                        <td>{user.name}</td>

                        <td>{user.email}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div> */}
        </Container>
      </SubLayout>
    </div>
  );
}
