import Image from 'next/image';
import { Container, Paper, CssBaseline} from '@mui/material';
import { FormattedMessage } from 'react-intl';
/* 
    priamry: #45b97c
    scendary: #44c455
    balck: #424447
*/

export default function Auth({children, width = 'sm', title}) {
    return (
        <div className="min-h-[100vh] bg-[#f1f0f5]">
            <Container component="main" maxWidth={width}>
                <CssBaseline/>
                <Paper variant={0} sx={{ p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    {children}
                </Paper>
            </Container>
        </div>
    )
}