import { menu } from '../lib/menuset';
import { CloudIcon } from '@heroicons/react/solid'
import {
    QuestionMarkCircleIcon,
    VariableIcon,
} from '@heroicons/react/outline'

const SideNav = () => {

    let menuItems = menu.map(item => (
        <li class="border border-transparent hover:border-gray-50 rounded-lg my-2">
            <div class="flex justify-between" key={item.id}>
                <span class="flex">
                    <div class="p-2 text-gray-50">
                        {item.icon}
                    </div>
                    <div class="p-2 w-max text-gray-50 ">
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
                            <li class="border border-transparent hover:border-gray-50 rounded-lg my-2">
                                <div class="flex">
                                    <span class="p-2 text-gray-50">
                                        <QuestionMarkCircleIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2 text-gray-50">
                                        Documentation
                                    </span>
                                </div>
                            </li>
                            <li class="border border-transparent hover:border-gray-50 rounded-lg my-2">
                                <div class="flex">
                                    <span class="p-2 text-gray-50">
                                        <VariableIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2 text-gray-50">
                                        Conditions
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border border-gray-50 rounded-lg my-4 text-center py-2 text-sm text-gray-50">
                Upgrade to Pro
            </div>
        </>
    )
}

export default SideNav;