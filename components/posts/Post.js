import React from 'react';
import Image from 'next/image';
import moment from 'site-settings/moment';
import Link from 'next/link';
export default function Posts({ items = []}) {
    return (
        <React.Fragment>
            {
                items.map((post) => 
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} prefetch >On Link</Link>
                        <div className="bg-white p-2 px-8">
                            <Image src={post.images[0].img_uri} width={'200'} height={'120'} alt={post.title} />
                            <h1 className="text-2xl m-0">عنوان</h1>
                            <span className="text-[#44c455] font-semibold text-sm">12-7-2019</span>
                            <p className="m-0">اليوم العالمي</p>
                        </div>
                        <li>{post.title}</li>
                        <li>{post.contents}</li>
                        <li>{post.steps}</li>
                        <li>{post.country}</li>
                        <li>{post.region}</li>
                        <li>{moment(post.createdAt).fromNow()}</li>
                       
                    </div>
                )
            }
        </React.Fragment>
    )
}
