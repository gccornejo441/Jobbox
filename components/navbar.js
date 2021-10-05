import { Disclosure, Transition } from "@headlessui/react";
import { ArrowDownIcon, ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";


export default function Navbar({ isShowing }) {
  const { user } = useUser();

  return (
    <>
      <Disclosure as="nav" className="bg-regal-blue fixed w-screen top-0 z-20 h-12">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-12">
                {/* RACKET SPACE LOGO */}
                <div className="flex w-max rounded-md px-2 bg-white h-9">
                  <a href="/v2/pro-builder">
                    <span>
                      <Image src="/images/jobbox.svg" alt="Jobster Logo" height={37} width={120} />
                    </span>
                  </a>
                </div>
                {/* RACKET SPACE LOGIN & LOGOUT */}
                <div className="hidden lg:flex">
                  {user ? (
                    <>
                      <ul className="flex">
                        <li className="md:mx-8">
                          <a href="/api/auth/logout" data-testid="logout" className="text-white border rounded-md bg-regal-blue text-md p-2 hover:bg-fuchsia-300 hover:text-regal-blue hover:border-regal-blue">
                            Logout
                          </a>
                        </li>
                        <li className="md:mx-8">
                          <a href="/v2/pro-builder" className="text-regal-blue rounded-md bg-green-300 text-md p-2">
                            Resume Builder
                          </a>
                        </li>
                        <li className="md:mx-8">
                          <div className="text-md tracking-widest text-white">
                            <h1>Hello, {user.nickname}!</h1>
                          </div>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      {/* <li className="md:mx-8 list-none">
                        <a href="#" className="tracking-wider text-white text-sm flex">
                          Homeownership
                          <ChevronDownIcon className="text-white ml-1" height={20} width={13} />
                        </a>
                      </li>
                      <li className="md:mx-8 list-none">
                        <a href="#" className="tracking-wider text-white text-sm flex">
                          Credit Education
                          <ChevronDownIcon className="text-white ml-1" height={20} width={13} />
                        </a>
                      </li> */}
                      <li className="md:mx-8 list-none">
                        <a href="/resume-now" className="tracking-wider text-white text-sm flex">
                          Resume
                        </a>
                      </li>
                      <li className="md:mx-8 list-none">
                        <a href="/api/auth/login" data-testid="login" className="tracking-wider text-white text-sm flex">
                          Login
                        </a>
                      </li>
                      <li className="md:mx-8 list-none">
                        <a href="/resume-now" className="tracking-wider rounded-md text-white text-sm border border-white hover:bg-green-300 hover:text-regal-blue hover:border-regal-blue p-2">
                          Get Started
                        </a>
                      </li>
                    </>
                  )}
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-regal-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                        <a href="/v2/pro-builder" className="ml-8 text-white hover:underline">
                          Resume Builder
                        </a>
                      </li>
                      <li className="border-t-2 border-green-400 py-4 text-center">
                        <a href="/api/auth/logout" data-testid="logout" className="ml-8 text-white hover:underline">
                          Logout
                        </a>
                      </li>
                      <li className="border-b-2 border-t-2 border-green-400 py-4 flex flex-row-reverse">
                        <div className="text-normal text-white mr-8">
                          <h1>Hello, {user.nickname}!</h1>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="bg-regal-blue absolute z-20 top-0 w-full opacity-95">
                      <li className="border-t-2 border-b-2 border-green-400 py-4 text-center">
                        <a href="/api/auth/login" data-testid="login" className="ml-8 text-white hover:underline">
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
