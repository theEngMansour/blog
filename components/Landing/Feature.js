import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

export default function Feature() {
    return (
    <section id="feature" className="py-[18px] md:pb-2 bg-[url('/svg/pattern-white.svg')] bg-center">
        <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
            <h1 style={{ fontFamily: "Montserrat-Bold"}} className="mb-4 text-3xl text-[#313131] md:text-4xl leading-tight font-bold tracking-tighter">
                <FormattedMessage id={'feature.header'}/>
                <span className="text-red-500 border-0 border-solid"> <FormattedMessage id={'feature.sub'}/></span>
            </h1>
            <p style={{ fontFamily: "Montserrat-Light"}} className="text-lg md:text-xl text-gray-600 font-medium m-0"><FormattedMessage id={'feature.subheader'}/></p>
            </div>
            <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/hand-holding-heart.svg'} width={30} height={30} />
                </div>
                <h3 className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.1'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.1'}/></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/rocket-lunch.svg'} width={30} height={30} />
                </div>
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.2'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.2'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/truck-side.svg'} width={30} height={30} />
                </div>
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.3'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.3'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/following.svg'} width={30} height={30} />
                </div>
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.4'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.4'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/document-signed.svg'} width={30} height={30} />
                </div>
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.5'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.5'} /></p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-red-500 rounded-lg">
                    <Image src={'/svg/heart.svg'} width={30} height={30} />
                </div>
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-xl md:text-2xl leading-tight font-bold"><FormattedMessage id={'feature.header.6'}/></h3>
                <p className="text-gray-500 font-medium m-0"><FormattedMessage id={'feature.sub.6'} /></p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}