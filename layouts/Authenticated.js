import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from './AuthContext';
import { AuthLayout } from 'layouts';
import { Alert } from 'components';
import { Button } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const Authenticated = (props) => {
    const { loggedIn } = useContext(AuthContext)
    const { formatMessage } = useIntl()

    if(loggedIn) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <br></br>
                <br></br>
                <AuthLayout title="login.check">
                    <Alert 
                        type="warning" 
                        title={401}
                        text={formatMessage({id: 'login.check.title', defaultMessage: 'login.check.title'})}
                    />
                    <div className="flex justify-center mt-40">
                        <Link href={'/login'} passHref>
                            <Button 
                                className="mt-4 text-white bg-red-500"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                <FormattedMessage id={'header.login'}/>
                            </Button>
                        </Link>
                    </div>
                </AuthLayout>
            </React.Fragment>
        )
    }
}

export default Authenticated;