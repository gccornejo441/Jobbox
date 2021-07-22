import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { menu } from "../lib/menuset";
import {
    QuestionMarkCircleIcon,
    VariableIcon,
} from "@heroicons/react/solid"
import { useUser } from "@auth0/nextjs-auth0"


const MobileNavView = () => {
    // importing user form auth0
    const { user } = useUser();

    let menuItems = menu.map(item => (
        <li className="border border-transparent bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
            <div className="flex justify-between" key={item.id}>
                <span className="flex">
                    <div className="p-2">
                        {item.icon}
                    </div>
                    <a href={item.href} className="p-2 w-max ">
                        {item.label}
                    </a>
                </span>
                {item.sublabel}
                {item.subIcon}
            </div>
        </li>
    ))
    return (
        <>
            <div className="bg-regal-blue h-full w-screen pb-28">
                <div className="mx-4">
                    <div className="text-blue-200 mr-2 border-b border-gray-50">
                        <div className="flex relative z-10">
                            <span className="mr-3 mt-6 flex">
                                <img src="/images/no-picture.jpg" className="h-16 w-16 rounded-full mr-2" />
                            </span>
                            <div className="mt-1 mb-4 relative">
                                <p className="text-xl font-thin text-gray-50 mt-3 text-wrap">Welcome, {user.nickname}</p>
                                <div className="flex justify-evenly">
                                <a href="/user/profile" data-testid="logout" className="w-max bg-regal-blue hover:bg-green-300 hover:text-regal-blue text-gray-50 m-1 p-2 rounded-lg text-sm my-2 flex border ">
                                <span><UserIcon className="w-5 h-5 mr-1" /></span>Profile</a>
                                <a href="/api/auth/logout" data-testid="logout" className="w-max bg-regal-blue hover:bg-green-300 hover:text-regal-blue text-gray-50 m-1 p-2 rounded-lg text-sm my-2 flex border">
                                    <span><LogoutIcon className="w-5 h-5 mr-1" /></span>Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {menuItems}
                            <li className="py-4">
                                <hr className="w-full bg-gray-50" />
                            </li>
                            <li className="border border-transparent hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
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
                    <div id="pro-btn" className="border border-gray-50 bg-regal-blue hover:bg-green-300 hover:text-gray-600 text-gray-50 rounded-lg my-4 text-center py-2 text-sm w-1/2 mx-auto">
                        Upgrade to Pro
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavView;