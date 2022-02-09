import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from 'next/link'

export default function Navbar({ isShowing }) {
    const { user } = useUser();

    return (
      <>
        <Disclosure
          as="nav"
          className="bg-regal-blue fixed w-screen top-0 z-20 h-12"
        >
          {({ open }) => (
            <>
              <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-12">
                  {/* RACKET SPACE LOGO */}
                  <div className="flex w-max rounded-md px-2 bg-white h-9">
                    <Link href="/v2/pro-builder">
                      <span>
                        <Image
                          src="/images/Jobbox.me.svg"
                          alt="Jobbox Logo"
                          height={36}
                          width={120}
                        />
                      </span>
                    </Link>
                  </div>
                  {/* RACKET SPACE LOGIN & LOGOUT */}
                  <div className="hidden lg:flex">
                    <li className="md:mx-8 list-none">
                      <Link href="/">
                        <a className="tracking-wider rounded-md text-white text-sm border border-white hover:bg-green-300 hover:text-regal-blue hover:border-regal-blue p-2">
                          Return to Mainpage
                        </a>
                      </Link>
                    </li>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-regal-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="block h-6 w-6 z-30"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
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
                  <>
                    <ul className="bg-regal-blue absolute z-20 top-0 w-full opacity-95">
                      <li className="border-t-2 border-b-2 border-green-400 py-4 text-center">
                        <Link href="/">
                          <a className="ml-8 text-white hover:underline">
                            Return to Mainpage
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </>
    );
}
