import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
  <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 overflow-hidden">
    <div className="bg-tarnsparent">
      <nav className="flex justify-between p-6 px-4">
       <Image src={'/logo/logo.svg'} width={'150%'} height={'100%'} />
      </nav>
    </div>
    <div className="md:py-4">
      <div className="container mx-auto">
        <div className="flex flex-center xl:items-center">
          <div className="w-full mb-0 text-center">
            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight select-none m-0">أصنــع ماتحــب</p>
            <p style={{ fontFamily: "Montserrat-Bold"}} className="text-4xl md:text-5xl lg:text-[3.35rem] leading-tight tracking-tight select-none text-blue-800 m-0 md:mt-4">وشارك ماتصنع !</p>
            <p style={{ fontFamily: "Montserrat-Light"}} className="mb-8 text-lg md:text-xl text-gray-500 font-medium select-none">كن من النخبـة وشـارك المحتـوى العـربي</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-blue-300 lg:py-[120px] md:w-1/2 w-[90%] md:h-[400px] m-auto">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-10/12">
          <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[450px]">
              <div className="absolute top-0 left-0 z-10 flex md:h-32 h-full w-full items-center justify-center bg-primary bg-opacity-90">
                <p className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary md:h-[100px] md:w-[100px]">
                  <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                  {/* <Image src={'/svg/play.svg'} width={400} height={400} /> */}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
  </section>
  );
};
export default Header;
