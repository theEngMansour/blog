import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { Button } from '@mui/material';
import { AuthContext } from 'layouts/AuthContext';
import { useMyPosts } from 'hooks/usePost';
import { Authenticated, MainLayout } from 'layouts';
import { MyPost, Swipeable } from 'components/posts';
import { FormattedMessage, useIntl } from 'react-intl';

export default function Index() {
    const [isOpen, setIsOpen] = useState(false)
    const {jwt} = useContext(AuthContext)

    
    const {data, loading} = useMyPosts(jwt)
    const { formatMessage } = useIntl()
   
    if(loading) return <h1>Loading</h1>
   
    return (
        <Authenticated>
            <Head>
                <title>{formatMessage({id: 'title.profile'})}</title>
            </Head>
            <MainLayout>
            {data?.length > 0 ? (
                <React.Fragment>
                    <MyPost items={data || []} />
                </React.Fragment>
                ) : (<NoPost />)
            }
            </MainLayout>
        </Authenticated>
    )
}

function NoPost() {
    return (
      <h1>no post</h1>
    )
}