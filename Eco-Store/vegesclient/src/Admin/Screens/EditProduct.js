import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Subheader from '../Header/Subheader';
import SubLayout from '../Layout/SubLayout';
import { toast } from 'react-toastify';
import { getError } from '../utils/GetError';

function EditProduct() {
  // const { _id}  = props;
  const params = useParams();
  const navigate = useNavigate();

  const Info = JSON.parse(localStorage.getItem('Info'));
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState('');
  const [description, setDescription] = useState('');

  const [productImage, setProductImage] = useState('');
  // const [ uploadedImage,setUploadedImage] = useState('');
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    // console.warn(params)
    const data = await fetch(
      `http://localhost:5000/api/products/${params.id}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${Info.token}`, 
        },
      }
    );
    const result = await data.json();
    // console.log(result);
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setInStock(result.inStock);
    setDescription(result.description);
    setProductImage(result.productImage);
  };
  // const onChangeImage = (e) => {
  //   console.log(e.target.files[0]);
  //   setProductImage(e.target.files[0]);
  // };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // // formData.append('productImage',productImage);
      // formData.append('name', name);
      // formData.append('price', price);
      // formData.append('inStock', inStock);
      // formData.append('description', description);

      // let result = await fetch(
      //   `http://localhost:5000/api/products/${params.id}`,
      //   {
      //     method: 'PATCH',
      //     // body:JSON.stringify(formData),
      //     body: formData,
      //     headers: {
      //       authorization: `Bearer ${Info.token}`,
      //     },
      //   }
      // );
      // console.log(result);
      // // sessionStorage.setItem('product',result.productImage)
      // toast.success('product updated successfully');
      // navigate('/product');

      let result = await fetch(
        `http://localhost:5000/api/products/${params.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ name, price, description, inStock }),
          headers: {
            'Content-Type': 'Application/json',
            authorization: `Bearer ${Info.token}`,
          },
        }
      );
      result = await result.json();
      // console.warn(result);
      toast.success('product updated successfully');
      navigate('/product');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Edit Product</title>
          </Helmet>

          <Subheader />
          <div
            style={{
              display: 'flex',
              gap: '4rem',
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
              <h1>Edit Product</h1>
            </div>
          </div>

          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '3rem',
                padding: '0.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div>
                  <div classname="mb-2">
                    <label for="name" className="form-label">
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
                      // value={description}
                      // onChange={(e) => setDescription(e.target.value)}
                      defaultValue={data.description}
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
                      disabled="true"
                      defaultValue={data.productImage}
                      onChange={(e) => setProductImage(e.target.files[0])}
                      // onChange={onChangeImage}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  value="send"
                  onClick={onSubmitForm}
                  style={{
                    width: '25rem',
                    padding: '0.5rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    background: 'green',
                    color: 'white',
                  }}
                >
                  Update Item
                </button>
              </div>
              <div>
                <img
                  style={{ width: 500, marginBottom: '0' }}
                  src={'http://localhost:5000/' + data.productImage}
                  alt="Preview of the image"
                  // src={`http://localhost:5000/${productImage}`}
                />
              </div>
            </div>
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}

export default EditProduct;
