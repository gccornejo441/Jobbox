import {
    ChartPieIcon,
    CreditCardIcon,
    CogIcon,
    CalendarIcon,
    MapIcon,
    TableIcon,
    DocumentIcon,
    CollectionIcon,
    QuestionMarkCircleIcon,
    VariableIcon,
    ChevronRightIcon,
} from '@heroicons/react/solid'

const menu = [
    {
        id: 1,
        icon: <ChartPieIcon class="h-5 w-5" />,
        label: "Dashboard",
    },
    {
        id: 2,
        icon: <CreditCardIcon class="h-5 w-5" />,
        label: "Statistics",
        sublabel:  <div class="my-3 mx-2 px-2 bg-yellow-400 rounded-xl"><div class="text-xs">Pro</div></div>,
    },
    {
        id: 3,
        icon: <CogIcon class="h-5 w-5" />,
        label: "Transactions",
    },
    {
        id: 4,
        icon: <CalendarIcon class="h-5 w-5" />,
        label: "Settings",
    },
    {
        id: 5,
        icon: <ChartPieIcon class="h-5 w-5" />,
        label: "Calender",
        sublabel:  <div class="my-3 mx-2 px-2 bg-yellow-400 rounded-xl "><div class="text-xs">Pro</div></div>,
    },
    {
        id: 6,
        icon: <MapIcon class="h-5 w-5" />,
        label: "Map",
        sublabel:  <div class="my-3 mx-2 px-2 bg-yellow-400 rounded-xl"><div class="text-xs">Pro</div></div>,
    },
    {
        id: 7,
        icon: <TableIcon class="h-5 w-5" />,
        label: "Tables",
        subIcon: <div class="p-2"><ChevronRightIcon class="h-5 w-5" /></div>,
    },
    {
        id: 8,
        icon: <CollectionIcon class="h-5 w-5" />,
        label: "Page examples",
        subIcon: <div class="p-2"><ChevronRightIcon class="h-5 w-5" /></div>,
    },
    {
        id: 9,
        icon: <DocumentIcon class="h-5 w-5" />,
        label: "Componenets",
        subIcon: <div class="p-2"><ChevronRightIcon class="h-5 w-5" /></div>,
    }
]

const SideNav = () => {

    let menuItems = menu.map(item => (
        <li class="border-2 border-gray-900">
            <div class="flex justify-between" key={item.id}>
                <span class="flex">
                    <div class="p-2">
                        {item.icon}
                    </div>
                    <div class="p-2 w-max">
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
            <div class="border-2 border-gray-900 ">
                <div>
                    <div>
                        <div>
                            <div class="border-2 border-gray-900 py-4">
                                <span><h1>Racket</h1></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li class="border-2 border-gray-900 py-4">
                                <span>
                                    <h2>Menu</h2>
                                </span>
                            </li>
                            {menuItems}
                            <li class="py-4">
                                <hr class="w-full bg-gray-900"/>
                            </li>
                            <li class="border-2 border-gray-900 ">
                                <div class="flex">
                                    <span class="p-2">
                                    <QuestionMarkCircleIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2">
                                        Documentation
                                    </span>
                                </div>
                            </li>
                            <li class="border-2 border-gray-900 ">
                                <div class="flex">
                                    <span class="p-2">
                                    <VariableIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2">
                                        Themesberg
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideNav;