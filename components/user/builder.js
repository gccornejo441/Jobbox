import { SearchIcon, BellIcon, PlusIcon, MinusIcon, CogIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';
import ExpBox from './ExpBox';
import { nanoid } from 'nanoid';
import SkillsModal from "./SkillsModal";
import config from './config';


const Builder = (props) => {
    const [divy, setDivy] = useState(config.BUILD);
    const [count, setCount] = useState(1);

    // Ref to increment btn.
    const disablePlusBtn = useRef();

    // This increments experience.
    const addDiv = async () => {
        let newDivy = {};
        divy.length === 5 ? (
            disablePlusBtn.current.disabled = true
        ) : (
            disablePlusBtn.current.disabled = false,
            // The count state is incremented by 1 for avoid unnesscessary play.
            await setCount(count + 1),
            newDivy = { "id": "exp_" + nanoid(4), "count": count + 1, "title": "Previous Employer", "current": "Previous Position" },
            // State is set with copy and new.
            setDivy([...divy, newDivy])
        );
    }

    // This decrements experience.
    const removeDiv = async () => {
        divy.length === 1 ? (
            disablePlusBtn.current.disabled = true
        ) : (
            await setCount(count - 1),
            divy.pop(),
            setDivy([...divy])
        );
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
                                    <div class="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer md:bg-gray-100 text-gray-500">
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
                    <div class="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max xl:px-12 mb-12">
                        <div class="p-5 mt-8 mx-8 xl:p-10 bg-regal-blue rounded-lg">
                            <h1 class="text-2xl text-gray-50 tracking-widest">Resume Builder</h1>
                        </div>
                        <div class="border-b border-gray-300  w-screen md:w-auto">
                            <form action="/api/handler" method="POST" class="m-5 grid grid-cols-1">
                                {/* <Image src="/images/no-picture.jpg" height={200} width={200} class="rounded-full shadow-md" /> */}
                                <div class="py-3 xl:px-4 md:w-auto">
                                    <span class="inline-block align-middle text-2xl text-regal-blue">General Information</span>
                                    <span class="xl:grid grid-cols-2 gap-5">
                                        <div class="flex flex-col">
                                            <label for="first_name">First Name</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="first_name" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="last_name">Last Name</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="last_name" placeholder="" />
                                        </div>
                                    </span>

                                    <span class="xl:grid grid-cols-3 gap-5">
                                        <div class="flex flex-col">
                                            <label for="city">City</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="city" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="state">State</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="state" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="zip">Zip Code</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="zip" placeholder="" />
                                        </div>
                                    </span>
                                    <span class="xl:grid grid-cols-2 gap-5">
                                        <div class="flex flex-col">
                                            <label for="email">Email</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="email" name="email" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="phone">Phone</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" name="phone" placeholder="" />
                                        </div>
                                    </span>
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <div>
                                        <span class="inline-block align-middle text-2xl text-regal-blue">Education</span>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_1">School 1</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_1" placeholder="" />
                                                <label for="school_degree_1">Degree</label>
                                                <input placeholder="BS in Biological Sciences" class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_degree_1" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_1_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_1_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_1_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_1_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_2">School 2</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_2" placeholder="" />
                                                <label for="school_degree_2">Degree</label>
                                                <input placeholder="BS in Biological Sciences" class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_degree_2" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_2_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_2_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_2_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_2_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xl:grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label for="school_3">School 3</label>
                                                <input placeholder="" class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_3" placeholder="" />
                                                <label for="school_degree_3">Degree</label>
                                                <input placeholder="BS in Biological Sciences" class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="school_degree_3" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="school_3_start">Year Started</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_3_start" placeholder="" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <label for="school_3_end">Year Ended</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="school_3_end" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EXPERIENCE - START */}
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <span class="inline-block align-middle text-2xl text-regal-blue">Experience</span>
                                    <div class="flex flex-row-reverse my-5">
                                        <div class="bg-regal-blue w-max p-4 rounded-lg">
                                            <div class="text-gray-50 text-center tracking-widest">Job</div>
                                            <span class="flex flex-row-reverse">
                                                <button type="button" onClick={removeDiv} class="text-sm h-8 tracking-widest font-medium text-white rounded-md bg-gray-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><MinusIcon class="h-full text-blue-800" /></button>
                                                <button ref={disablePlusBtn} type="button" onClick={addDiv} class="mr-2 text-sm h-8  tracking-widest font-medium text-white rounded-md bg-gray-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><PlusIcon class="h-full text-blue-800" /></button>
                                            </span>
                                        </div>
                                    </div>

                                    <ExpBox elements={divy} />

                                    {/* EXPERIENCE - END */}
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <SkillsModal />
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <span class="inline-block align-middle text-2xl text-regal-blue">Socials</span>
                                    <span class="xl:grid grid-cols-3 gap-5 pb-12">
                                        <div class="flex flex-col">
                                            <label for="linkedin">LinkedIn</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="linkedin" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="twitter">Twitter</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="twitter" placeholder="" />
                                        </div>
                                        <div class="flex flex-col">
                                            <label for="github">Github</label>
                                            <input class="text-lg font-bold text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2" type="text" name="github" placeholder="" />
                                        </div>
                                    </span>
                                    <div class="border-b border-gray-200 w-full my-5"></div>
                                    <span class="inline-block align-middle text-2xl text-regal-blue">Internships & Volunteer Work</span>
                                    <span class="xl:grid grid-cols-2 gap-5 pb-12">
                                            <div class="flex flex-col">
                                                <label for="internship_1">Internship 1</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_1" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="internship_1_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="internship_1_year" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label for="internship_2">Internship 2</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_2" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="internship_2_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="internship_2_year" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label for="internship_3">Internship 3</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="internship_3" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="internship_3_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="internship_3_year" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label for="volunteer_1">Volunteer 1</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_1" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="volunteer_1_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="volunteer_1_year" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label for="volunteer_2">Volunteer 2</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_2" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="volunteer_2_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="volunteer_2_year" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label for="volunteer_3">Volunteer 3</label>
                                                <input class="inline-block align-middle text-lg font-medium text-blue-900 mr-2 md:bg-gray-100 border border-gray-200 rounded-md pl-2" name="volunteer_3" placeholder="" />
                                            </div>
                                            <div class="sm:grid grid-cols-2 gap-2">
                                                <div class="flex flex-col">
                                                    <label for="volunteer_3_year">Year</label>
                                                    <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="volunteer_3_year" placeholder="" />
                                                </div>
                                            </div>
                                    </span>
                                </div>
                                <div class="flex justify-center border-t border-gray-200 pt-16 pb-12">
                                <div class="flex flex-col invisible hidden">
                                            <label for="user"></label>
                                            <input type="text" name="username" value={props.user.nickname} />
                                        </div>
                                    <button type="submit" class="w-max flex py-2 px-4 text-md tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"><CogIcon class="h-6 pr-3 text-gray-50" />Generate</button>
                                </div>
                            </form>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Builder;