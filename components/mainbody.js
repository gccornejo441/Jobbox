import { ShoppingBagIcon, UserGroupIcon, PresentationChartLineIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const MainBody = () => {

    return (
        <>
            <div className="bg-salmon rounded-lg shadow-md">
                <div className="border-b border-gray-300 flex justify-between">
                    <div className="flex flex-col py-3 px-4">
                        <span className="inline-block align-middle"><h1 className="text-base text-blue-900">Job Market</h1></span>
                        <span className="inline-block align-middle text-2xl font-bold text-blue-900">+ 850,000 New jobs</span>
                        <div>
                            <span className="inline-block align-middle font-light text-xs text-blue-900 mr-2">Yesterday</span>
                            <span className="text-xs text-green-500">10.57%</span>
                        </div>
                    </div>
                    <div className="flex mr-5">
                        <div className="mt-9">
                            <button className="bg-yellow-400 text-blue-900 p-1 px-2 rounded-md text-sm mx-1">July</button>
                        </div>
                        <div className="mt-9">
                            <button className="text-blue-900 p-1 px-2 rounded-md text-sm mx-1">Week 2</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-evenly p-20 text-blue-900">
                        No Data
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                <div className="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div className="bg-gray-400 p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <UserGroupIcon className="h-7 w-7 text-gray-800" />
                    </div>
                    <div className="">
                        <ul className="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li className="font-normal text-gray-400 text-sm md:text-md">Customers</li>
                            <li className="font-semibold text-blue-900 text-3xl md:text-4xl">345k</li>
                            <li className="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li className="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span className="pl-1 text-green-500"><ChevronUpIcon className="w-4 h-4"/></span><span className="text-green-500">22%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                    <div className="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div className="bg-salmon p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <ShoppingBagIcon className="h-7 w-7 text-yellow-400" />
                    </div>
                    <div className="">
                        <ul className="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li className="font-normal text-gray-400 text-sm md:text-md">Revenue</li>
                            <li className="font-semibold text-blue-900 text-3xl md:text-4xl">$43,594</li>
                            <li className="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li className="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span className="pl-1 text-red-500"><ChevronDownIcon className="w-4 h-4"/></span><span className="text-red-500">2%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                    <div className="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div className="bg-violet-200 p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <PresentationChartLineIcon className="h-7 w-7 text-violet-500" />
                    </div>
                    <div className="">
                        <ul className="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li className="font-normal text-gray-400 text-sm md:text-md">Bounce Rate</li>
                            <li className="font-semibold text-blue-900 text-3xl md:text-4xl">50.88%</li>
                            <li className="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li className="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span className="pl-1 text-green-500"><ChevronUpIcon className="w-4 h-4"/></span><span className="text-green-500">4%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}


export default MainBody;