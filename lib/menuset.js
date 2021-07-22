import {
    ChartPieIcon,
    BriefcaseIcon,
    CogIcon,
    CalendarIcon,
    DocumentAddIcon,
    TableIcon,
    DocumentIcon,
    CollectionIcon,
    ChevronDownIcon,
} from '@heroicons/react/outline'

export const menu = [
    {
        id: 1,
        icon: <ChartPieIcon className="h-5 w-5" />,
        href: "/dashboard",
        label: "Dashboard",
    },
    {
        id: 2,
        icon: <DocumentAddIcon className="h-5 w-5" />,
        href: "/user/resume-builder",
        label: "Resume Builder",
        // sublabel: <div className="my-3 mx-2 px-2 bg-yellow-400 rounded-xl"><div className="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 3,
        icon: <CogIcon className="h-5 w-5" />,
        label: "Settings",
    },
    {
        id: 4,
        icon: <CalendarIcon className="h-5 w-5" />,
        label: "Calender",
    },
    {
        id: 5,
        icon: <ChartPieIcon className="h-5 w-5" />,
        label: "Statistics",
        // sublabel: <div className="my-3 mx-2 px-2 bg-yellow-400 rounded-xl "><div className="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 6,
        icon: <BriefcaseIcon className="h-5 w-5" />,
        label: "Job Search",
        // sublabel: <div className="my-3 mx-2 px-2 bg-yellow-400 rounded-xl"><div className="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 7,
        icon: <TableIcon className="h-5 w-5" />,
        label: "Tables",
        subIcon: <div className="p-2"><ChevronDownIcon className="h-5 w-5" /></div>,
    },
    {
        id: 8,
        icon: <CollectionIcon className="h-5 w-5" />,
        label: "Page examples",
        subIcon: <div className="p-2"><ChevronDownIcon className="h-5 w-5" /></div>,
    },
    {
        id: 9,
        icon: <DocumentIcon className="h-5 w-5" />,
        label: "Componenets",
        subIcon: <div className="p-2"><ChevronDownIcon className="h-5 w-5" /></div>,
    }
]