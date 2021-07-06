import { SearchIcon, BellIcon, PlusIcon, MinusIcon, CogIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ExpBox from './ExpBox';
import { nanoid } from 'nanoid';
import SkillsModal from "./SkillsModal";
import config from './config'


const Builder = (props) => {
    const [divy, setDivy] = useState(config.BUILD);
    const [count, setCount] = useState(2);


    // Ref to increment btn.
    const disablePlusBtn = useRef();


    // This adds element.
    const addDiv = async () => {
        let newDivy = {};
        divy.length === 5 ? (
            disablePlusBtn.current.disabled = true
        ) : (
            disablePlusBtn.current.disabled = false,
            // The count state is incremented by 1 for avoid unnesscessary play.
            await setCount(count + 1),
            newDivy = { "id": "exp_" + nanoid(4), "count": count },
            // State is set with copy and new.
            setDivy([...divy, newDivy])
        )

    }

    // This removes element.
    const removeDiv = async () => {
        divy.length === 1 ? (
            disablePlusBtn.current.disabled = true
        ) : (
            await setCount(count - 1),
            divy.pop(),
            setDivy([...divy])
        )
    }

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
                                        <div class="absolute top-0 right-0 bg-red-500 border-2 border-red-50 rounded-2xl h-3 w-3"></div>
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
                <div class="pt-3 xl:px-4 flex justify-center ">
                    <div class="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max xl:px-12">
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
                        <div class="p-5 xl:p-10">
                            <h1 class="text-2xl text-regal-blue">Resume Builder</h1>
                        </div>
                        <div class="border-b border-gray-300 flex justify-center w-screen md:w-auto">
                            <form action="/api/handler" method="POST" class="m-5 grid grid-cols-1">
                                {/* <Image src="/images/no-picture.jpg" height={200} width={200} class="rounded-full shadow-md" /> */}
                                <div class=" py-3 xl:px-4 md:w-auto">
                                    <span class="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                    <span class="xl:grid grid-cols-2 gap-5">
                                        <div class="flex flex-col">
                                            <label for="first_name">First Name</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="first_name" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="last_name">Last Name</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="last_name" placeholder="" />
                                        </div>
                                    </span>
                                    <span class="xl:grid grid-cols-2 gap-5">
                                        <div class="flex flex-col">
                                            <label for="street">Street Address</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="street" placeholder="" />
                                        </div>
                                    </span>
                                    <span class="xl:grid grid-cols-3 gap-5">
                                        <div class="flex flex-col">
                                            <label for="city">City</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="city" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="state">State</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="state" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="zip">Zip Code</label>
                                            <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" type="text" name="zip" placeholder="" />
                                        </div>
                                    </span>
                                    <div class="flex flex-col">
                                        <label for="email">Email</label>
                                        <input class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2" name="email" placeholder="" />
                                    </div>
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <div>
                                        <span class="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_1">School 1</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school_1" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_1_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_1_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_1_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_1_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_2">School 2</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school_2" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_2_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_2_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_2_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_2_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_3">School 3</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 bg-gray-50 border border-gray-200 rounded-md pl-2" name="school_3" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_3_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_3_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_3_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 bg-gray-50 border border-gray-200 rounded-md pl-2 " type="date" name="school_3_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EXPERIENCE - START */}
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <span class="inline-block align-middle text-2xl text-regal-blue">Experience</span>
                                    <span class="flex flex-row-reverse">
                                        <button type="button" onClick={removeDiv} class="flex text-sm h-8 tracking-widest font-medium text-white rounded-md bg-fuchsia-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><MinusIcon class="h-full text-fuchsia-600" /></button>
                                        <button ref={disablePlusBtn} type="button" onClick={addDiv} class="flex text-sm h-8 mx-2 tracking-widest font-medium text-white rounded-md bg-green-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><PlusIcon class="h-full text-green-600" /></button>
                                    </span>
                                    <ExpBox elements={divy} />
                                    {/* EXPERIENCE - END */}
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <SkillsModal />
                                </div>
                                <div class="flex justify-center border-t border-gray-200 pt-5">
                                    <button type="submit" class="w-max flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><CogIcon class="h-6 pr-3 text-gray-50" />Generate</button>
                                </div>
                            </form>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
                <div class="h-96 w-max bg-transparent"></div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
            </div>
        </>
    )
}



export default Builder;