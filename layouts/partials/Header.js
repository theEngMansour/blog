import { FormattedMessage } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// text-[#faaf40]
// text-[#d70133]
export default function Header() {

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
  <section className="relative bg-white overflow-hidden bg-[url('/svg/pattern-white.svg')] bg-center">
    <div className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="md:w-[44%] p-1 sm:p-0">
            <h1 className="text-[46.5px] md:text-5xl lg:text-6xl selection:bg-[#d70133] selection:text-white leading-tight font-bold tracking-tight m-0">
              <FormattedMessage id={'header.title1'}/>
              <span className="bg-[#d70133] text-white"> <FormattedMessage id={'header.title2'} /></span>
            </h1>
            <h1 className="text-[46.5px] md:text-5xl lg:text-6xl selection:bg-[#faaf40] selection:text-white leading-tight font-bold tracking-tight m-0 my-2 text-[#d70133]">
              <FormattedMessage id={'header.subtitle'}/>
            </h1>
            <p style={{ fontFamily: "Montserrat-Light"}} className="mb-8 text-[16.5px] md:text-xl text-gray-500 font-light selection:text-white selection:bg-[#faaf40]">
              <FormattedMessage id={'header.desc'}/>
            </p>
            <div className="flex flex-wrap">
              <div className="w-full mb-3 md:mb-0 md:w-auto md:mr-4 mx-2">
                <span className="inline-block py-3 pointer-events-none px-7 w-full text-base md:text-lg leading-4 text-white font-medium text-center bg-[#d70133] hover:bg-[#d70133d7] focus:ring-2 focus:ring-[#d70133] focus:ring-opacity-50 border border-[#d70133] rounded-md shadow-sm">
                  <FormattedMessage id={'header.login'}/>
                </span>
              </div>
              <div className="w-full md:w-auto md:mr-4 mx-2">
                <span className="inline-block py-3  pointer-events-none px-7 w-full text-coolGray-800 md:text-lg leading-4 font-medium text-center bg-[#faaf40] hover:bg-[#faaf40] focus:ring-2 focus:ring-[#faaf40] focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm">
                <FormattedMessage id={'title.register'}/>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mt-4 sm:mt-0">
              <Swiper {...swiper_settings} modules={[Pagination, Navigation, Autoplay]}>   
                <SwiperSlide> 
                  <Image src={'/foods/1.jpg'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
                <SwiperSlide> 
                  <Image src={'/foods/2.jpg'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
                <SwiperSlide> 
                  <Image src={'/foods/3.jpg'} width={'3508'} height={'2492'} alt={'food'} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}