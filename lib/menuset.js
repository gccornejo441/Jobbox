import {
    UserIcon,
    CogIcon,
    DocumentAddIcon,
    LogoutIcon,
    PencilAltIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline'

export const menu = [
    {
        id: 1,
        icon: <DocumentAddIcon className="h-5 w-5" />,
        href: "/v2/pro-builder",
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
       icon: <PencilAltIcon className="h-5 w-5" />,
       href: "/feedback",
       label: "Feedback",
   },
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
    {
        id: 6,
        icon: <InformationCircleIcon className="h-5 w-5" />,
        href: "/privacy-policy",
        label: "Privacy Policy",
    },
    {
        id: 7,
        icon: <InformationCircleIcon className="h-5 w-5" />,
        href: "/terms-of-service",
        label: "Terms of service",
    },
];
