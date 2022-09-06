import React, { useState, useEffect, useContext } from 'react';
import { Authenticated } from 'layouts';
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
    const [tags, setTags] = useState([])

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

        /**
         *  tages = {label: e.name, value: e.id}
         *  need {tagId : 1}, {tagId : 2}, {tagId : 3} 
         *  needs the prisma tage as figure of top data 
        */

        tags.map(tag => {
            delete tag.label
            tag.tagId = tag.value
        })
        
        // tags = {value: , tagId}
        const tag = tags.map(e => {
            delete e.value
            return e
        })

        postData.append('tags', JSON.stringify(tag))

        await create(jwt, postData).then(res => router.push('/'))
    }

    useEffect(() => {
        if(title && contents && steps) {
            onSubmit()
        }
    }, [title, contents, steps])
    return (
        <Authenticated>
            <CreatePost 
                title={setTitle} 
                contents={setContents}
                steps={setSteps} 
                photos={setPhotos}
                country={setCountry} 
                region={setRegion}
                tags={setTags}
            />
        </Authenticated>
    )
  }
