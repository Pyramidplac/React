import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
import CartWidget from '../sections/@dashboard/products/ProductCartWidget';
// components
// mock

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        {/* <title> Dashboard: Products | Minimal UI </title> */}
        <title> Shital Academy Vadodara </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        {/* <ProductCartWidget /> */}
        <CartWidget />
      </Container>
    </>
  );
}
