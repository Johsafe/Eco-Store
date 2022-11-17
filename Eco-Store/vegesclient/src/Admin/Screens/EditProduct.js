import React from 'react'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Subheader from '../Header/Subheader';
import SubLayout from '../Layout/SubLayout';


function EditProduct(props) {
  
  return (

    <div>
      <SubLayout>
      <Container>
        <Helmet>
          <title>Edit Product</title>
        </Helmet>
        
        <Subheader/>
        </Container>
        </SubLayout>
        </div>
  )
}

export default EditProduct;