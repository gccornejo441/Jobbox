/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import SideNav from './sidenav';
import MobileNavView from './mobilenavView';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const MobileNav = () => {
    return (
        <>
            <Disclosure as="nav" class="bg-regal-blue">
                {({ open }) => (
                    <>
                        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div class="relative flex items-center justify-between h-16">
                                <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button class="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span class="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon class="block h-6 w-6 fixed z-30" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon class="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    {/* <div class="flex-shrink-0 flex items-center">
                  <img
                    class="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    class="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div> */}
                                    {/* <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        class={classNames(
                          item.current ? 'bg-yellow-900 text-white' : 'text-yellow-300 hover:bg-yellow-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div> */}
                                </div>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* <button class="bg-yellow-800 p-1 rounded-full text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button> */}

                                    {/* Profile dropdown */}
                                    {/* <Menu as="div" class="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button class="bg-yellow-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white">
                          <span class="sr-only">Open user menu</span>
                          <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                class={classNames(
                                  active ? 'bg-yellow-100' : '',
                                  'block px-4 py-2 text-sm text-yellow-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                class={classNames(
                                  active ? 'bg-yellow-100' : '',
                                  'block px-4 py-2 text-sm text-yellow-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                class={classNames(
                                  active ? 'bg-yellow-100' : '',
                                  'block px-4 py-2 text-sm text-yellow-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu> */}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel class="lg:hidden">
                            <div class="absolute z-20 top-0 bg-regal-blue h-auto pb-96">
                               <MobileNavView/>
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