import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { CloudIcon } from '@heroicons/react/solid'
import { useUser } from '@auth0/nextjs-auth0';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { user } = useUser();

  return (
    <>
      <Disclosure as="nav" class="bg-white">
        {({ open }) => (
          <>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                {/* RACKET SPACE LOGO */}
                <div class="flex">
                  <span class="p-2 text-green-300">
                    <CloudIcon class="h-6 w-6" />
                  </span>
                  <span class="text-regal-blue text-xl p-2">
                    Jobster
                  </span>
                </div>

                {/* RACKET SPACE LOG */}
                <div class="flex">
                  {user ? (
                    <>
                      <li class="flex hidden md:flex mx-3">
                        <a href="/api/auth/logout" data-testid="logout" class="text-regal-blue border rounded-md bg-green-300 text-regal-blue text-xl p-2">
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li class="flex hidden md:flex mx-3">
                        <a href="/api/auth/login" data-testid="login" class="text-regal-blue border rounded-md bg-green-300 text-regal-blue text-xl p-2">
                          Login
                        </a>
                      </li>
                    </>
                  )}


                </div>

                <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button class="inline-flex items-center justify-center p-2 rounded-md text-regal-blue hover:text-regal-blue hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon class="block h-6 w-6 fixed z-30 hover:bg-regal-blue hover:text-regal-blue" aria-hidden="true" />
                    ) : (
                      <MenuIcon class="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel class="lg:hidden">
              <div class="flex h-screen relative sm:hidden">
                <a href="./dashboard" class="text-regal-blue border rounded-md bg-green-300 text-regal-blue text-xl p-2 mx-auto h-12">
                  Sign In
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div class="w-screen bg-regal-blue h-2">
      </div>
    </>
  )
}
