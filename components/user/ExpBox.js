import { ChevronRightIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import config from './config';
import { nanoid } from 'nanoid';
import { Disclosure, Transition } from '@headlessui/react'



const ExpBox = ({ elements }) => {

    const incrementDet = config.DUTY.map((item) => {

        return (
            <>
                 <span>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button class="flex justify-between my-5 px-4 py-2 text-sm font-medium text-left text-regal-blue bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-regal-blue focus-visible:ring-opacity-75">Duty{" "}{item.count}
                                        <ChevronRightIcon
                                            class={`${open ? 'transform rotate-90' : ''
                                                } w-5 h-5 text-regal-blue`}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-gray-500 w-full">
                                            <span>
                                                <div class="grid">
                                                    <label for={item.id}></label>
                                                    <textarea id={item.id} name={"duty_" + item.count} placeholder=" Duty" type="text" class="text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" rows="2" cols="50" />
                                                </div>
                                            </span>
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    </span>
            </>
        )
    });

    const divElement = elements.map((item) => {
        return (
            <>
                <div class="flex flex-row-reverse">
                </div>
                <div class="md:grid grid-cols-2 gap-5">
                    <div class="flex flex-col">
                        <label for={item.id}>Job{' '}{item.count}</label>
                        <input id={item.id} name={"job_" + item.count} class="text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div class="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                        <div class="flex flex-col">
                            <label for="school_3_start">Year Started</label>
                            <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={"exp_" + item.count} placeholder="" />
                        </div>
                        <div class="flex flex-col">
                            <label for="school_3_end">Year Ended</label>
                            <input class="inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name={"exp_" + item.count} placeholder="" />
                        </div>
                    </div>
                </div>
                <div class="mb-6">
                   {incrementDet}
                </div>
            </>
        );
    });


    return (
        <>
            <div class="flex flex-col">
                <span>
                    {divElement}
                </span>
            </div>
        </>
    )
}

export default ExpBox;