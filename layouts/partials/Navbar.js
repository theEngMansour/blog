import React, { useContext, useState } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { Disclosure } from '@headlessui/react'
import { Storage } from '@capacitor/storage';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [click, setClick] = useState(false)

  const { loggedIn, setLoggedIn } = useContext(AuthContext)

  const logOut = async () => {
    await Storage.remove({key: 'accessToken'})
    setLoggedIn(false)
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



  const { formatMessage } = useIntl()

  const navigation = [
    { name: formatMessage({id: 'drawer.home'}), href: '#' , current: false },
    { name: formatMessage({id: 'drawer.feature'}), href: '#feature', current: false},
    { name: formatMessage({id: 'drawer.work'}), href: '#work', current: false },
    { name: formatMessage({id: 'drawer.blog'}), href: '#blog', current: false },
    { name: formatMessage({id: 'drawer.contact'}), href: '#contact', current: false },

  ]

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white bg-red-500 hover:bg-red-500 border-0">
                  {open ? (
                    <Image src={'/svg/cross-free-icon-font.svg'} width={20} height={20} alt={'Feature'} />
                  ) : (
                    <Image src={'/svg/menu-burger-free-icon-font.svg'} width={20} height={20} alt={'Feature'} />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setClick(item.href)}
                        className={classNames(
                          item.current ? 'text-red-500' : 'text-gray-500 hover:text-red-500 hover:font-bold',
                          'px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {loggedIn? (         
                      <div className="flex space-x-4">
                        <Link href={'/profile'} passHref>
                          <a
                            className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                          >
                            <FormattedMessage id={'drawer.profile'}/>
                          </a>
                        </Link>
                        <a 
                          onClick={() => logOut()}
                          className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-red-500 bg-red-100"
                        >
                          <FormattedMessage id={'drawer.logout'}/>
                        </a>
                      </div>
                      ) : (
                      <div className="flex space-x-4">
                        <Link href={'/login'} passHref>
                          <a
                            className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                          >
                             <FormattedMessage id={'header.login'}/>
                          </a>
                        </Link>
                        <Link href={'/register'} passHref>
                          <a
                            className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-50 bg-green-500"
                          >
                            <FormattedMessage id={'title.register'}/>
                          </a>
                        </Link>
                      </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => setClick(click)}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-500 hover:text-red-500 hover:font-bold',
                    'block px-3 py-2 rounded-md text-base font-medium no-underline'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {loggedIn? (         
              <div className="flex space-x-4">
                <Link href={'/profile'} passHref>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                  >
                    <FormattedMessage id={'drawer.profile'}/>
                  </a>
                </Link>
                <a 
                  onClick={() => logOut()}
                  className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-red-500 bg-red-100"
                >
                  <FormattedMessage id={'drawer.logout'}/>
                </a>
              </div>
              ) : (
              <div className="flex space-x-4">
                <Link href={'/login'} passHref>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                  >
                      <FormattedMessage id={'header.login'}/>
                  </a>
                </Link>
                <Link href={'/register'} passHref>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-50 bg-green-500"
                  >
                    <FormattedMessage id={'title.register'}/>
                  </a>
                </Link>
              </div>
              )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
