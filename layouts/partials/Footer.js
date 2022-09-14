import Image from 'next/image'

export default function Footer() {
    return (
      <footer class="p-4 bg-white sm:p-6 bg-[url('/svg/pattern-white.svg')] bg-top">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div><Image src="/svg/logo-bemedia.svg" width={100} height={100} alt="bemedia"/></div>
            <span class="self-center text-xl font-semibold whitespace-nowrap font-mono text-red-500">BeeMedia</span>
          </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center font-mono">© 2022 BeeMedia All Rights Reserved
          </span>
        </div>
      </footer>
    )
}