import React from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';

const CoursePage = () => {
  return (
    <>
      <Helmet>
        <title> Shital Academy Vadodara </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Course
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default CoursePage;
