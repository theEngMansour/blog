import React, { useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import Image from 'next/image';
import Navbar from './Navbar';

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
    <Navbar />
  )
}
/* import React, { useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { FormattedMessage } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Storage } from '@capacitor/storage';
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// text-[#faaf40]
// text-[#d70133]
export default function Header() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext)
  const swiper_settings = {
    navigation: true,
    pagination: {
        clickable: true
    },
    autoplay: {
        delay: 3000,
    }
  }

  const logOut = async () => {
    await Storage.remove({key: 'accessToken'})
    setLoggedIn(false)
  }

  return (
  <section className="relative bg-white overflow-hidden bg-[url('/svg/pattern-white.svg')] bg-center">
   
    <div className="py-[60px] md:py-[55px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="md:w-[44%] px-3 sm:p-0">
            <h1 className="text-[44.5px] md:text-5xl lg:text-6xl selection:bg-[#d70133] selection:text-white leading-tight font-bold tracking-tight m-0">
              <FormattedMessage id={'header.title1'}/>
              <span className="bg-[#d70133] text-white"> <FormattedMessage id={'header.title2'} /></span>
            </h1>
            <h1 className="text-[43.5px] md:text-5xl lg:text-6xl selection:bg-[#faaf40] selection:text-white leading-tight font-bold tracking-tight m-0 my-2 text-[#d70133]">
              <FormattedMessage id={'header.subtitle'}/>
            </h1>
            <p style={{ fontFamily: "Montserrat-Light"}} className="mb-8 text-[15.5px] md:text-xl text-gray-500 font-light selection:text-white selection:bg-[#faaf40]">
              <FormattedMessage id={'header.desc'}/>
            </p>
          
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mt-4 sm:mt-0">
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
        </div>
      </div>
    </div>
  </section>
  )
} */