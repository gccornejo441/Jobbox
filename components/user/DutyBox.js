import { ChevronRightIcon } from '@heroicons/react/solid';
import config from './config';
import { Disclosure, Transition } from '@headlessui/react'


const DutyBox = ( count ) => {
    const incrementDuty = config.DUTY.map((item) => {
        
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
                                                <div key={item.count} class="grid">
                                                    <label for={item.id}></label>
                                                    <textarea id={item.id} name={item.count ? "duty_" + item.count : "job_current"} placeholder=" Duty" type="text" class="text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" rows="2" cols="50" />
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



    return (
        <>
            <div class="flex flex-col">
                <span>
                    {incrementDuty}
                </span>
            </div>
        </>
    )
}

export default DutyBox;