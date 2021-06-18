import { SearchIcon, TranslateIcon, ChevronDownIcon, } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import MainBody from './mainbody'

const SearchBar = () => {
    return (
        <>
            <div class="border-2 border-gray-900 flex flex-col">
                <div class="flex border-2 border-blue-900">
                    <span class="w-full"><SearchIcon class="h-5 w-5" /></span>
                    <span><button type="button" class="border border-gray-900">Search</button></span>
                    <span><input class="border border-gray-900" type="search" /></span>
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
                <MainBody/>
            </div>
        </>
    )
}

export default SearchBar;