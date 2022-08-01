import Image from 'next/image';

export default function Welcome() {
    return (
        <aside className="overflow-hidden bg-[url(/hero.png)] bg-center bg-no-repeat bg-cover">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25">
                <div className="max-w-lg text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white selection:sm:text-3xl md:text-5xl text-right my-4">
                   أصنع ماتحب وشارك ماتصنع !
                </h2>
                <p
                    className="max-w-md text-white/90 md:mt-0 md:text-lg md:leading-relaxed md:block text-right m-0"
                >
                    معاً لنشر المحتوى العربي
                </p>
                <div className="flex justify-center">
                    <p className="inline-flex items-center px-8 py-3 text-white transition bg-yellow-600 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                    >
                    <span className="text-sm font-medium">هيا بنا</span>
                    </p>
                </div>
                </div>
            </div>
        </aside>
    )
}