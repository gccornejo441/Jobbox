import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import ContactMe from './ContactMe'; 
import Skills from './Skills';
import WorkExp from './workExp';

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
                            </div>
                        </form>
                    </div>
                    <Menu as="div" class="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div class="flex mt-4 mr-5 hidden lg:flex">
                                    <div class="mr-2 relative top-2">
                                        <BellIcon class="h-6 w-6" />
                                        <div class="absolute top-0 right-0 bg-red-500  border-red-50 rounded-2xl h-3 w-3"></div>
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
                            <div class="m-5 flex">
                                <Image src="/images/profile_picture.jpg" height={200} width={200} class="rounded-full" />
                                <div class="flex flex-col py-3 px-4 ">
                                    <span class="flex">
                                        <h1 class="text-lg font-bold text-white">Admin Assistant</h1>
                                        <h2 class="text-sm text-gray-400 mt-1 mx-2">USA Homeownership Foundation</h2>
                                    </span>
                                    <div class="w-full my-5"></div>
                                    <div class="text-sm max-w-prose">
                                        <p class="text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit, mauris quis tempus fringilla, diam metus dictum lorem, non molestie velit velit eu nisl. Sed facilisis mauris vehicula arcu consectetur laoreet. Praesent eu blandit sapien.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                <div class="border-b-4 border-regal-blue">
                                    <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Work Experience</h1>
                                </div>
                                <div>
                                    <ul>
                                        <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                            Administrative Assistant
                                        </li>
                                        <li class="text-xl text-regal-blue pl-4 pt-2">
                                            USA Homeownership Foundation
                                        </li>
                                        <li class="text-sm text-regal-blue pl-4 pt-2">
                                            04/2021 - Current
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Nunc rhoncus porttitor est sit amet laoreet. Nullam ullamcorper nisi suscipit dapibus hendrerit. Phasellus volutpat elementum justo quis ornare.
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Sed elementum ultricies magna, nec consectetur nunc vulputate ac. Proin gravida, mi id tempus aliquam, libero diam luctus est, id malesuada lorem mi in odio.
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Ut a blandit eros, consequat dapibus leo. Cras lobortis est ipsum, vel imperdiet diam convallis vel. Etiam arcu est, posuere vel mi nec, facilisis cursus quam. Nunc nulla mi, efficitur et vestibulum sed, lobortis eget orci.
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Fusce urna quam, tristique ac nisi quis, molestie efficitur orci. In fringilla, purus quis varius sodales, nisi magna placerat dolor, at blandit nulla massa ut elit.
                                            </p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                            Motor Transport Operator
                                        </li>
                                        <li class="text-xl text-regal-blue pl-4 pt-2">
                                            United States Marine Corps
                                        </li>
                                        <li class="text-sm text-regal-blue pl-4 pt-2">
                                            09/2015 - 09/2019
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Maintained a total of 54 pieces of Military trucks and equipment: 32 MTVR(s)/7 Ton trucks, 8 MK593/7 Ton Cargo Trailers, 14 M119/Water Bowl(s).
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Briefed top executives on weekly duties.
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                In preparation for biannual Executive Officer’s Readiness Inspection; identified and conducted training seminars for untrained team members, updating administrative files on Military trucks and equipment.
                                            </p>
                                        </li>
                                        <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                            <div class="mt-1">
                                                <VscDebugBreakpointLog class="h-4 w-4" />
                                            </div>
                                            <p>
                                                Wrote up military awards and recommendations using Microsoft Word and government interfaces.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="border-b-4 border-regal-blue">
                                        <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Internships & Volunteer Work</h1>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-regal-blue">University of California, Math CEO</p>
                                                    <p class="text-blue-700">09/2020</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-regal-blue">Connected Camps Monitor</p>
                                                    <p class="text-blue-700">11/2020</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-8">
                                    <div class="border-b-4 border-regal-blue">
                                        <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Education</h1>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-blue-800 text-lg">A.A in Liberal Arts: Science and Math</p>
                                                    <p class="text-regal-blue font-semibold">Coastline Community College</p>
                                                    <p class="text-blue-700 text-sm">09/2017 - 04/2018</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-blue-800 text-lg">B.A in Education Sciences</p>
                                                    <p class="text-regal-blue font-semibold">University of California, Irvine</p>
                                                    <p class="text-blue-700 text-sm">06/2019 - 12/2020</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-blue-800 text-lg">B.S in Computer Science</p>
                                                    <p class="text-regal-blue font-semibold">Western Governors University</p>
                                                    <p class="text-blue-700 text-sm">04/2021 - Current</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
            </div>
        </>
    )
}



export default UserProfile;