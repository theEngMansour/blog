import React, { useContext, useState, Fragment } from 'react';
import { AuthContext } from 'layouts/AuthContext';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Storage } from '@capacitor/storage';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [click, setClick] = useState(false)

  const { loggedIn, setLoggedIn } = useContext(AuthContext)

  const logOut = async () => {
    await Storage.remove({key: 'accessToken'})
    setLoggedIn(false)
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
                <div style={{ fontFamily: "Montserrat-Light"}} className="flex flex-shrink-0 text-gray-500 items-center text-2xl">
                  <span style={{ fontFamily: "Montserrat-Bold"}} className="text-red-500 mx-1">فاست</span> 
                  فود
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
                      <div className="flex">
                        <Dropdowns> 
                          <Menu.Item>
                            <Link href={'/profile'} passHref>
                              <a
                                className="text-gray-700 block px-4 py-2 text-sm bg-gray-100 text-right no-underline"
                              >
                                <FormattedMessage id={'drawer.profile'}/>
                              </a>
                            </Link>  
                          </Menu.Item>          
                          <Menu.Item>
                            <Link href={'/settings'} passHref>
                              <a
                                className="text-gray-700 block px-4 py-2 text-sm bg-gray-100 text-right no-underline"
                              >
                                <FormattedMessage id={'drawer.settings'}/>
                              </a>
                            </Link>  
                          </Menu.Item>          
                          <Menu.Item>
                            <a
                              onClick={() => logOut()}
                              className="text-gray-700 block px-4 py-2 text-sm bg-gray-100 text-right no-underline"
                            >
                              <FormattedMessage id={'drawer.logout'}/>
                            </a>
                          </Menu.Item>
                        </Dropdowns>
                      </div>
                      ) : (
                      <div className="flex">
                        <Dropdowns> 
                          <Menu.Item>
                            <Link href={'/login'} passHref>
                              <a
                                className="text-gray-700 block px-4 py-2 text-sm bg-gray-100 text-right no-underline"
                              >
                                <FormattedMessage id={'header.login'}/>
                              </a>
                            </Link>  
                          </Menu.Item>          
                          <Menu.Item>
                            <Link href={'/register'} passHref>
                              <a
                                className="text-gray-700 block px-4 py-2 text-sm bg-gray-100 text-right no-underline"
                              >
                                <FormattedMessage id={'title.register'}/>
                              </a>
                            </Link>  
                          </Menu.Item>          
                        </Dropdowns>
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
                  onClick={() => setClick(item.name)}
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
              <div className="flex space-y-4 flex-col">
                <Link href={'/profile'} passHref>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                  >
                    <FormattedMessage id={'drawer.profile'}/>
                  </a>
                </Link>
                <Link href={'/settings'} passHref>
                  <a
                    className="px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer no-underline text-green-500 bg-green-100"
                  >
                    <FormattedMessage id={'drawer.settings'}/>
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


function Dropdowns({children}) {
  return (
    <Menu as="div" className="relative inline-block text-right">
      <div>
        <Menu.Button className="flex w-full items-center text-white justify-center rounded-md border-0 border-gray-300 bg-red-500 px-4 py-2 text-sm font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <Image src={'/svg/apps-free-icon-font.svg'} width={16.5} height={16.5} alt={'Feature'} />
          <span className="mx-2"><FormattedMessage id={'meun'}/></span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}