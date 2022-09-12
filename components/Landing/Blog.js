import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'site-settings/moment';
import Image from 'next/image';
import Link from 'next/link';

export default function Posts({ items = []}) {
    return (
        <React.Fragment>
            <section className="py-[34px] bg-white bg-[url('/svg/pattern-white.svg')] bg-left-top bg-no-repeat">
                <div className="container px-4 mx-auto">
                    <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                        <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"><FormattedMessage id={'blog.title'} /></h3>
                        <p style={{ fontFamily: "Montserrat-Light"}} className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium"><FormattedMessage id={'blog.sub'} /></p>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-12 md:mb-12">
                        {items.map((post) => 
                            <div key={post.id} className="w-full md:w-1/2 px-4 mb-8">
                                <span className="block mb-6 overflow-hidden rounded-md">
                                    <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                                </span>
                                <div className="mb-4">
                                    {post.tags.map(tag => 
                                        <Link href={`tag/${tag?.tag?.slug}?id=${post?.id}`} passHref>
                                          <span key={tag?.tag?.id} className="inline-block mx-3 py-1 px-3 text-xs leading-5 text-white hover:text-white font-medium uppercase bg-red-500 hover:bg-[#d70133dc] cursor-pointer rounded-full shadow-sm">{tag?.tag?.name}</span>
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
                    <Link href={`/posts`} passHref>
                        <button className="flex border-0 items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-red-50 font-medium bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 md:max-w-max rounded-md">
                            <span className="mx-3"><FormattedMessage id={'blog.browser'} /></span>
                        </button>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    )
}

/* 
                    {
                        items.map((post) => 
                            <div key={post.id}>                            
                                <Card sx={{ maxWidth: '100%' , textAlign: 'center', borderRadius: 0}} variant={0}>
                                    <Image src={post.images[0].img_uri} width={'100%'} height={'100%'} alt={post.title} />
                                    <CardContent sx={{textAlign: 'righ'}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        {moment(post.createdAt).fromNow()}
                                        <Typography variant="body2" color="text.secondary">
                                            {post.contents} 
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={`/posts/${post.id}`} passHref>
                                            <Button size="small">المزيد</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    }


*/