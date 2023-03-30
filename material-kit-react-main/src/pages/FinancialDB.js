import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Stack, Typography } from '@mui/material';

const FinancialDB = () => {
  return (
    <>
      <Helmet>
        <title> Dashboard: FinancialDB | Minimal UI </title>
      </Helmet>
      {/* hello */}
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          FinancialDB
        </Typography>
      </Container>
    </>
  );
};

export default FinancialDB;
