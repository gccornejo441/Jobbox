import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ContactMe from './ContactMe';
import Skills from './Skills';
import WorkExp from './WorkExp';
import Intern from './Intern';
import Education from './Education';
import Banner from './Banner';

const UserProfile = (props) => {


    return (
        <>
            <div class="flex flex-col w-screen md:w-auto">
                <div class="flex justify-between">
                    {/* SEARCHBAR */}
                    <div>
                        <form>
                            <div>
                                <span class="flex pt-3 pl-4">
                                    <div class="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer bg-gray-50 text-gray-500">
                                        <SearchIcon class="h-5 w-5" />
                                    </div>
                                    <input class="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg pl-2" type="search" placeholder="Search" />
                                </span>
                                <div class="pt-3 pl-4">
                                    <form action="/api/pdfBuilder" method="POST">
                                        <div class="flex flex-col invisible hidden">
                                            <label for="user"></label>
                                            <input type="text" name="username" value={props.user.nickname} />
                                        </div>
                                        <button type="submit" class="px-2 text-sm h-8 tracking-widest font-medium text-white rounded-md bg-blue-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Download Resume
                                        </button>
                                    </form>
                                    <button onClick={() => download()} type="button" class="px-2 text-sm h-8 tracking-widest font-medium text-white rounded-md bg-blue-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Menu as="div" class="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div class="flex mt-4 mr-5 hidden lg:flex">
                                    <div class="mr-2 relative top-2">
                                        <BellIcon class="h-6 w-6" />
                                        <div class="absolute top-0 right-0 bg-red-500 border-2  border-red-50 rounded-2xl h-3 w-3"></div>
                                    </div>
                                    <Menu.Button class="bg-regal-blue flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-regal-blue focus:ring-white">
                                        <span class="sr-only">Open user menu</span>
                                        <img src="/images/no-picture.jpg" class="h-8 w-8 rounded-full" />
                                    </Menu.Button>
                                    <p class="text-sm font-semibold text-cyan-800 mt-1 mx-3">{props.user.nickname}</p>
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
                                                    href="/user/profile"
                                                    class={
                                                        active ? 'bg-yellow-100' : '',
                                                        'block px-4 py-2 text-sm text-yellow-700'
                                                    }
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    class={
                                                        active ? 'bg-yellow-100' : '',
                                                        'block px-4 py-2 text-sm text-yellow-700'
                                                    }
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    class={
                                                        active ? 'bg-yellow-100' : '',
                                                        'block px-4 py-2 text-sm text-yellow-700'
                                                    }
                                                >
                                                    Sign out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
                <div class="pt-3 xl:px-4 flex justify-center">
                    <div class="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max">
                        <div class="flex justify-center bg-regal-blue xl:px-12 md:rounded-t-lg">
                            <Banner user={props.user} resume={props.resume} />
                        </div>
                        {/* CHANGE THIS FOR MOBILE */}
                        <div class="flex">
                            <div class="py-4 px-6">
                                <div class="pt-3">
                                    <ContactMe user={props.user} resume={props.resume} />
                                </div>
                                <div>
                                    <Skills user={props.user} resume={props.resume} />
                                </div>
                            </div>
                            <div class="w-full">
                                <WorkExp user={props.user} resume={props.resume} />
                                <Intern user={props.user} resume={props.resume} />
                                <Education user={props.user} resume={props.resume} />
                            </div>
                        </div>
                        <div class="border-b border-gray-300 flex justify-center w-screen md:w-auto">
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
                <div class="h-28 w-max bg-transparent"></div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}

                <iframe width="600" height="700"></iframe>
            </div>
        </>
    )
}



export default UserProfile;