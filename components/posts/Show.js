import React from 'react';
import Image from 'next/image';
import moment from 'site-settings/moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ShowPost({ item = []}) {

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
                        {item?.images?.map((img)=> {
                            return (
                                <SwiperSlide key={img.id}>
                                    <div className="flex justify-center">
                                     <Image src={img.img_uri} width={'300px'} height={'300px'} />
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="w-full px-4 lg:w-1/2">
                        <h2
                            className="mb-6 text-3xl font-bold leading-tight text-[#20C67B] sm:mb-8 sm:text-[38px] lg:mb-0 mt-0 select-none"
                        >
                            {item?.title}
                            <br className="hidden xs:block" />
                        </h2>
                        <span className="mb-2 text-base font-semibold text-[#f3b121] selection:bg-[#44c455] selection:text-white">
                            {moment(item?.createdAt).fromNow()}
                        </span>
                        <h3 className="m-0 mt-4 font-bold text-[#20C67B]">المحتوى</h3>
                        <p>{item?.contents}</p>
                        <h3 className="m-0 mt-4 font-bold text-[#20C67B]">ملخص</h3>
                        <p>{item?.steps}</p>
                        <div className="flex">
                            <p className="ml-5 font-semibold text-[#20C67B] underline">{item?.country}</p>
                            <p className="ml-5 font-semibold text-[#f3b121] underline">{item?.region}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}