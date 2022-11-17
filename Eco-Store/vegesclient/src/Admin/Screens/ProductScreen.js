import Avatar from '@mui/material/Avatar';
import React, { useEffect, useReducer, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Subheader from '../Header/Subheader';

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
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      deleteProduct(id);
    }
  };
  return (
    <div>
      
      <SubLayout>
      <Subheader/>
        <Container>
          <Helmet>
            <title>Products</title>
          </Helmet>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>My Products</h1>
            <div>
              <Link to="/add">
                {' '}
                <button className="btn btn-success">Add Product</button>
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
                {products.map((product) => (
                  <tr>
                    <th scope="row">
                      <Avatar>
                        <div>
                          <img
                            src={`http://localhost:5000/${product.productImage}`}
                            alt={product.name}
                            style={{ width: '40px' }}
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
                            <Link to={`/edit/${product._id}`}>
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
