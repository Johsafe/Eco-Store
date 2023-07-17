import Avatar from '@mui/material/Avatar';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
// import Subheader from '../Header/Subheader';
import { toast } from 'react-toastify';

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

export default function ProductScreen() {
  const Info = JSON.parse(localStorage.getItem('Info'));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetched = await fetch(`http://localhost:5000/api/products`, {
          headers: {
            Authorization: `Bearer ${Info.token}`,
          },
        });
        const jsonData = await fetched.json();
        setProducts(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProducts();
  }, [Info]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${Info.token}` },
      });
      sessionStorage.setItem('id', id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      deleteProduct(id);
    }
    toast.success('product was successfully deleted');
  };

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const searchHandler = (searchValue) => {
    setSearch(searchValue);

    if (search !== '') {
      const newContactList = products.filter((product) => {
        return Object.values(product)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(products);
    }
  };

  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('Info'));
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
                    placeholder="Search for a product"
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
          </Typography> */}
              {/* <Typography sx={{ minWidth: 50 }}>Eng</Typography> */}
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
                  {user.name}
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
            <title>Products</title>
          </Helmet>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>My Products</h1>
            <div>
              <Link to="/add">
                {' '}
                <button
                  style={{
                    width: '15rem',
                    padding: '0.5rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    background: 'green',
                    color: 'white',
                  }}
                >
                  Add Product
                </button>
              </Link>
            </div>
          </div>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  {/* <th scope="col">Category</th> */}
                  <th scope="col">Price</th>
                  <th scope="col">InStock</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {search.length > 1
                  ? searchResult.map((product) => (
                      <tr>
                        <th scope="row">
                          <Avatar>
                            <div>
                              <img
                                src={`http://localhost:5000/${product.productImage}`}
                                alt={product.name}
                                style={{ width: '50px' }}
                              />
                            </div>
                          </Avatar>
                        </th>

                        <td>{product.name}</td>
                        {/* <td>Fruit</td> */}
                        <td>Ksh.{product.price}</td>
                        <td>{product.inStock}</td>
                        <td>
                          <div>
                            <ButtonGroup
                              variant="text"
                              aria-label="text button group"
                              style={{ display: 'flex' }}
                            >
                              {/* <Button>One</Button> */}

                              <Button>
                                <Link to={`/${product._id}/edit`}>
                                  <EditIcon />
                                </Link>
                              </Button>
                              <Button
                                // type="button"
                                // className="small"
                                onClick={() => deleteHandler(product._id)}
                              >
                                <DeleteIcon style={{ color: 'red' }} />
                              </Button>
                            </ButtonGroup>
                          </div>
                        </td>
                      </tr>
                    ))
                  : products.map((product) => (
                      <tr>
                        <th scope="row">
                          <Avatar>
                            <div>
                              <img
                                src={`http://localhost:5000/${product.productImage}`}
                                alt={product.name}
                                style={{ width: '50px' }}
                              />
                            </div>
                          </Avatar>
                        </th>

                        <td>{product.name}</td>
                        {/* <td>Fruit</td> */}
                        <td>Ksh.{product.price}</td>
                        <td>{product.inStock}</td>
                        <td>
                          <div>
                            <ButtonGroup
                              variant="text"
                              aria-label="text button group"
                              style={{ display: 'flex' }}
                            >
                              {/* <Button>One</Button> */}

                              <Button>
                                <Link to={`/${product._id}/edit`}>
                                  <EditIcon />
                                </Link>
                              </Button>
                              <Button
                                // type="button"
                                // className="small"
                                onClick={() => deleteHandler(product._id)}
                              >
                                <DeleteIcon style={{ color: 'red' }} />
                              </Button>
                            </ButtonGroup>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
