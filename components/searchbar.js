import { SearchIcon, TranslateIcon, ChevronDownIcon, } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import MainBody from './mainbody'

const SearchBar = () => {
    return (
        <>
            <div class="border-5 border-violet-500 flex flex-col">
                <div class="flex ">
                    {/* <span class="w-full pt-3 px-4">
                        <SearchIcon class="h-5 w-5" />
                    </span> */}
                    {/* <div class="pt-3 px-4">
                        <span>
                            <a type="button" class="border border-gray-900">
                                <SearchIcon class="h-5 w-5" />
                            </a>
                        </span>
                        <span>
                            <input class="border border-gray-900" type="search" />
                        </span>
                    </div> */}
                    <form action="">
                        <div>
                            <span class="flex pt-3 px-4">
                            <div class="p-2 rounded-l-lg border-l border-b border-t border-gray-200 shadow-2xl cursor-pointer bg-gray-50 text-gray-500">
                                 <SearchIcon class="h-5 w-5" />
                            </div>
                            <input class="border-r border-t border-b border-gray-200 shadow-2xl rounded-r-lg" type="search" />
                            </span>
                        </div>
                    </form>
                    <div class="flex">
                        <span><TranslateIcon class="h-5 w-5" /></span>
                        <span>English</span>
                        <span><ChevronDownIcon class="h-5 w-5" /></span>
                        <div class="flex">
                            <div>bar</div>
                            <div><span><BellIcon class="h-5 w-5" /></span></div>
                            <div><span><ChatIcon class="h-5 w-5" /></span></div>
                            <div><span><PresentationChartLineIcon class="h-5 w-5" /></span></div>
                        </div>
                    </div>
                </div>
                {/* <MainBody/> */}
            </div>
        </>
    )
}

export default SearchBar;