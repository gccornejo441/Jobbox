import { menu } from "../lib/menuset";
import Image from "next/image";
import {
    QuestionMarkCircleIcon,
    VariableIcon,
} from "@heroicons/react/outline";


const SideNav = () => {
    let menuItems = menu.map(item => (
        <li key={item.id} className="border border-transparent hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
            <div className="flex justify-between">
                <span className="flex">
                    <div className="p-2">
                        {item.icon}
                    </div>
                    <a href={item.href} className="p-2 w-max ">
                        {item.label}
                    </a>
                </span>
                <span>
                    {item.sublabel}
                </span>
                <span>
                    {item.subIcon}
                </span>
            </div>
        </li>
    ))
    return (
        <>
            <div className="pl-3">
                <div>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <div className="flex bg-gray-50 w-max rounded-md pr-1">
                                        <a href="/dashboard">
                                            <span>
                                                <Image src="/images/jobbox.svg" alt="Jobster Logo" height={60} width={170} />
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {menuItems}
                            <li className="py-4">
                                <hr className="w-full bg-gray-50" />
                            </li>
                            <li className="border border-transparent hover:border-gray-50  bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
                                <div className="flex">
                                    <span className="p-2">
                                        <QuestionMarkCircleIcon className="h-5 w-5" />
                                    </span>
                                    <span className="p-2">
                                        Documentation
                                    </span>
                                </div>
                            </li>
                            <li className="border border-transparent hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
                                <div className="flex">
                                    <span className="p-2">
                                        <VariableIcon className="h-5 w-5" />
                                    </span>
                                    <span className="p-2">
                                        Conditions
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-gray-5 hover:bg-green-300 hover:text-gray-600 rounded-lg my-4 text-center py-2 text-sm text-gray-50">
                Upgrade to Jobboxer
            </div>
        </>
    )
}

export default SideNav;