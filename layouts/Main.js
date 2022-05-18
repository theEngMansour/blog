import React from 'react';
import { Container, Paper, Box, Typography, Divider } from '@mui/material';
import Header from './partials/Header';
import NavBar from './partials/NavBar';
import Footer from './partials/Footer';

export default function Main({children}) {
    return (
        <React.Fragment>
            <Header/>
            <NavBar/>
            <Container  component="main" sx={{my: 0.1}}>
                {children}
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
