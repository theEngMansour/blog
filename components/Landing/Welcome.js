import Image from 'next/image';

export default function Welcome() {
    return (
        <section className="h-[80vh] bg-cover bg-[url('/bg.jpg')]">
            <div className="flex h-full w-full items-center justify-center container mx-auto px-2">
                <div className="md:max-w-2xl text-center select-none w-full">
                    <h1 style={{ fontFamily: "Montserrat-Bold"}} className="text-4xl sm:text-5xl text-black lg:text-6xl m-0">أصنــــع ماتحـــب</h1>
                    <h1 style={{ fontFamily: "Montserrat-Bold"}} className="text-4xl sm:text-5xl text-[#1C60E4] lg:text-6xl m-0 md:m-2">وشارك ماتصنع!</h1>
                    <p style={{ fontFamily: "Montserrat-Light"}} className="md:mt-6 lg:text-lg text-[#717171] sm:text-xl">كـن من النخبة وشارك محتوى العربي</p>
                    <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <button className="transform rounded-md border-0 bg-[#1C60E4] px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-500 focus:outline-none sm:mx-2 w-[80%] sm:w-[30%] m-auto">تسجيل الدخول</button>
                        <button className="transform rounded-md border-0 bg-[#616774] px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-green-500 focus:outline-none sm:mx-2 w-[80%] sm:w-[40%] m-auto">إنشاء حساب</button>
                    </div>
                </div>
            </div>
        </section>
    )
}