import {
    UserIcon,
    CogIcon,
    DocumentAddIcon,
    LogoutIcon,
    PencilAltIcon,
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
   // This is a work in progress, updates will be made later this week. 8/21 2021
   // {
   //     id: 3,
   //     icon: <PencilAltIcon className="h-5 w-5" />,
   //     href: "/feedback",
   //     label: "Feedback",
  //  },
    {
        id: 4,
        icon: <LogoutIcon className="h-5 w-5" />,
        href: "/api/auth/logout",
        label: "Logout",
    },
    {
        id: 5,
        icon: <CogIcon className="h-5 w-5" />,
        href: "/user/settings",
        label: "Settings",
    },
]
