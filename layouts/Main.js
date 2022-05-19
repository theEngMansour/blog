import React from 'react';
import { Container} from '@mui/material';
import Header from './partials/Header';
import Footer from './partials/Footer';

export default function Main({children}) {
    return (
        <React.Fragment>
            <Header/>
            <Container  component="main" sx={{my: 0.1}}>
                {children}
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
