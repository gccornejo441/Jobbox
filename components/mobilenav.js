import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import SideNav from './sidenav'
import MobileNavView from './mobilenavView'
import Image from 'next/image'


const MobileNav = (props) => {
  return (
    <>
      <Disclosure as="nav" className="bg-regal-blue">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex items-center justify-between h-16">
                {/* RACKET SPACE LOGO */}
                <div className="flex bg-gray-50 w-max rounded-md px-2">
                  <a href="/resume-builder">
                    <span>
                      <Image src="/images/jobbox.svg" alt="Jobster Logo" height={40} width={120} />
                    </span>
                  </a>
                </div>
                {/* RACKET SPACE LOG */}

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-50 hover:bg-regal-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 fixed z-30 hover:bg-regal-blue hover:text-gray-50" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="absolute z-20 top-0 bg-regal-blue h-auto pb-96">
                <MobileNavView parentProps={props}/>
              </div>
              <div className="px-4 pt-3 bg-teal-900 grid place-content-between lg:hidden hidden sm:block absolute z-10">
                <SideNav />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default MobileNav;