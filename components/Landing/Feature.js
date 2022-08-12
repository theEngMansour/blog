export default function Feature() {
    return (
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-[#1C60E4] sm:text-4xl sm:tracking-tight m-0"><span className="text-black">مميزات</span> الكو</p>
              <p  style={{ fontFamily: "Montserrat-Light"}} className="m-0 mt-1 max-w-2xl text-md text-gray-500 lg:mx-auto">أقراء ما يميز الكو عن باقي المواقع</p>
            </div>
            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1C60E4] text-white">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <p style={{ fontFamily: "Montserrat-Medium"}} className="m-0 mr-16 text-lg leading-6 font-medium text-[#1C60E4] selection:text-blue-900">وأجهة عربية</p>
                        </dt>
                        <dd style={{ fontFamily: "Montserrat-Light"}} className="mt-0 mr-16 text-base text-gray-500">جميع واجهات التطبيق عربية</dd>
                    </div>
                    {/* Start */}
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1C60E4] text-white">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p style={{ fontFamily: "Montserrat-Medium"}} className="m-0 mr-16 text-lg leading-6 font-medium text-[#1C60E4] selection:text-blue-900">سهولة الإستخدام</p>
                        </dt>
                        <dd style={{ fontFamily: "Montserrat-Light"}} className="mt-0 mr-16 text-base text-gray-500">مايميز الكو سهولة اسنخدامة</dd>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1C60E4] text-white">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p style={{ fontFamily: "Montserrat-Medium"}} className="m-0 mr-16 text-lg leading-6 font-medium text-[#1C60E4] selection:text-blue-900">التفــاعل</p>
                        </dt>
                        <dd style={{ fontFamily: "Montserrat-Light"}} className="mt-0 mr-16 text-base text-gray-500">تفاعل مع المنشورات بالأعجاب و تعليق</dd>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1C60E4] text-white">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <p style={{ fontFamily: "Montserrat-Medium"}} className="m-0 mr-16 text-lg leading-6 font-medium text-[#1C60E4] selection:text-blue-900">محرر نصوص</p>
                        </dt>
                        <dd style={{ fontFamily: "Montserrat-Light"}} className="mt-0 mr-16 text-base text-gray-500">محرر نصوص سهل وانيق</dd>
                    </div>
                    {/* End */}
                </dl>
            </div>
          </div>
        </div>
    )
}