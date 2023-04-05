import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
// mock

// ----------------------------------------------------------------------

export default function Questionpage() {
    return (
        <>
            <Helmet>
                {/* <title> Dashboard: Products | Minimal UI </title> */}
                <title> Shital Academy Vadodara </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Question
                </Typography>


            </Container>
        </>
    );
}
