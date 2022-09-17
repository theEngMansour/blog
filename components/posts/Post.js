import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'site-settings/moment';
import Image from 'next/image';
import Link from 'next/link';

export default function Posts({ items = []}) {
    return (
        <React.Fragment>
            <section id="blog" className="py-[34px] bg-white">
                <Link href={`/`} passHref>
                    <button className="flex w-50 m-5 items-center text-white justify-center rounded-md border-0 border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <Image src={'/svg/arrow-small-right-free-icon-font.svg'} width={17.5} height={17.5} alt={'Feature'} />
                    </button>
                </Link>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-12 md:mb-12">
                        {items.map((post) => 
                            <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
                                <span className="block mb-6 overflow-hidden rounded-md">
                                    <Image src={post.images[0].img_uri} width={'1024px'} height={'576px'} alt={post.title} />
                                </span>
                                <div className="mb-4">
                                    {post.tags.map(tag => 
                                        <Link key={tag?.tag?.id} href={`tag/${tag?.tag?.slug}?id=${post?.id}`} passHref>
                                            <span>
                                                <span className="inline-block mx-3 py-1 px-3 text-xs leading-5 text-white hover:text-white font-medium uppercase bg-red-500 hover:bg-[#d70133dc] cursor-pointer rounded-full shadow-sm">{tag?.tag?.name}</span>
                                            </span>
                                        </Link>
                                    )}
                                </div>
                                <p style={{ fontFamily: "Montserrat-Light"}} className="mb-2 text-coolGray-500 font-medium">{moment(post.createdAt).fromNow()}</p>
                                <p style={{ fontFamily: "Montserrat-Bold"}} className="selection:bg-red-500 selection:text-white inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold">{post.title}</p>
                                <p style={{ fontFamily: "Montserrat-Light"}} className="selection:bg-red-500 selection:text-white mb-4 text-base md:text-lg text-coolGray-400 font-medium m-0">{post.contents.substr(0,220)}
                                    <Link href={`/posts/${post.id}`} passHref><span className="mr-3 text-blue-600 cursor-pointer"><FormattedMessage id={'blog.more'} /></span></Link>
                                </p>
                            </div>
                        )}                    
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}