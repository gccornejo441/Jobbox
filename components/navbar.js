import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";


export default function Navbar({ isShowing }) {
  const { user } = useUser();

  return (
    <>
      <Disclosure as="nav" className="bg-white fixed w-screen top-0 z-20">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* RACKET SPACE LOGO */}
                <div className="flex w-max rounded-md px-2">
                  <a href="/v2/pro-builder">
                  <span>
                    <Image src="/images/jobbox.svg" alt="Jobster Logo" height={45} width={120} />
                  </span>
                  </a>
                </div>
                {/* RACKET SPACE LOGIN & LOGOUT */}
                <div className="hidden lg:flex">
                  {user ? (
                    <>
                      <ul className="flex">
                        <li className="md:mx-3">
                            <a href="/api/auth/logout" data-testid="logout" className="text-gray-50 border rounded-md bg-regal-blue text-md p-2">
                              Logout
                            </a>
                        </li>
                        <li className="md:mx-3">
                            <a href="/v2/pro-builder" className="text-regal-blue rounded-md bg-green-300 text-md p-2">
                              Resume Builder
                            </a>
                        </li>
                        <li className="md:mx-3">
                          <div className="text-lg text-regal-blue">
                            <h1>Hello, {user.nickname}!</h1>
                          </div>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <li className="md:mx-3 list-none">
                        <a href="/api/auth/login" data-testid="login" className="text-regal-blue rounded-md bg-green-300 text-regal-blue text-md p-2">
                          Login
                        </a>
                      </li>
                    </>
                  )}
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-50 hover:bg-regal-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 z-30" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Transition
              appear={true}
              show={isShowing}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="lg:hidden relative">
                {user ? (
                  <>
                    <ul className="bg-regal-blue absolute z-20 top-0 w-full opacity-95">
                      <li className="border-t-2 border-green-400 py-4 text-center">
                          <a href="/v2/pro-builder" className="ml-8 text-gray-50 hover:underline">
                            Resume Builder
                          </a>
                      </li>
                      <li className="border-t-2 border-green-400 py-4 text-center">
                          <a href="/api/auth/logout" data-testid="logout" className="ml-8 text-gray-50 hover:underline">
                            Logout
                          </a>
                      </li>
                      <li className="border-b-2 border-t-2 border-green-400 py-4 flex flex-row-reverse">
                        <div className="text-normal text-gray-50 mr-8">
                          <h1>Hello, {user.nickname}!</h1>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="bg-regal-blue absolute z-20 top-0 w-full opacity-95">
                      <li className="border-t-2 border-b-2 border-green-400 py-4 text-center">
                          <a href="/api/auth/login" data-testid="login" className="ml-8 text-gray-50 hover:underline">
                            Login
                          </a>
                      </li>
                    </ul>
                  </>
                )}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  )
}
