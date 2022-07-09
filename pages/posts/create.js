import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { CreatePost } from 'components/posts';
import { create } from 'hooks/usePost';
import { useRouter } from 'next/router';

export default function Create() {
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    const [steps, setSteps] = useState()
    const [photos, setPhotos] = useState([])
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()

    const {jwt} = useContext(AuthContext)
    const router = useRouter()

    const onSubmit = async () => {
        const postData = new FormData();
        postData.append('title', title)
        postData.append('contents', contents)
        postData.append('steps', steps)
        postData.append('country', country)
        postData.append('region', region)
        for (let i = 0; i < photos.length; i++) {
            const response = await fetch(photos[i])
            const blob = await response.blob()
            postData.append('postImg', blob)
        }
        await create(jwt, postData).then(res => router.push('/'))
    }

    useEffect(() => {
        if(title && contents && steps) {
            onSubmit()
        }
    }, [title, contents, steps])

    return (
        <React.Fragment>
            <CreatePost 
                title={setTitle} 
                contents={setContents}
                steps={setSteps} 
                photos={setPhotos}
                country={setCountry} 
                region={setRegion}
            />
        </React.Fragment>
    )
  }
