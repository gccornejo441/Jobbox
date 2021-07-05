import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Skills from './Skills';
import config from './config';
import { nanoid } from 'nanoid';
import { PlusIcon, XIcon } from '@heroicons/react/solid';


export default function MyModal() {
    let [isOpen, setIsOpen] = useState(false);
    let [skill, setSkill] = useState(config.DATA);
    let [displayItem, setDisplay] = useState();
    let [toggleSkill, setToggleSkill] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    // This handles input value on 'enter'.
    const handleKeyUp = (evt) => {
        // This prevents unwanted default value on keyup. 
        evt.preventDefault();

        // This will evaluate the keycode that is pressed.
        if (evt.keyCode === 13) {
            setToggleSkill(true)
            const newSkill = { id: nanoid(), title: evt.target.value, icon_state: config.plus, };
            // A copy of the previous skill state, & the new state object going in.
            setSkill([...skill, newSkill]);
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let filteredSkill = skill.filter(item => item.icon_state.type == config.check.type);
        setDisplay(filteredSkill);
    }

    const handleCancel = (skill) => {
        let setskills = displayItem.filter(item => skill !== item.id);
        setDisplay(setskills);
    }

    return (
        <>
            <span class="inline-block align-middle text-2xl text-regal-blue">Skills</span>
            <div>
                <button
                    type="button"
                    onClick={openModal}
                    class="flex pr-4 pl-2 py-2 text-sm tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <PlusIcon class="h-5 w-5" />Skills
                </button>
            </div>
            <div class="md:grid grid-cols-3">
                <>
                    {displayItem === undefined ? (
                        <>
                            <div></div>
                            <div class="w-auto flex justify-center p-4 text-gray-200">
                                <div class="p-4 text-gray-200">
                                    No Data
                                </div>
                            </div>
                        </>
                    ) : (displayItem.map((item) => {
                        return (
                            <form class="max-w-full p-4 text-gray-200">
                                <div class="text-white text-sm bg-blue-600 rounded-2xl w-max p-2 flex" key={item.id}>
                                    <span>{item.title}</span>
                                    <label role="checkbox">
                                        <input name={item.title} type="checkbox" class="invisible" />
                                        <button class="focus:outline-none" onClick={() => handleCancel(item.id)} type="button">
                                            <XIcon class="w-3 h-3 mt-1" />
                                        </button>
                                    </label>
                                </div>
                            </form>
                        )
                    })
                    )}
                </>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    class="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-20 transition-opacity"
                    onClose={closeModal}
                >
                    <div class="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay class="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            class="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div class="inline-block w-full max-w-3xl sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <form onSubmit={evt => handleSubmit(evt)}>

                                    <Dialog.Title
                                        as="h3"
                                        class="text-lg font-bold leading-6 text-gray-50 bg-regal-blue p-5 sm:rounded-lg"
                                    >
                                        <div class="flex justify-between">
                                            <div>
                                                <span>Let’s add your skills</span>
                                                <p class="text-xs sm:text-sm text-gray-50 font-thin">
                                                    Here are a few suggestions based on your profile to get you started
                                                </p>
                                            </div>
                                            <button type="button" onClick={closeModal} class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-0">
                                                <span class="sr-only">Close panel</span>
                                                <XIcon class="h-6 w-6" />
                                            </button>
                                        </div>
                                    </Dialog.Title>
                                    <div class="mt-2 px-2 pb-3 sm:px-0 sm:pb-0">
                                        <legend class="px-5 text-center text-lg text-yellow-600">Select your skills</legend>
                                        <Skills elements={skill} />
                                        <div class="mt-4">
                                            {/* Used to toggle "Add another skill" button. */}
                                            {
                                                toggleSkill ? (
                                                    <>
                                                        <div class="flex justify-between">
                                                            <button type="button" onClick={() => setToggleSkill(false)} class="inline-flex justify-center px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">Add Another Skill</button>
                                                            <button type="submit" class="inline-flex justify-center px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">Add To Profile</button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div class="flex">
                                                            <div class="flex flex-col w-screen pr-2">
                                                                <label class=""></label>
                                                                <input onKeyUp={handleKeyUp} class="text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent focus-within:bg-gray-300 focus-within:bg-opacity-20" name="skill" placeholder="Add Another Skill" />
                                                            </div>
                                                            <button type="button" onClick={() => setToggleSkill(true)} class="inline-flex justify-center px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-fuchsia-900 bg-fuchsia-100 border border-transparent rounded-md hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-500">Cancel</button>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
