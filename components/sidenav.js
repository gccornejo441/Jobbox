import { menu } from '../lib/menuset';
import { CloudIcon } from '@heroicons/react/solid'
import {
    QuestionMarkCircleIcon,
    VariableIcon,
} from '@heroicons/react/outline'

const SideNav = () => {

    let menuItems = menu.map(item => (
        <li class="border border-transparent hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
            <div class="flex justify-between" key={item.id}>
                <span class="flex">
                    <div class="p-2">
                        {item.icon}
                    </div>
                    <div class="p-2 w-max ">
                        {item.label}
                    </div>
                </span>
                {item.sublabel}
                {item.subIcon}
            </div>
        </li>
    ))
    return (
        <>
            <div class="pl-3">
                <div>
                    <div>
                        <div>
                            <ul>
                                <li class=" ">
                                    <div class="flex">
                                        <span class="p-2 text-green-300">
                                            <CloudIcon class="h-6 w-6" />
                                        </span>
                                        <span class="text-gray-50 text-xl p-2">
                                            Racket Space
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {menuItems}
                            <li class="py-4">
                                <hr class="w-full bg-gray-50" />
                            </li>
                            <li class="border border-transparent hover:border-gray-50  bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
                                <div class="flex">
                                    <span class="p-2">
                                        <QuestionMarkCircleIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2">
                                        Documentation
                                    </span>
                                </div>
                            </li>
                            <li class="border border-transparent hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
                                <div class="flex">
                                    <span class="p-2">
                                        <VariableIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2">
                                        Conditions
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border border-gray-5 hover:bg-green-300 hover:text-gray-600 rounded-lg my-4 text-center py-2 text-sm text-gray-50">
                Upgrade to Pro
            </div>
        </>
    )
}

export default SideNav;