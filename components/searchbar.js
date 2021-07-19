import { SearchIcon, BellIcon, DocumentTextIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline';
import MainBody from './mainbody'
import { useUser } from '@auth0/nextjs-auth0'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react';

const SearchBar = () => {
    const { user } = useUser();

    return (
        <>
            <div class="border-5 border-violet-500 flex flex-col">
                <div class="flex justify-between">
                    {/* SEARCHBAR */}
                    <div>
                        <form action="POST">
                            <div>
                                <span class="flex pt-3 pl-4">
                                    <div class="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer bg-gray-50 text-gray-500">
                                        <SearchIcon class="h-5 w-5" />
                                    </div>
                                    <input class="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg pl-2 w-3/4 sm:w-full" type="search" placeholder="Search" />
                                </span>
                            </div>
                        </form>
                        <div class="pt-3 px-4 flex">
                            <a href="/user/resume-builder" data-testid="logout" class="w-max bg-regal-blue hover:bg-green-300 hover:text-regal-blue text-gray-50 p-2 rounded-lg text-sm my-2 flex border hidden lg:flex">
                                <span><DocumentTextIcon class="w-5 h-5 mr-1" /></span>Resume Builder</a>
                            <a href="/api/auth/logout" data-testid="logout" class="w-max bg-regal-blue hover:bg-green-300 hover:text-regal-blue text-gray-50 p-2 rounded-lg text-sm my-2 flex border hidden lg:flex">
                                <span><LogoutIcon class="w-5 h-5 mr-1" /></span>Log Out</a>                        
                        </div>
                    </div>
                    <Menu as="div" class="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div class="flex mt-4 mr-5 hidden lg:flex">
                                    <div class="mr-2 relative top-2">
                                        <BellIcon class="h-6 w-6" />
                                        <div class="absolute top-0 right-0 bg-red-500 border-2 border-red-50 rounded-2xl h-3 w-3"></div>
                                    </div>
                                    <Menu.Button class="bg-regal-blue flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-regal-blue focus:ring-white">
                                        <span class="sr-only">Open user menu</span>
                                        <img src="/images/no-picture.jpg" class="h-8 w-8 rounded-full" />
                                    </Menu.Button>
                                    <p class="text-sm font-semibold text-cyan-800 mt-1 mx-3">{user.nickname}</p>
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
                                                    href="/api/auth/logout"
                                                    class={
                                                        active ? 'bg-yellow-100' : '',
                                                        'block px-4 py-2 text-sm text-yellow-700'
                                                    }
                                                >
                                                    Log Out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
                <div class="pt-3 px-4">
                    <MainBody />
                </div>
            </div>
        </>
    )
}

export default SearchBar;