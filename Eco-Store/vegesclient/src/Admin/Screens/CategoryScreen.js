import Card from '@mui/material/Card';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function CategoryScreen() {
  return (
    <div>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Categories</title>
          </Helmet>
          <h1>My Categories</h1>

          <Card style={{display:'flex', padding:'2rem'}}>
            <div  style={{width:'50%'}}>
              <form style={{ padding: '2rem' }}>
                <div class="mb-2">
                  <label for="name" class="form-label">
                    Category Name
                  </label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-2">
                    <label for="description" class="form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                    ></textarea>
                  </div>
                <button className="btn btn-sm btn-success">Submit</button>
              </form>
            </div>

            <div style={{width:'50%'}}>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#</th>
                    <td>Vegetables</td>
                    <td>Fresh Organic Vegetables</td>

                    <td>
                      <div>
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          style={{ display: 'flex' }}
                        >
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button>
                            <DeleteIcon style={{ color: 'red' }} />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#</th>
                    <td>Fruits</td>
                    <td>Fresh Organic Fruits</td>

                    <td>
                      <div>
                        <ButtonGroup
                          variant="text"
                          aria-label="text button group"
                          style={{ display: 'flex' }}
                        >
                          <Button>
                            <EditIcon />
                          </Button>
                          <Button>
                            <DeleteIcon style={{ color: 'red' }} />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Container>
      </SubLayout>
    </div>
  );
}
