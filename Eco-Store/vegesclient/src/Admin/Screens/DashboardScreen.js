 import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SubLayout from '../Layout/SubLayout';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaidIcon from '@mui/icons-material/Paid';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import fullNav from '../Layout/fullNav';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 250,
  color: theme.palette.text.primary,
}));

export default function DashboardScreen() {
  return (
    <div>
      <fullNav>
      <SubLayout>
        <Container>
          <Helmet>
            <title>Summmary</title>
          </Helmet>
          <h1>My Dashboard</h1>
          <div style={{ display: 'flex', top: '0' }}>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: 'rgb(174, 185, 233)' }}>
                      <PaidIcon style={{ color: 'blue' }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Total sales</Typography>
                    <Typography>Ksh. 45632</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: 'rgb(236, 224, 167)' }}>
                      <ShoppingBasketIcon style={{ color: 'orange' }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Total orders</Typography>
                    <Typography>Total sales</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: ' rgb(164, 231, 164)' }}>
                      <LocalMallIcon style={{ color: 'green' }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Total Product</Typography>
                    <Typography>12</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                sx={{
                  my: 1,
                  mx: 'auto',
                  p: 2,
                }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar style={{ background: 'rgb(233, 150, 150)' }}>
                      <ProductionQuantityLimitsIcon style={{ color: 'red' }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>Out of stock</Typography>
                    <Typography>1</Typography>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          </div>
        </Container>
      </SubLayout>
      </fullNav>
      
    </div>
  );
}
