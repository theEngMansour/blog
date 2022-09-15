import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TextEditor from 'components/editor';
import GetLocation from 'components/location';
import { usePhotoGallery } from 'hooks/usePhotoGallery';
import { TagsInput } from 'components/inputs';
import { FormattedMessage, useIntl } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Alert } from 'components';
import { useTags } from 'hooks/useTags';
import { EditorState } from 'draft-js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CreatePost(props) {
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()
    const [steps, setSteps] = useState()
    const [photos, setPhotos] = useState([])
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [alert, setAlert] = useState({photos: false, content: false})
    const [tags, setTags] = useState([])

    const takePhotoRef = useRef()
    const {takePhoto, blobUrl} = usePhotoGallery()
    const { formatMessage } = useIntl()

    const {data: tagsList} = useTags()

    useEffect(() => {
        if (blobUrl) {
            const imgUrls = [blobUrl, ...photos]
            setPhotos(imgUrls)
        }
    }, [blobUrl])

    useEffect(() => {
        setAlert({...alert, photos: false, content: false}) 
    }, [title, contents, steps, photos])

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
            if (title && contents && steps) {
                props.title(title)
                props.contents(contents)
                props.steps(steps)
                props.photos(photos)
                props.country(country)
                props.region(region)
                props.tags(tags)
            } else {
                setAlert({...alert, content: true})
            }
        } else {
            setAlert({...alert, photos: true})
        }
    }

    return (
        <React.Fragment>
        <div className="max-w-screen-xl px-4 pb-16 pt-0 mx-auto sm:px-6 lg:px-8 m-0">
            <div className="max-w-lg mx-auto text-center">
                {alert.photos && (
                    <Alert 
                        type="error" 
                        title={formatMessage({id: 'alert.photo.title'})}
                        text={formatMessage({id: 'alert.photo.sub'})}
                    />
                )}
                {alert.content && (
                    <Alert 
                        type="error" 
                        title={formatMessage({id: 'alert.content.title'})}
                        text={formatMessage({id: 'alert.content.sub'})}
                    />
                )}
            </div>
            <div className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                            placeholder={
                                formatMessage({
                                    id: 'title'
                                })
                            }
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-4 pr-7 text-sm rounded-lg shadow-sm border-0 focus:outline-[#ef4444] text-gray-500"
                            placeholder={
                                formatMessage({
                                    id: 'content'
                                })
                            }
                            onChange={(e) => setContents(e.target.value)}
                        />
                    </div>
                </div>
                <div> 
                    <TextEditor editorState={EditorState.createEmpty()} sendToParent={setSteps} />
                </div>
                <TagsInput
                    sx={{my:2}}
                    label='input.tags'
                    onChange={setTags}
                    value={tags}
                    options={tagsList.map(e => ({label: e.name, value: e.id}))}
                />
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
                        <h2 style={{ fontFamily: "Montserrat-Bold"}} className="text-xl font-semibold text-red-500 tracking-wide m-0 select-none mt-3">
                            {
                                formatMessage({
                                    id: 'upload.image'
                                })
                            }
                        </h2>
                        <p style={{ fontFamily: "Montserrat-light"}} className="text-gray-500 tracking-wide m-0 select-none">
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
                        className="inline-block hover:bg-[#f8931f] px-5 py-3 ml-3 text-sm font-medium text-white bg-[#ef4444] rounded-lg outline-none border-0">
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