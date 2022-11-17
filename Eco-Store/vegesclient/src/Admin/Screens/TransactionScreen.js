import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';

export default function TransactionScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Transactions</title>
          </Helmet>
          <h1>My TransactionScreen</h1>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Payment id</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>Dec 14 2021</td>
                  <td>Otto@gmail.com</td>
                  <td>Otto</td>
                  <td>QwTYE</td>
                  <td>ksh. 234</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </Container>
      </SubLayout>
    </div>
  );
}
