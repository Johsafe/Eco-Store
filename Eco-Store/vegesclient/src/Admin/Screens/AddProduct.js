import Card from '@mui/material/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Subheader from '../Header/Subheader';
import SubLayout from '../Layout/SubLayout';
import { getError } from '../utils/GetError';

export default function AddProduct() {
  const Info = JSON.parse(localStorage.getItem('Info'));
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // console.warn(name, price, inStock, description, productImage);
    
    const formData = new FormData();
    formData.append('productImage', productImage);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('inStock', inStock);
    formData.append('description', description);
    try {
    let result = await fetch('http://localhost:5000/api/products/create', {
      method: 'POST',
      body: formData,
      headers: {
        authorization: `Bearer ${Info.token}`,
      },
    });
    sessionStorage.setItem('product',result.productImage)
    toast.success('product was added successfully');
    navigate('/product')
  } catch (err) {
    toast.error(getError(err));
  }
  };

  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Add Product</title>
          </Helmet>

          <Subheader />
          <div
            style={{
              display: 'flex',
              gap: '5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Link to="/product">
              {' '}
              <button
                style={{
                  width: '15rem',
                  padding: '0.5rem',  
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  background: 'red',
                  color: 'white',
                }}
              >
                Go to Products
              </button>
            </Link>
            <div>
              <h1>Add New Product</h1>
            </div>
            {/* <button
            className="btn btn-success"
            type="submit"
            onClick={() =>
              document
                .getElementById('exampleForm')
                .dispatchEvent(new Event('submit', { cancelable: true }))
            }
          >
            Add Product
          </button> */}
          </div>

          <Card>
            <div style={{padding:'1rem'}} >
              
              <div>
                <div class="mb-2">
                  <label for="name" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="mb-2">
                  <label for="price" class="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div class="mb-2">
                  <label for="stock" class="form-label">
                    InStock
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="stock"
                    value={inStock}
                    onChange={(e) => setInStock(e.target.value)}
                  />
                </div>
                {/* <div class="mb-2">
                    <label for="category" class="form-label">
                      Category
                    </label>
                    <input type="text" class="form-control" id="category" />
                  </div> */}
                {/* <div lass="mb-2">
                  <label for="category" class="form-label">
                    Category
                  </label>
                  <select class="form-select" aria-label=" select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}
                <div class="mb-2">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div>
                <div class="mb-1">
                  <label for="image" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="image"
                    onChange={(e) => setProductImage(e.target.files[0])}
                  />
                </div>
              </div>
              <button
                style={{
                  width: '25rem',
                  padding: '0.5rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  background: 'green',
                  color: 'white',
                }}
                type="submit"
                value="send"
                onClick={onSubmitForm}
              >
                Add Item
              </button>
             
            </div>
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
