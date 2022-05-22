import { Container, Paper, CssBaseline} from '@mui/material';
import Image from 'next/image';
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
                <Paper sx={{marginTop: 6, marginBottom: 6, backgroundColor: '#f1f0f5'}} className="text-center" variant={0}>
                    <Image src="/logo/z.png" width={'200px'} height={'70px'} alt="logo"/>
                    <h2 style={{ fontFamily: "Jannat"}} className="text-center text-[#424447] m-0 select-none mt-4"><FormattedMessage id={title} defaultMessage={title} /></h2>
                </Paper>
                <Paper variant={0} sx={{ p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    {children}
                </Paper>
            </Container>
        </div>
    )
}