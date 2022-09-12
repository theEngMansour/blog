import { FormattedMessage } from 'react-intl';

export default function Welcome() {
    return (
        <section className="py-6 bg-white">
            <div className="container px-4 mx-auto">
                <div className="text-center">
                    <h1 className="max-w-3xl mx-auto text-5xl font-bold text-center md:text-6xl lg:text-7xl mb-0 selection:bg-[#d70133] selection:text-white"><FormattedMessage id={'header.title'}/><br className="hidden lg:inline" /><span className="text-red-500"> <FormattedMessage id={'header.subtitle'}/></span></h1>
                    <p style={{ fontFamily: "Montserrat-Light"}} className="my-6 max-w-xl mx-auto text-center text-gray-700 text-md leading-relaxed md:mt-8 md:text-lg lg:mt-10"><FormattedMessage id={'header.desc'}/></p>
                    <div className="flex mb-10 mx-auto max-w-max text-center justify-center">
                        <img className="w-[300px] md:w-[70%] select-none" src="macbook.png" alt="macbook"/>
                    </div>
                </div>
            </div>
        </section>
    )
}