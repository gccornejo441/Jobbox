import {
    ChartPieIcon,
    FilmIcon,
    CogIcon,
    CalendarIcon,
    MapIcon,
    TableIcon,
    DocumentIcon,
    CollectionIcon,
    QuestionMarkCircleIcon,
    VariableIcon,
    ChevronDownIcon,
    CloudIcon,
} from '@heroicons/react/outline'

export const menu = [
    {
        id: 1,
        icon: <ChartPieIcon class="h-5 w-5" />,
        label: "Dashboard",
    },
    {
        id: 2,
        icon: <FilmIcon class="h-5 w-5" />,
        label: "Movie Details",
        sublabel: <div class="my-3 mx-2 px-2 bg-green-300 rounded-xl"><div class="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 3,
        icon: <CogIcon class="h-5 w-5" />,
        label: "Settings",
    },
    {
        id: 4,
        icon: <CalendarIcon class="h-5 w-5" />,
        label: "Calender",
    },
    {
        id: 5,
        icon: <ChartPieIcon class="h-5 w-5" />,
        label: "Statistics",
        sublabel: <div class="my-3 mx-2 px-2 bg-green-300 rounded-xl "><div class="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 6,
        icon: <MapIcon class="h-5 w-5" />,
        label: "Map",
        sublabel: <div class="my-3 mx-2 px-2 bg-green-300 rounded-xl"><div class="text-xs text-gray-600">Pro</div></div>,
    },
    {
        id: 7,
        icon: <TableIcon class="h-5 w-5" />,
        label: "Tables",
        subIcon: <div class="p-2 text-gray-50 "><ChevronDownIcon class="h-5 w-5" /></div>,
    },
    {
        id: 8,
        icon: <CollectionIcon class="h-5 w-5" />,
        label: "Page examples",
        subIcon: <div class="p-2 text-gray-50 "><ChevronDownIcon class="h-5 w-5" /></div>,
    },
    {
        id: 9,
        icon: <DocumentIcon class="h-5 w-5" />,
        label: "Componenets",
        subIcon: <div class="p-2 text-gray-50 "><ChevronDownIcon class="h-5 w-5" /></div>,
    }
]