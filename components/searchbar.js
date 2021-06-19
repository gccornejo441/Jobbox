import { SearchIcon, TranslateIcon, ChevronDownIcon, BellIcon, } from '@heroicons/react/solid'
import { ChatIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import MainBody from './mainbody'

const SearchBar = () => {
    return (
        <>
            <div class="border-5 border-violet-500 flex flex-col">
                <div class="flex justify-between">
                    {/* SEARCHBAR */}
                    <div>
                        <form action="POST">
                            <div>
                                <span class="flex pt-3 px-4">
                                    <div class="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer bg-gray-50 text-gray-500">
                                        <SearchIcon class="h-5 w-5" />
                                    </div>
                                    <input class="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg pl-2" type="search" placeholder="Search" />
                                </span>
                            </div>
                        </form>
                        <div class="pt-3 px-4">
                            <button class="bg-blue-900 px-4 py-1 rounded-lg text-blue-50 text-sm"><span class="text-blue-50 text-base">+{' '}</span>New Task</button>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="mr-5 mt-4 relative">
                            <BellIcon class="h-6 w-6" />
                            <div class="absolute top-0 right-0 bg-red-500 border-2 border-red-50 rounded-2xl h-3 w-3"></div>
                        </div>
                        <span class="mr-5 mt-3 flex">
                            <img src="/images/profile_picture.jpg" class="h-7 w-7 rounded-2xl mr-2" />
                            <p class="text-sm font-semibold text-cyan-800 mt-1">Gabriel Cornejo</p>
                        </span>
                    </div>
                </div>
                <div class="pt-3 px-4">
                    <MainBody/>
                </div>
            </div>
        </>
    )
}

export default SearchBar;