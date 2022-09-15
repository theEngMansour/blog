import Image from 'next/image'

export default function Footer() {
    return (
      <footer className="p-4 bg-white sm:p-6 bg-[url('/svg/pattern-white.svg')] bg-top">
        <div className="md:flex md:justify-between">
          <div className="md:mb-0">
            <div><Image src="/svg/logo-bemedia.svg" width={100} height={100} alt="bemedia"/></div>
            <span className="self-center text-xl font-semibold whitespace-nowrap font-mono text-red-500 m-0">BeeMedia</span>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center font-mono m-0">© 2022 BeeMedia All Rights Reserved
          </span>
        </div>
      </footer>
    )
}