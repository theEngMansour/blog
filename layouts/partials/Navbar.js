import { Disclosure } from '@headlessui/react'
import { useIntl } from 'react-intl';

export default function Navbar() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const { formatMessage } = useIntl()

    const navigation = [
        { name: formatMessage({id: 'drawer.home'}), href: '#', current: false },
        { name: formatMessage({id: 'drawer.about'}), href: '#', current: false },
        { name: formatMessage({id: 'drawer.work'}), href: '#', current: false },
        { name: formatMessage({id: 'drawer.blog'}), href: '#', current: false },

    ]

  return (
    <Disclosure as="nav" className="bg-[#d70133]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white bg-[#d70133] hover:bg-[#d70133] border-0">
                  {open ? (
                   <p>open</p>
                  ) : (
                    <p>close</p>
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
                      <p
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-[#faaf40] text-white' : 'text-white hover:bg-[#faaf40] hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium mx-[35px] cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-white hover:bg-[#faaf40] hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium no-underline'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
