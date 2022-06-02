import React from 'react';
import Image from 'next/image';
import moment from 'site-settings/moment';

export default function Posts({ items = []}) {
    return (
        <React.Fragment>
            {
                items.slice().reverse().map((post) => 
                    <div key={post.id}>
                        <li>{post.title}</li>
                        <li>{post.contents}</li>
                        <li>{post.steps}</li>
                        <li>{post.country}</li>
                        <li>{post.region}</li>
                        <li>{moment(post.createdAt).fromNow()}</li>
                        <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                    </div>
                )
            }
        </React.Fragment>
    )
}
