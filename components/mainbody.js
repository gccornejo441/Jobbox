import { ShoppingBagIcon, UserGroupIcon, PresentationChartLineIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'

const MainBody = () => {

    return (
        <>
            <div class="bg-salmon rounded-lg shadow-md">
                <div class="border-b border-gray-300 flex justify-between">
                    <div class="flex flex-col py-3 px-4">
                        <span class="inline-block align-middle"><h1 class="text-base text-blue-900">Job Market</h1></span>
                        <span class="inline-block align-middle text-2xl font-bold text-blue-900">+ 850,000 New jobs</span>
                        <div>
                            <span class="inline-block align-middle font-light text-xs text-blue-900 mr-2">Yesterday</span>
                            <span class="text-xs text-green-500">10.57%</span>
                        </div>
                    </div>
                    <div class="flex mr-5">
                        <div class="mt-9">
                            <button class="bg-yellow-400 text-blue-900 p-1 px-2 rounded-md text-sm mx-1">July</button>
                        </div>
                        <div class="mt-9">
                            <button class="text-blue-900 p-1 px-2 rounded-md text-sm mx-1">Week 2</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-evenly p-20 text-blue-900">
                        No Data
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                <div class="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div class="bg-gray-400 p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <UserGroupIcon class="h-7 w-7 text-gray-800" />
                    </div>
                    <div class="">
                        <ul class="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li class="font-normal text-gray-400 text-sm md:text-md">Customers</li>
                            <li class="font-semibold text-blue-900 text-3xl md:text-4xl">345k</li>
                            <li class="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li class="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span class="pl-1 text-green-500"><ChevronUpIcon class="w-4 h-4"/></span><span class="text-green-500">22%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                    <div class="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div class="bg-salmon p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <ShoppingBagIcon class="h-7 w-7 text-yellow-400" />
                    </div>
                    <div class="">
                        <ul class="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li class="font-normal text-gray-400 text-sm md:text-md">Revenue</li>
                            <li class="font-semibold text-blue-900 text-3xl md:text-4xl">$43,594</li>
                            <li class="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li class="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span class="pl-1 text-red-500"><ChevronDownIcon class="w-4 h-4"/></span><span class="text-red-500">2%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                    <div class="lg:flex justify-evenly bg-white rounded-lg shadow-md">
                    <div class="bg-violet-200 p-4 my-5 ml-5 lg:my-10 rounded-lg w-max">
                        <PresentationChartLineIcon class="h-7 w-7 text-violet-500" />
                    </div>
                    <div class="">
                        <ul class="relative lg:top-5 my-5 lg:my-0 ml-5">
                            <li class="font-normal text-gray-400 text-sm md:text-md">Bounce Rate</li>
                            <li class="font-semibold text-blue-900 text-3xl md:text-4xl">50.88%</li>
                            <li class="font-light text-gray-400 text-xs md:text-sm">Feb 1 - Apr 1</li>
                            <li class="font-light text-blue-900 text-xs md:text-sm flex w-max">Since last month<span class="pl-1 text-green-500"><ChevronUpIcon class="w-4 h-4"/></span><span class="text-green-500">4%</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}


export default MainBody;