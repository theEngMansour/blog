import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from 'layouts/AuthContext';
import { useMyPosts } from 'hooks/usePost';
import { Authenticated, MainLayout } from 'layouts';
import { MyPost, Swipeable } from 'components/posts';

export default function Index() {
    const [isOpen, setIsOpen] = useState(false)
    const {jwt} = useContext(AuthContext)
    const {data, loading} = useMyPosts(jwt)
    return (
        <Authenticated>
            <MainLayout>
            {loading 
            ?
            <h1>Loading !</h1>
            : 
            data?.length > 0 ? (
                <React.Fragment>
                    <MyPost items={data || []} />
                </React.Fragment>
            ) : (<NoPost />)
            }
            <Button className="bg-red-900" onClick={() => setIsOpen(true)}>open</Button>
            <Swipeable isOpen={isOpen} value={setIsOpen} />
            </MainLayout>
        </Authenticated>
    )
}

function NoPost() {
    return (
      <h1>no post</h1>
    )
  }

  