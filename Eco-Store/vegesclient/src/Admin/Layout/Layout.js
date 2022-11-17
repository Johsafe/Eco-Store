import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
    </div>
  );
}
