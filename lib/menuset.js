import {
    UserIcon,
    CogIcon,
    DocumentAddIcon,
} from '@heroicons/react/outline'

export const menu = [
    {
        id: 1,
        icon: <DocumentAddIcon className="h-5 w-5" />,
        href: "/resume-builder",
        label: "Resume Builder",
        // sublabel: <div className="my-3 mx-2 px-2 bg-yellow-400 rounded-xl"><div className="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 2,
        icon: <UserIcon className="h-5 w-5" />,
        href: "/user/profile",
        label: "Profile",
    },
    {
        id: 3,
        icon: <CogIcon className="h-5 w-5" />,
        href: "/user/settings",
        label: "Settings",
    },
]