import {
    UserIcon,
    CogIcon,
    DocumentAddIcon,
    LogoutIcon,
} from '@heroicons/react/outline'

export const menu = [
    {
        id: 1,
        icon: <DocumentAddIcon className="h-5 w-5" />,
        href: "/resume-builder",
        label: "Resume Builder",
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
    {
        id: 4,
        icon: <LogoutIcon className="h-5 w-5" />,
        href: "/api/auth/logout",
        label: "Logout",
    },
]