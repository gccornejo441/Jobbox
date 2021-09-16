import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Skills from "./Skills";
import config from "./config";
import { nanoid } from "nanoid";
import { PlusIcon, XIcon } from "@heroicons/react/solid";


export default function MyModal(props) {
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

    // This handles input value on "enter".
    const handleKeyUp = (evt) => {
        // This prevents unwanted default value on keyup. 
        evt.preventDefault();

        // This will evaluate the keycode that is pressed.
        if (evt.keyCode === 13) {
            setToggleSkill(true)
            const newSkill = { id: nanoid(), title: evt.target.value, icon_state: config.plus, };
            // A copy of the previous skill state, & the new state object going in.
            setSkill([newSkill, ...skill]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let filteredSkill = skill.filter(item => item.icon_state.type == config.check.type);
        setDisplay(filteredSkill);
    }

    const handleCancel = (skillId) => {
        let setskills = displayItem.filter(item => skillId !== item.id);
        setDisplay(setskills);
    }

    return (
        <>
            <span className="inline-block align-middle text-2xl text-regal-blue">Skills</span>
            <div>
                <button
                    type="button"
                    onClick={openModal}
                    className="flex pr-4 pl-2 py-2 text-sm tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <PlusIcon className="h-5 w-5" />Skills
                </button>
            </div>
            <div className="md:grid grid-cols-3">
                <>
                    {displayItem === undefined ? (
                        <>
                            <div></div>
                            <div className="w-auto flex justify-center p-4 text-gray-200">
                                <div className="p-4 text-gray-200">
                                    No Data
                                </div>
                            </div>
                        </>
                    ) : (displayItem.map((item) => {
                        return (
                            <div className="max-w-full p-4 text-gray-200">
                                <div className="text-white text-sm bg-blue-600 rounded-2xl w-max p-2 flex" key={item.id}>
                                    <span>{item.title}</span>
                                    <label role="checkbox">
                                        <input name="skills" defaultValue={item.title} type="text" className="invisible hidden" />
                                        <button className="focus:outline-none" onClick={() => handleCancel(item.id)} type="button">
                                            <XIcon className="w-3 h-3 mt-1" />
                                        </button>
                                    </label>
                                </div>
                            </div>
                        )
                    })
                    )}
                </>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-20 transition-opacity"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
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
                            <div className="inline-block w-full max-w-3xl sm:p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div >

                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-gray-50 bg-regal-blue p-5 sm:rounded-lg"
                                    >
                                        <div className="flex justify-between">
                                            <div>
                                                <span>Let’s add your skills</span>
                                                <p className="text-xs sm:text-sm text-gray-50 font-thin">
                                                    Here are a few suggestions based on your profile to get you started
                                                </p>
                                            </div>
                                            <button type="button" onClick={closeModal} className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-0">
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </Dialog.Title>
                                    <div className="mt-2 px-2 pb-3 sm:px-0 sm:pb-0">
                                        <legend className="px-5 text-center text-lg text-yellow-600">Select your skills</legend>
                                        <Skills elements={skill} />
                                        <div className="mt-4">
                                            {/* Used to toggle "Add another skill" button. */}
                                            {
                                                toggleSkill ? (
                                                    <>
                                                        <div className="flex justify-between">
                                                            <button type="button" onClick={() => setToggleSkill(false)} className="inline-flex justify-center px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">Add Another Skill</button>
                                                            <button type="button" onClick={(e) => handleSubmit(e)} className="inline-flex justify-center px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500">Add To Profile</button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="flex">
                                                            <div className="flex flex-col w-screen pr-2">
                                                                <label className=""></label>
                                                                <input onKeyUp={handleKeyUp} className="text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent focus-within:bg-gray-300 focus-within:bg-opacity-20" name="skill" placeholder="Add Another Skill" />
                                                            </div>
                                                            <button type="button" onClick={() => setToggleSkill(true)} className="inline-flex justify-center px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-fuchsia-900 bg-fuchsia-100 border border-transparent rounded-md hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fuchsia-500">Cancel</button>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
