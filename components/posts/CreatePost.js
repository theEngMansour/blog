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
                <h1 style={{ fontFamily: "Jannat"}} className="text-2xl text-[#57be6d] font-bold sm:text-3xl m-0">
                    <FormattedMessage id={'title.ask'}/>
                </h1>
                <p className="mt-1 text-[gray]-500">
                    <FormattedMessage id={'create.welcome'}/>
                </p>
            </div>
            <div className="max-w-lg mx-auto text-center">
                {alert.photos &&(<h1>No enter any photo</h1>)}
                {alert.content &&(<h1>No enter any content</h1>)}
            </div>
            <div className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d] text-gray-500"
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
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#57be6d] text-gray-500"
                            placeholder={
                                formatMessage({
                                    id: 'content'
                                })
                            }
                        />
                    </div>
                </div>
                <div> 
                    <TextEditor sendToParent={setSteps} />
                </div>
                <div ref={takePhotoRef} onClick={takePhoto}>
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
                    <div className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-[2px] border-dashed border-[#ccdbd3] bg-white text-center p-9">
                        <Image src="/svg/upload.svg" className="m-0" width={'50px'} height={'50px'} alt="logo"/>
                        <h2 style={{ fontFamily: "Jannat"}} className="text-xl font-semibold text-[#57be6d] tracking-wide m-0 select-none">
                            {
                                formatMessage({
                                    id: 'upload.image'
                                })
                            }
                        </h2>
                        <p style={{ fontFamily: "Jannat"}} className="text-gray-500 tracking-wide m-0 select-none">
                            {
                                formatMessage({
                                    id: 'upload.image.sub'
                                })
                            }
                        </p>
                    </div>
                    }
                </div>
                <GetLocation country={setCountry} region={setRegion} />
                <div className="flex items-center justify-end">
                    <button type="submit"
                        onClick={validator}
                        className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-[#57be6d] rounded-lg outline-none border-0">
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