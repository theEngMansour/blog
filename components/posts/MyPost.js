import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Swipeable from './Swipeable';
import { AuthContext } from 'layouts/AuthContext';
import { Button } from '@mui/material';
import { deletePost } from 'hooks/usePost';
import { useRouter } from 'next/router';

export default function Posts({ items = []}) {
    const [postId, setPostId] = useState()
    const [isOpen, setIsOpen] = useState(false)
   
    const {jwt} = useContext(AuthContext)
    const router = useRouter()

    const destroy = async () => {
        await deletePost(jwt, postId)
        setIsOpen(false)
        router.reload()
    }

    return (
        <React.Fragment>
            {
                items.slice().reverse().map((post) => 
                    <div key={post.id}>
                        <button className="bg-red-900" onClick={() => {
                            setIsOpen(true)
                            setPostId(post.id)
                        }}>
                            open
                        </button>
                       
                        <li>{post.title}</li>
                        <li>{post.contents}</li>
                        <li>{post.steps}</li>
                        <li>{post.country}</li>
                        <li>{post.region}</li>
                        <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                    </div>
                )
            }
                        
            <Swipeable isOpen={isOpen} value={setIsOpen}>
                <Button sx={{ fontSize: 16}}>تعديل المنشور</Button>
                <Button sx={{ fontSize: 16}}>الانتقال للمنشور</Button>
                <Button sx={{ fontSize: 16}} onClick={destroy}>حذف المنشور</Button>
            </Swipeable>
        </React.Fragment>
    )
}
