import React, { useState, useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { useComment } from 'hooks/useComment';
import { useRouter } from 'next/router';
import { GetComment, CreateComment } from 'components/comment';

export default function Comment() {
    const [comment, setComment] = useState()
    const [showToast, setShowToast] = useState(false)

    const router = useRouter()
    const { jwt } = useContext(AuthContext)
    const { id } = router.query;
    const {data, create, loading} = useComment(id)
    const comments =  data || [];

    const onSubmit = async () => {
        const data = {
            text: comment
        }
        await create(jwt, data)
    }

    const validation = () => {
        if(comment) {
            onSubmit()
            setComment('')
            setShowToast(false)
        } else {
            console.log('يجب عليك إدخال تعليق')
            setShowToast(true)
        }
    }

    return (
        <React.Fragment>
            {loading 
            ?
             <h1>loading</h1>
            :
            <div>
                <GetComment comments={comments} />
                <CreateComment value={comment} onChange={setComment} validation={validation} />
            </div>
            }
        </React.Fragment>
    )
}