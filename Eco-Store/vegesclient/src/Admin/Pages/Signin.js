import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils/GetError';

export default function Signin(props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (!email) {
      //   return toast.error('please input email')
    }
    if (!password) {
      //   return toast.error('please input password')
    }

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/admin/adminlogin',
        {
          email,
          password,
        }
      );
      localStorage.setItem('Info', JSON.stringify(data));
      //   navigate(redirect || '/');
      navigate('/navigation');
      toast.success('Admin Login Successfully');
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '6rem' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group> */}
                {/* <Button
                  style={{
                    width: '100%',
                    border: 'none',
                    borderRadius: '10px',
                    // background: 'green',
                    padding: '0.5rem',
                    fontSize: '1.2rem',
                    textAlign: 'center'
                  }}
                  type="submit"
                  bg="success"
                >
                  Submit
                </Button> */}
                <button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: '100%',
                    border: 'none',
                    borderRadius: '10px',
                    background: '#198754',
                    padding: '0.5rem',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                  }}
                >
                  Submit
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
