import React from 'react';
import { Container } from 'react-bootstrap';
// import Subheader from '../Header/Subheader';
import Dashnav from '../utils/Dashnav';

export default function SubLayout(props) {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Subheader /> */}
      <Dashnav />
      <Container style={{ paddingTop: '1rem' }}>{props.children}</Container>
    </div>
  );
}
