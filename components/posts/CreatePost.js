import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TextEditor from 'components/editor';
import GetLocation from 'components/location';
import { usePhotoGallery } from 'hooks/usePhotoGallery';
import { FormattedMessage, useIntl } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CreatePost() {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [steps, setSteps] = useState()
    const [photos, setPhotos] = useState([])
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [alert, setAlert] = useState({photos: false, content: false})

    const takePhotoRef = useRef()
    const {takePhoto, blobUrl} = usePhotoGallery()
    const { formatMessage } = useIntl()

    useEffect(() => {
        if (blobUrl) {
            const imgUrls = [blobUrl, ...photos]
            setPhotos(imgUrls)
        }
    }, [blobUrl])

    useEffect(() => {
        setAlert({...alert, photos: false, content: false}) 
    }, [title, content, steps, photos])

    const swiper_settings = {
        navigation: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
        }
    }

    const validator = () => {
        if(photos.length > 0) {
            if (title && content && steps) {
                console.log('sucessfuly')
            } else {
                setAlert({...alert, content: true})
            }
        } else {
            setAlert({...alert, photos: true})
        }
    }

    return (
        <React.Fragment>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto text-center">
                <h1 style={{ fontFamily: "Jannat"}} className="text-2xl font-bold sm:text-3xl m-0"><FormattedMessage id={'title.ask'}/></h1>
                <p className="mt-1 text-gray-500">
                    <FormattedMessage id={'create.welcome'}/>
                </p>
            </div>
            <div className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div>
                    <div className="relative">
                        <input
                        type="email"
                        className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-blue-500"
                        placeholder={
                            formatMessage({
                                id: 'title'
                            })
                        }
                        />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <input
                        type="email"
                        className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-blue-500"
                        placeholder={
                            formatMessage({
                                id: 'content'
                            })
                        }
                        />
                    </div>
                </div>
                <div> 
                    <div className="relative">
                        <TextEditor sendToParent={setSteps} />
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit"
                        className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg outline-none border-0">
                        {
                            formatMessage({
                                id: 'is.ok'
                            })
                        }
                    </button>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

/* 

<section className="bg-[#F4F7FF] py-[50px] flex justify-center">
{alert.photos &&(<h1>No enter any photo</h1>)}
{alert.content &&(<h1>No enter any content</h1>)}
<div className="container">
    <div
        className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
    >
        <div className="mb-10 text-center md:mb-16">
            <Image src="/logo/logokoora.svg" width={'400px'} height={'120px'} alt="logo"/>
        </div>
     
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="العنوان"
                    onChange={(e) => setTitle(e.target.value)}
                    className="bordder-[#E9EDF4] w-full rounded-md border-0 bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="المحتوى"
                    onChange={(e) => setContent(e.target.value)}
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
                <button  
                    onClick={validator}
                    value="موافق"
                    className="w-full cursor-pointer rounded-md border-0 bg-[#45b97c] py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                />
            </div>
      
    </div>
</div>
</section> */