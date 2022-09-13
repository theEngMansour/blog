import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-[20px] md:py-[27px] bg-white bg-[url('/svg/pattern-white.svg')] bg-bottom">
            <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"><FormattedMessage id={'drawer.contact'} /></h3>
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                        <div className="max-w-xs mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-[50px] h-[50px] bg-red-500 rounded-full">
                                <Image src={'/svg/hand-holding-heart.svg'} width={27} height={27} alt={'Feature'} />
                            </div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-900 font-bold"><FormattedMessage id={'email'} /></h3>
                            <p className="mb-4 text-lg md:text-xl font-medium text-gray-500 leading-7"><FormattedMessage id={'sub.email'} /></p>
                            <a className="text-lg md:text-xl text-red-500 hover:text-red-600 font-medium" href="mailto:#">contact@flex.co</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                        <div className="max-w-xs mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-[50px] h-[50px] bg-red-500 rounded-full">
                                <Image src={'/svg/hand-holding-heart.svg'} width={27} height={27} alt={'Feature'} />
                            </div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-900 font-bold"><FormattedMessage id={'phone'} /></h3>
                            <p className="mb-4 text-lg md:text-xl font-medium text-gray-500 leading-7"><FormattedMessage id={'sub.phone'} /></p>
                            <p className="text-lg md:text-xl text-red-500 font-medium">+7-843-00-00</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                        <div className="max-w-xs mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-[50px] h-[50px] bg-red-500 rounded-full">
                                <Image src={'/svg/hand-holding-heart.svg'} width={27} height={27} alt={'Feature'} />
                            </div>
                            <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-900 font-bold"><FormattedMessage id={'office'} /></h3>
                            <p className="mb-4 text-lg md:text-xl font-medium text-gray-500 leading-7"><FormattedMessage id={'sub.office'} /></p>
                            <p className="text-lg md:text-xl font-medium text-red-500">1686, Aden, Yemen</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}