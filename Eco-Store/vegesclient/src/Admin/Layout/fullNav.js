import { Container } from 'react-bootstrap';
import React from 'react'
import Dashnav from '../utils/Dashnav';

export default function fullNav(props) {
  return (
    <div>
    <Dashnav/>
    <Container style={{ paddingTop: '1rem' }}>{props.children}</Container>
    
  </div>
  )
}
