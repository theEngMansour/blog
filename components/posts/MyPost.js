import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Swipeable from './Swipeable';
import moment from 'site-settings/moment';
import Link from 'next/link';
import { AuthContext } from 'layouts/AuthContext';
import { Button } from '@mui/material';
import { deletePost } from 'hooks/usePost';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

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
            <section className="py-[34px] bg-white bg-left-top">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4 mb-12 md:mb-12">
                        {items.slice().reverse().map((post) =>
                            <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
                                <button className="flex w-90 items-center my-4 text-white justify-center rounded-md border-0 border-gray-300 bg-gray-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                                onClick={() => {
                                    setIsOpen(true)
                                    setPostId(post.id)
                                }}>
                                    <Image src={'/svg/apps-free-icon-font.svg'} width={16.5} height={16.5} alt={'Feature'} />
                                </button>
                                <span className="block mb-6 overflow-hidden rounded-md">
                                    <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                                </span>
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
                        
            <Swipeable isOpen={isOpen} value={setIsOpen}>
                <Link href={`/my-posts/${postId}/edit`} passHref>
                    <Button sx={{ fontSize: 16}} style={{ fontFamily: "Montserrat-Light"}}><FormattedMessage id={'blog.edit'} /></Button>
                </Link>
                <Button sx={{ fontSize: 16}} style={{ fontFamily: "Montserrat-Light"}} onClick={destroy}><FormattedMessage id={'blog.delete'} /></Button>
            </Swipeable>
        </React.Fragment>
    )
}
