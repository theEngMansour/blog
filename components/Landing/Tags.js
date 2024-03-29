import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

export default function Tag({items}) {
    return (
        <section className="bg-[url('/svg/pattern-white.svg')] bg-top py-4">
            <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                <h3 style={{ fontFamily: "Montserrat-Bold"}} className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"><FormattedMessage id={'tag.title'} /></h3>
                <p style={{ fontFamily: "Montserrat-Light"}} className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium"><FormattedMessage id={'tag.sub'} /></p>
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-3">
                    {items.map(({ id, name, slug, description }) =>
                        <div key={id} className="w-full md:w-1/2 xl:w-1/4 p-3">
                            <div className="p-6 pb-10 bg-white border border-coolGray-100 rounded-md shadow-sm select-none">
                                <div className="flex flex-wrap items-end justify-between -m-2 mb-7">
                                    <div className="w-auto p-2">
                                    <h3 className="text-coolGray-500 text-center max-w-max mx-auto px-2 py-1 text-red-500 font-medium text-xs bg-red-100 rounded-ful">{slug}</h3>
                                    </div>
                                </div>
                                <h2 style={{ fontFamily: "Montserrat-Bold"}} className="text-center font-medium text-2xl text-coolGray-900 tracking-tighter">{name}</h2>
                                <p style={{ fontFamily: "Montserrat-Light"}} className="max-w-max mx-auto px-2 py-1 text-gray-500 font-medium text-xs bg-gray-50 text-right">{description.substr(0,30)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Link href={`/tag`} passHref>
                <button className="flex border-0 items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-red-50 font-medium bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 md:max-w-max rounded-md mt-10">
                    <span className="mx-3"><FormattedMessage id={'blog.browser'} /></span>
                </button>
            </Link>
        </section>
    )
}