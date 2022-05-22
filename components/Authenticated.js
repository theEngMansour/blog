import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from 'layouts/AuthContext';
import { AuthLayout } from 'layouts';
import { Alert } from 'components';
import { Button } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';

const Authenticated = (props) => {
    const {loggedIn} = useContext(AuthContext)
    const { formatMessage } = useIntl()

    if(loggedIn) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    } else {
        return (
            <AuthLayout title="login.check">
                <Alert 
                    type="warning" 
                    title={formatMessage({id: 'login.check', defaultMessage: 'login.check'})}
                    text={formatMessage({id: 'login.check.title', defaultMessage: 'login.check.title'})}
                />
                <div className="flex justify-center">
                    <Link href={'/login'} passHref>
                        <Button 
                            className="mt-4 text-white bg-[#44c455]"
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            <FormattedMessage id={'header.login'}/>
                        </Button>
                    </Link>
                </div>
            </AuthLayout>
        )
    }
}

export default Authenticated;