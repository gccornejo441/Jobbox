import { ChevronDownIcon, ShoppingBagIcon, CalendarIcon, EyeIcon} from '@heroicons/react/solid'

const MainBody = () => {
    return (
        <>
            <div>
                <div class="border-2 border-red-500 flex justify-between">
                    <div class="flex flex-col">
                        <span class="inline-block align-middle"><h1 class="text-2xl">Overview</h1></span>
                        <span class="inline-block align-middle">Job Search Informaion</span>
                    </div>
                    <div class="border-2 border-blue-500 flex">
                        <span class="inline-block align-middle">This week</span>
                        <span class="inline-block align-middle"><ChevronDownIcon class="h-5 w-5" /></span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="border border-teal-500 flex">
                        <div>
                            <div>56</div>
                            <div>Application Sent</div>
                        </div>
                        <div>
                        <ShoppingBagIcon class="h-5 w-5" />
                        </div>
                    </div>
                    <div class="border border-red-500 flex">
                    <div>
                            <div>18</div>
                            <div>Interviews Schedule</div>
                        </div>
                        <div>
                        <CalendarIcon class="h-5 w-5" />
                        </div>
                    </div>
                    <div class="border border-yellow-500 flex">
                    <div>
                            <div>156</div>
                            <div>Profile Visited</div>
                        </div>
                        <div>
                        <EyeIcon class="h-5 w-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MainBody;