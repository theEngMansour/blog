import React, { useState } from 'react';
import Image from 'next/image';
import moment from 'site-settings/moment';
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
            <div className="relative z-10 overflow-hidden rounded bg-primary md:p-[50px] bg-white">
                <div className="flex flex-wrap items-center">
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
                    <div className="w-full px-4">
                        <Like sendToParent={setLikeCount} />
                        <div className="m-0">
                            <p className="m-0">{likeCount} إعجاب</p>
                        </div>
                        <h2
                            className="mb-6 font-[Jannat] text-3xl font-bold leading-tight text-[#20C67B] sm:mb-8 sm:text-[38px] lg:mb-0 mt-0 select-none"
                        >
                            {item?.title}
                            <br className="hidden xs:block" />
                        </h2>
                        <span className="mb-2 text-base font-semibold text-[#f3b121] selection:bg-[#44c455] selection:text-white">
                            {moment(item?.createdAt).fromNow()}
                        </span>
                        <h3 className="m-0 mt-4 font-bold text-[#20C67B] font-[Jannat]">المحتوى</h3>
                        <p>{item?.contents}</p>
                        <h3 className="m-0 mt-4 font-bold text-[#20C67B] font-[Jannat]">ملخص</h3>
                        <Editor editorState={steps} readOnly={true} />
                        <div className="flex">
                            <p className="ml-5 font-semibold text-[#20C67B] font-[Jannat]">{item?.country}</p>
                            <p className="ml-5 font-semibold text-[#f3b121] font-[Jannat]">{item?.region}</p>
                        </div>
                        <Comment />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}