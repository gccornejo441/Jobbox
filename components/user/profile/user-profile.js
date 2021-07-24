import { SearchIcon, BellIcon, DocumentDownloadIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Intern from "./Intern";
import Education from "./Education";
import Banner from "./Banner";

const UserProfile = (props) => {
    return (
        <>
            <div className="flex flex-col w-screen md:w-auto">
                <div className="flex justify-between">
                    {/* SEARCHBAR */}
                    <div>
                        <div>
                            <span className="flex pt-3 pl-4">
                                <div className="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer bg-gray-50 text-gray-500">
                                    <SearchIcon className="h-5 w-5" />
                                </div>
                                <input className="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg pl-2" type="search" placeholder="Search" />
                            </span>
                            <div className="pt-3 pl-4">
                                <form action="/api/pdfBuilder" method="POST">
                                    <div className="flex flex-col invisible hidden">
                                        <label htmlFor="user"></label>
                                        <input type="text" name="username" defaultValue={props.user.nickname} />
                                    </div>
                                    <button type="submit" className="px-2 text-sm py-3 flex tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <DocumentDownloadIcon className="h-5 w-5" /> Download
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div className="flex mt-4 mr-5 hidden lg:flex">
                                    <div className="mr-2 relative top-2">
                                        <BellIcon className="h-6 w-6" />
                                        <div className="absolute top-0 right-0 bg-red-500 border-2  border-red-50 rounded-2xl h-3 w-3"></div>
                                    </div>
                                    <Menu.Button className="bg-regal-blue flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-regal-blue focus:ring-white">
                                        <span className="sr-only">Open user menu</span>
                                        <img src="/images/no-picture.jpg" className="h-8 w-8 rounded-full" />
                                    </Menu.Button>
                                    <p className="text-sm font-semibold text-cyan-800 mt-1 mx-3">{props.user.nickname}</p>
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
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/user/profile"
                                                    className={
                                                        active ? "bg-yellow-100" : "",
                                                        "block px-4 py-2 text-sm text-yellow-700"
                                                    }
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/user/settings"
                                                    className={
                                                        active ? "bg-yellow-100" : "",
                                                        "block px-4 py-2 text-sm text-yellow-700"
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
                                                    className={
                                                        active ? "bg-yellow-100" : "",
                                                        "block px-4 py-2 text-sm text-yellow-700"
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
                <div className="pt-3 xl:px-4 flex justify-center">
                    <div className="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max">
                        <div className="flex justify-center bg-regal-blue xl:px-12 md:rounded-t-lg">
                            <Banner user={props.user} resume={props.resume} />
                        </div>
                        {/* CHANGE THIS FOR MOBILE */}
                        <div className="md:flex">
                            <div className="py-4 px-6">
                                <div className="pt-3">
                                    <ContactMe user={props.user} resume={props.resume} />
                                </div>
                                <div>
                                    <Skills user={props.user} resume={props.resume} />
                                </div>
                            </div>
                            <div className="w-full">
                                <WorkExp user={props.user} resume={props.resume} />
                                <Intern user={props.user} resume={props.resume} />
                                <Education user={props.user} resume={props.resume} />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 flex justify-center w-screen md:w-auto">
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
                <div className="h-28 w-max bg-transparent"></div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
            </div>
        </>
    )
}



export default UserProfile;