import React from 'react';
import { Container, Toolbar} from '@mui/material';
import Header from './partials/Header';
import Footer from './partials/Footer';

export default function Main({children}) {
    return (
        <React.Fragment>
            <Header/>
            <div component="main" sx={{my: 0.1}}>
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}
