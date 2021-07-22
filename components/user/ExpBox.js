import { ChevronRightIcon } from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";


const ExpBox = () => {
    const dutyBoxOne = (
        <>
            <div className="grid mb-4">
                <label className="py-2" htmlFor="job_1_duty"></label>
                <textarea id="job_1_duty" name="job_1_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" rows="2" cols="50" />
            </div>
        </>
    );
    const dutyBoxTwo = (
        <>
            <div className="grid mb-4">
                <label className="py-2" htmlFor="job_2_duty"></label>
                <textarea id="job_2_duty" name="job_2_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" rows="2" cols="50" />
            </div>
        </>
    );
    const dutyBoxThree = (
        <>
            <div className="grid mb-4">
                <label className="py-2" htmlFor="job_3_duty"></label>
                <textarea id="job_3_duty" name="job_3_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" rows="2" cols="50" />
            </div>
        </>
    );

    return (
        <>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_1">Company Name</label>
                        <input id="job_name_1" name="job_name_1" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_1">Position title</label>
                        <input id="job_title_1" name="job_title_1" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_1">Year Started</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_1" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_1">Year Ended</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_1" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between my-5 px-4 py-2 text-sm font-medium text-left text-regal-blue bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-regal-blue focus-visible:ring-opacity-75">Duties
                                <ChevronRightIcon
                                    className={`${open ? "transform rotate-90" : ""
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
                                <Disclosure.Panel classNameName="text-gray-500 w-full">
                                    <span>
                                        <ul>
                                            <li>
                                                {dutyBoxOne}
                                            </li>
                                            <li>
                                                {dutyBoxOne}
                                            </li>
                                            <li>
                                                {dutyBoxOne}
                                            </li>
                                            <li>
                                                {dutyBoxOne}
                                            </li>
                                        </ul>
                                    </span>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </span>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_2">Company Name</label>
                        <input id="job_name_2" name="job_name_2" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_2">Position title</label>
                        <input id="job_title_2" name="job_title_2" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_2">Year Started</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_2" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_2">Year Ended</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_2" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between my-5 px-4 py-2 text-sm font-medium text-left text-regal-blue bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-regal-blue focus-visible:ring-opacity-75">Duties
                                <ChevronRightIcon
                                    className={`${open ? "transform rotate-90" : ""
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
                                <Disclosure.Panel classNameName="text-gray-500 w-full">
                                    <span>
                                        <ul>
                                            <li>
                                                {dutyBoxTwo}
                                            </li>
                                            <li>
                                                {dutyBoxTwo}
                                            </li>
                                            <li>
                                                {dutyBoxTwo}
                                            </li>
                                            <li>
                                                {dutyBoxTwo}
                                            </li>
                                        </ul>
                                    </span>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </span>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_3">Company Name</label>
                        <input id="job_name_3" name="job_name_3" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_3">Position title</label>
                        <input id="job_title_3" name="job_title_3" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_3">Year Started</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_3" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_3">Year Ended</label>
                        <input className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_3" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between my-5 px-4 py-2 text-sm font-medium text-left text-regal-blue bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-regal-blue focus-visible:ring-opacity-75">Duties
                                <ChevronRightIcon
                                    className={`${open ? "transform rotate-90" : ""
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
                                <Disclosure.Panel classNameName="text-gray-500 w-full">
                                    <span>
                                        <ul>
                                            <li>
                                                {dutyBoxThree}
                                            </li>
                                            <li>
                                                {dutyBoxThree}
                                            </li>
                                            <li>
                                                {dutyBoxThree}
                                            </li>
                                            <li>
                                                {dutyBoxThree}
                                            </li>
                                        </ul>
                                    </span>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </span>

        </>
    )
}

export default ExpBox;