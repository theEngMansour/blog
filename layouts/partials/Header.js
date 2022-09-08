import { FormattedMessage } from 'react-intl';

export default function Header() {
  return (
  <section className="relative bg-white overflow-hidden bg-[url('/svg/pattern-white.svg')] bg-center">
    <div className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight m-0">
              <FormattedMessage id={'header.title'}/>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight m-0 my-2 text-green-500">
              <FormattedMessage id={'header.subtitle'}/>
            </h1>
            <p style={{ fontFamily: "Montserrat-Light"}} className="mb-8 text-lg md:text-xl text-gray-500 font-light">
              <FormattedMessage id={'header.desc'}/>
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-auto md:mr-4 mx-2">
                <span className="inline-block py-3 pointer-events-none px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm">
                  <FormattedMessage id={'header.login'}/>
                </span>
              </div>
              <div className="w-full md:w-auto md:mr-4 mx-2">
                <span className="inline-block py-3 pointer-events-none px-7 w-full text-coolGray-800 md:text-lg leading-4 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm">
                <FormattedMessage id={'title.register'}/>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max">
              {/* <img className="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="flex-ui-assets/elements/circle3-yellow.svg" alt=""></img>
              <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-blue.svg" alt=""></img>
              <img className="relative rounded-7xl" src="flex-ui-assets/images/headers/header.jpg" alt=""></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}