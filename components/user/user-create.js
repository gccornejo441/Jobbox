import { SearchIcon, BellIcon, UserAddIcon, PlusIcon, MinusIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import MainBody from '../mainbody'
import { useUser } from '@auth0/nextjs-auth0'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Counter from '../../lib/counter/Counter'
import ExpBox from './ExpBox'
import { nanoid } from 'nanoid'

let BUILD = [
    {
        "id": "textarea-" + nanoid(4),
        "title": 1
    },
];


const UserCreate = () => {
    // importing user form auth0
    const { user } = useUser();
    const [divy, setDivy] = useState([...BUILD]);
    const [count, setCount] = useState(2)

    const addDiv = async () => {
        console.log(divy);
        await setCount(count + 1);

        const newDivy = { "id": nanoid(), "title": count };
        setDivy([...divy, newDivy]);
    }

    const removeDiv = async () => {
        divy.length === 1 ? (
            // Temporary
            alert("STOP PRESSING ME!!!")
        ) : (
            await setCount(count - 1),
            divy.pop(),
            setDivy([...divy])
        )
    }

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
                                    {/* <p class="text-sm font-semibold text-cyan-800 mt-1 mx-3">{user.nickname}</p> */}
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
                <div class="pt-3 px-4 flex justify-center">
                    <div class="bg-white rounded-lg shadow-md w-3/4 lg:w-max px-12">
                        {/* <div class="border-b border-gray-300 flex justify-center">
                            <div class="m-5 flex">
                                <Image src="/images/profile_picture.jpg" height={200} width={200} class="rounded-full" />
                                <div class="flex flex-col py-3 px-4">
                                    <span class="flex">
                                        <h1 class="text-lg font-bold text-blue-900">Admin Assistant</h1>
                                        <h2 class="text-sm text-gray-500 mt-1 mx-2">USA Homeownership Foundation</h2>
                                    </span>
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <div>
                                        <span class="inline-block align-middle text-lg text-blue-900">Former</span>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div>
                                                <span class="inline-block align-middle text-sm text-blue-900 mr-2">United States Marine Corps</span>
                                            </div>
                                            <div>
                                            <span class="inline-block align-middle text-sm text-gray-500 mr-2">Motor Transport Operator</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="p-10">
                            <h1 class="text-2xl">New Persona</h1>
                        </div>
                        <div class="border-b border-gray-300 flex justify-center">
                            <div class="m-5 flex">
                                {/* <Image src="/images/no-picture.jpg" height={200} width={200} class="rounded-full shadow-md" /> */}
                                <div class="flex flex-col py-3 px-4">
                                    <span class="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                    <span class="grid grid-cols-2 gap-5">
                                        <div class="flex flex-col">
                                            <label for="first-name">First Name</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="first-name" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="last-name">Last Name</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="last-name" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="street">Street Address</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="street" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="city">City</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="city" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="zip">Zip Code</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="zip" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="email">Email</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="email" placeholder="" />
                                        </div>
                                    </span>
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <div>
                                        <span class="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school-1">School 1</label>
                                                <input class="inline-block align-middle text-lg font-bold text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school-1" placeholder="" />
                                            </div>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school-1-start">Year Started</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-1-start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school-1-end">Year Ended</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-1-end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school-2">School 2</label>
                                                <input class="inline-block align-middle text-lg font-bold text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school-2" placeholder="" />
                                            </div>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school-2-start">Year Started</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-2-start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school-2-end">Year Ended</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-2-end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school-3">School 3</label>
                                                <input class="inline-block align-middle text-lg font-bold text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school-1" placeholder="" />
                                            </div>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school-3-start">Year Started</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-3-start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school-3-end">Year Ended</label>
                                                    <input class="inline-block align-middle text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="date" name="school-3-end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EXPERIENCE - START */}
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <span class="flex flex-row-reverse">
                                        <button type="button" onClick={removeDiv} class="border-2 border-violet-500 bg-violet-500 text-gray-50 border border-violet-800 m-2 p-1"><MinusIcon class="h-7 w-7" /></button>
                                        <button type="button" onClick={addDiv} class="border-2 border-violet-500 bg-teal-500 text-gray-50 border border-teal-800 m-2 p-1"><PlusIcon class="h-7 w-7" /></button>
                                    </span>
                                    <ExpBox elements={divy} />
                                    {/* EXPERIENCE - END */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-evenly p-20 text-blue-900">
                                No Data
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default UserCreate;