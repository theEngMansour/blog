import { FormattedMessage } from 'react-intl';

export default function Feature() {
    return (
    <section className="py-[18px] md:pb-32 bg-white">
        <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
            <h1 className="mb-4 text-3xl text-[#d70133] md:text-4xl leading-tight font-bold tracking-tighter"><FormattedMessage id={'feature.header'}/></h1>
            <p style={{ fontFamily: "Montserrat-Light"}} className="text-lg md:text-xl text-gray-600 font-medium m-0"><FormattedMessage id={'feature.subheader'}/></p>
            </div>
            <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
1
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.1'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.1'}/></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
2
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.2'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.2'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
3
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.3'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.3'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
4
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.4'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.4'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
5
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.5'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.5'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#d70133] rounded-lg">
6
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.6'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.6'} /></p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}