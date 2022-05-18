import React from 'react';
import { Container, Paper, Box, Typography, Divider } from '@mui/material';
import Header from './partials/Header';
import Footer from './partials/Footer';

export default function Main({children}) {
    return (
        <React.Fragment>
            <Header/>
            <Container maxWidth="lg" component="main">
                {children}
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
