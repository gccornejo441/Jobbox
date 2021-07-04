import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Skills from './Skills';
import config from './config';
import { nanoid } from 'nanoid';
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/solid';


export default function MyModal() {
    let [isOpen, setIsOpen] = useState(true)
    let [skill, setSkill] = useState(config.DATA)
    let [toggleSkill, setToggleSkill] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // This handles input value on 'enter'.
    const handleKeyUp = (evt) => {
        // This prevents unwanted default value on keyup. 
        evt.preventDefault();

        // This will evaluate the keycode that is pressed.
        if (evt.keyCode === 13) {
            const newSkill = { id: nanoid(), title: evt.target.value, icon_state: <PlusIcon class="h-6 w-6 text-green-500" />, };
            // A copy of the previous skill state, & the new state object going in.
            setSkill([...skill, newSkill])
        }
    }



    return (
        <>
            <span class="inline-block align-middle text-2xl text-regal-blue">Skills</span>
            <div class="inset-0 flex items-center justify-end">
                <button
                    type="button"
                    onClick={openModal}
                    class="flex pr-4 pl-2 py-2 text-sm font-medium text-white bg-black rounded-md bg-green-300 border border-green-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <PlusIcon class="h-5 w-5" />Skills
                </button>
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
                            <div class="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Let’s add your skills
                                </Dialog.Title>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        Here are a few suggestions based on your profile to get you started
                                    </p>
                                    <div class="pe-s-form__body ge-form-body ge-suggested-skills-flow__body">
                                        <div id="ember1010" class="ge-base-flow__task-card ge-suggested-skills-flow__task-card ember-view">
                                            <form class="ge-base-flow__form ge-suggested-skills-flow__task-form ">
                                                <div id="ember1011" class="ember-view">
                                                    <div class="ge-suggested-skills-flow__skills-body">
                                                        <fieldset class="scroll-container ge-suggested-skills-flow__container">
                                                            <legend class="ge-suggested-skills-flow__container-legend">Select your skills</legend>
                                                            <ul class="ge-skills-checkbox-list">
                                                                <Skills elements={skill} />
                                                            </ul>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>    </div>
                                </div>

                                <div class="mt-4">
                                    {/* Used to toggle "Add another skill" button. */}
                                    {
                                        toggleSkill ? (
                                            <>
                                                <div class="flex justify-between">
                                                    <button type="button" onClick={() => setToggleSkill(false)} class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">Add Another Skill</button>
                                                    <button class="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">Add To Profile</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div class="flex">
                                                    <div class="flex flex-col w-screen pr-2">
                                                        <label class=""></label>
                                                        <input onKeyUp={handleKeyUp} class="text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent focus-within:bg-gray-300 focus-within:bg-opacity-20" name="skill" placeholder="Add Another Skill" />
                                                    </div>
                                                    <button type="button" onClick={() => setToggleSkill(true)} class="inline-flex justify-center px-4 py-2 text-sm font-medium text-fuchsia-900 bg-fuchsia-100 border border-transparent rounded-md hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-500">Cancel</button>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}