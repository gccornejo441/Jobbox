import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import SideNav from './sidenav'
import MobileNavView from './mobilenavView'
import Image from 'next/image'


const MobileNav = ({ user }) => {
  return (
    <>
      <Disclosure as="nav" class="bg-regal-blue">
        {({ open }) => (
          <>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                {/* RACKET SPACE LOGO */}
                <div class="flex bg-gray-50 w-max rounded-md p-2">
                  <a href="/">
                  <span class="p-2 text-green-300">
                    <Image src="/images/jobster.png" alt="Jobster Logo" height={30} width={140} />
                  </span>
                  </a>
                </div>
              {/* RACKET SPACE LOG */}

                <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button class="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-regal-blue hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon class="block h-6 w-6 fixed z-30 hover:bg-regal-blue hover:text-gray-50" aria-hidden="true" />
                    ) : (
                      <MenuIcon class="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                </div>
              </div>
            </div>

            <Disclosure.Panel class="lg:hidden">
              <div class="absolute z-20 top-0 bg-regal-blue h-auto pb-96">
                <MobileNavView />
              </div>
              <div class="px-4 pt-3 bg-teal-900 grid place-content-between lg:hidden hidden sm:block absolute z-10">
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