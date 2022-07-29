import React, { useState, useContext, useEffect } from 'react';
import { Authenticated } from 'layouts';
import { AuthContext } from 'layouts/AuthContext';
import { EditPost } from 'components/posts';
import { useRouter } from 'next/router';
import { usePost } from 'hooks/usePost';
import { EditorState, convertFromRaw } from 'draft-js'
import { useIntl } from 'react-intl';

export default function Create() {
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    const [steps, setSteps] = useState()

    const router = useRouter()
    const { jwt } = useContext(AuthContext)
    const { id } = router.query;
    const { post, edit } = usePost(id)
    const { formatMessage } = useIntl()

    useEffect(() => {
        if(title && contents && steps) {
            onSubmit()
        }
    }, [title, contents, steps])

    if(!post) return <div>Loading</div>

    const contentState = convertFromRaw(JSON.parse(post?.steps))
    const editor = EditorState.createWithContent(contentState)

    const onSubmit = async () => {
        const data = {title, contents, steps}
        await edit(jwt, data) /* .then(res => console.log(res)) */
    }

    return (
        <Authenticated>
            <EditPost
                postTitle={post?.title}
                postContents={post?.contents}
                postSteps={editor}
                title={setTitle} 
                contents={setContents}
                steps={setSteps} 
                
            />
        </Authenticated>
    )
  }

  