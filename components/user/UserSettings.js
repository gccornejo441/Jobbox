import { SearchIcon, BellIcon, CogIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ExpBox from "./ExpBox";
import SkillsModal from "./SkillsModal";


const UserSettings = (props) => {
    console.log(props.user);

    return (
        <>
            <div className="flex flex-col w-screen md:w-auto">
                <div className="flex justify-between">
                    {/* SEARCHBAR */}
                    <div>
                        <form>
                            <div>
                                <span className="flex pt-3 pl-4">
                                    <div className="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer md:bg-gray-100 text-gray-500">
                                        <SearchIcon className="h-5 w-5" />
                                    </div>
                                    <input className="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg pl-2" type="search" placeholder="Search" />
                                </span>
                            </div>
                        </form>
                    </div>
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div className="flex mt-4 mr-5 hidden lg:flex">
                                    <div className="mr-2 relative top-2">
                                        <BellIcon className="h-6 w-6" />
                                        <div className="absolute top-0 right-0 bg-red-500 border-2 border-red-50 rounded-2xl h-3 w-3"></div>
                                    </div>
                                    <Menu.Button className="bg-red-400 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-400 focus:ring-white">
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
                                                    href="#"
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
                    <div className="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max xl:px-12 mb-12 py-12">
                        <div>
                            <ul>
                                <li>
                                    <div className="text-center">
                                        <h1 className="text-2xl py-6">Hello, {props.user.nickname.charAt(0).toUpperCase() + props.user.nickname.slice(1)}</h1>
                                    </div>
                                </li>
                                <li className="text-center py-4">
                                    <span>
                                        Do you want to delete your account?
                                    </span>
                                </li>
                                <li className="grid grid-cols-2 gap-8 py-5">
                                    <form action="/api/deleteUser" method="POST">
                                        <div className="flex flex-col invisible hidden">
                                            <label className="py-2" htmlFor="user"></label>
                                            <input type="text" name="username" defaultValue={props.user.name} />
                                        </div>
                                        <button className="flex justify-center text-sm py-3 w-full flex tracking-widest font-medium text-white rounded-md bg-red-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Yes</button>
                                    </form>
                                    <form action="/api/handler" method="GET">
                                        <button className="flex justify-center text-sm py-3 w-full flex tracking-widest font-medium text-white rounded-md bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Cancel</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default UserSettings;