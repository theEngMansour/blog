import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HowWork() {
    
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
    <section dir='ltr' className="py-10 bg-white overflow-hidden bg-[url('/svg/pattern-white.svg')] bg-center">
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                    <div className="relative mx-auto md:ml-0 max-w-max">
                    <Swiper {...swiper_settings} modules={[Pagination, Navigation, Autoplay]}>   
                <SwiperSlide> 
                  <Image src={'/foods/1.png'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
                <SwiperSlide> 
                  <Image src={'/foods/2.png'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
                <SwiperSlide> 
                  <Image src={'/foods/3.png'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
              </Swiper>
                    </div>
                </div>
                <div dir='rtl' className="w-full md:w-1/2 px-4">
                    <h2 style={{ fontFamily: "Montserrat-Bold"}} className="mb-12 text-4xl md:text-5xl leading-tight tracking-tighter">
                        <FormattedMessage id={'how.work.title'}/>
                    </h2>
                    <div className="flex flex-wrap -mx-4 text-center md:text-right">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-red-500 font-semibold rounded-full">1</div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl font-bold"><FormattedMessage id={'how.work.title.1'}/></h3>
                            <p className="font-medium text-coolGray-500"><FormattedMessage id={'how.work.sub.1'}/></p>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-red-500 font-semibold rounded-full">2</div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl font-bold"><FormattedMessage id={'how.work.title.2'}/></h3>
                            <p className="font-medium text-coolGray-500"><FormattedMessage id={'how.work.sub.2'}/></p>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-red-500 font-semibold rounded-full">3</div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl font-bold"><FormattedMessage id={'how.work.title.3'}/></h3>
                            <p className="font-medium text-coolGray-500"><FormattedMessage id={'how.work.sub.3'}/></p>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-red-500 font-semibold rounded-full">4</div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl font-bold"><FormattedMessage id={'how.work.title.4'}/></h3>
                            <p className="font-medium text-coolGray-500"><FormattedMessage id={'how.work.sub.4'}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}