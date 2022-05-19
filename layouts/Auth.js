import { Container, Paper, CssBaseline, Box, Typography, Link as MuiLink} from '@mui/material';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
/* 
    priamry: #45b97c
    scendary: #44c455
    balck: #424447
*/

export default function Auth({children, width = 'sm'}) {
    return (
        <div className="flex flex-col min-h-[100vh] bg-[#f1f1f5]">
            <Container component="main" maxWidth={width}>
                <CssBaseline/>
                <Paper sx={{ p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} variant={0}>
                    {children}
                    <Box mt={5}>
                        <Typography variant="body2" color="textSecondary" align="center" className="mb-4">
                            <FormattedMessage id='copyright'/>
                            {' '}
                            <Link href="/" passHref>
                                <MuiLink className="text-[#44c455]" href="/">
                                    <FormattedMessage id='app.name'/>
                                </MuiLink>
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}