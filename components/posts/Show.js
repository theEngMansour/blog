import React, { useState } from 'react';
import Image from 'next/image';
import moment from 'site-settings/moment';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Like } from 'components/like';
import { Comment } from 'components/comment';
import {Editor, EditorState, convertFromRaw} from 'draft-js'
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ShowPost({ item = []}) {
    const [likeCount, setLikeCount] = useState()

    const contentState = convertFromRaw(JSON.parse(item?.steps))
    const steps = EditorState.createWithContent(contentState)
    
    const swiper_settings = {
        navigation: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
        }
    }

    return (
        <React.Fragment>
            <section className="py-16 md:py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <Link href={`/posts`} passHref>
                        <button className="flex w-50 m-5 items-center text-white justify-center rounded-md border-0 border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <Image src={'/svg/arrow-small-right-free-icon-font.svg'} width={17.5} height={17.5} alt={'Feature'} />
                        </button>
                    </Link>
                    <div className="md:max-w-2xl mx-auto mb-12 text-center">
                        <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">{item?.title}</h2>
                        <p className="inline-block text-[#ef4444] font-medium">{moment(item?.createdAt).fromNow()}</p>
                    </div>
                    <div className="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
                        <Swiper {...swiper_settings} modules={[Pagination, Navigation, Autoplay]}>   
                            {item?.images?.map((img) => {
                                return (
                                    <SwiperSlide key={img.id}>
                                        <div className="flex justify-center">
                                        <Image src={img.img_uri} width={'300px'} height={'300px'} alt={img.img_uri} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className="md:max-w-3xl mx-auto">
                        <Like sendToParent={setLikeCount} />
                        <div className="m-0">
                            <p className="m-0">{likeCount} إعجاب</p>
                        </div>
                        <p className="mb-4 text-base md:text-lg text-coolGray-500">{item?.contents}</p>
                        <ol className="list-decimal list-inside md:px-5 mb-14 text-base md:text-lg text-coolGray-500">
                            <Editor editorState={steps} readOnly={true} />
                        </ol>
                        <div className="flex">
                            <p className="ml-5 font-semibold text-[#ef4444] font-[Jannat]">{item?.country}</p>
                            <p className="ml-5 font-semibold text-[#ef4444] font-[Jannat]">{item?.region}</p>
                        </div>
                        <Comment />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

