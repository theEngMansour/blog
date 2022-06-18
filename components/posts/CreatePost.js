import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TextEditor from 'components/editor';
import GetLocation from 'components/location';
import { usePhotoGallery } from 'hooks/usePhotoGallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CreatePost() {
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [steps, setSteps] = useState()
    const [photos, setPhotos] = useState([])
    const takePhotoRef = useRef()
console.log(country, region, photos)
    const {takePhoto, blobUrl} = usePhotoGallery()

    useEffect(() => {
        if (blobUrl) {
            const imgUrls = [blobUrl, ...photos]
            setPhotos(imgUrls)
        }
    }, [blobUrl])

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
            <section className="bg-[#F4F7FF] py-[50px] flex justify-center">
                <div className="container">
                    <div
                        className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                    >
                        <div className="mb-10 text-center md:mb-16">
                            <Image src="/logo/logokoora.svg" width={'400px'} height={'120px'} alt="logo"/>
                        </div>
                        <form>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bordder-[#E9EDF4] w-full rounded-md border-0 bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                            </div>
                            <TextEditor sendToParent={setSteps} />
                            <span className="inline-block mt-3" ref={takePhotoRef} onClick={takePhoto}>إضغط هنا للإضافة صور</span>
                            {photos.length > 0 ? 
                                <Swiper {...swiper_settings} modules={[Pagination, Navigation, Autoplay]}>   
                                    {photos.map((img, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="flex justify-center">
                                                    <Image src={img} width={'300px'} height={'300px'} onClick={() => takePhotoRef.current.click()} />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            :
                            <div className="flex flex-col justify-center border-dotted border-gray-200 border-[2px] p-3 select-none">
                                <div className="w-10 h-10 leading-10 select-none bg-green-600 border-0 text-center text-2xl font-bold text-white self-center" onClick={() => takePhotoRef.current.click()}>+</div>
                            </div> 
                            }
                            <GetLocation country={setCountry} region={setRegion} />
                            <div className="mb-10">
                                <input
                                    type="submit"
                                    value="موافق"
                                    className="w-full cursor-pointer rounded-md border-0 bg-[#45b97c] py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}