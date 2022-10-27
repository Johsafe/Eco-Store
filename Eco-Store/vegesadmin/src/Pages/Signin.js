import React from 'react';
import {Container ,Form ,Row ,Col ,Button} from 'react-bootstrap'
import Layout from '../componets/Layout/Layout';

export default function Signin(props) {
  return (
    <div>
      <Layout>
        <Container>
        <Row style={{marginTop:'6rem'}}>
          <Col md={{span:6,offset:3}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  />                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        </Container>
      </Layout>
    </div>
  );
}
