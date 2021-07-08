import { PlusIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { nanoid } from 'nanoid';

module.exports = {
    plus: <PlusIcon class="h-8 w-8 text-gray-300" />,
    check: <CheckCircleIcon class="h-8 w-8 text-gray-300" />,
    BUILD: [
        {   
            "id": "textarea_" + nanoid(4),
            "title": "Current Position",
        },
    ],
    DUTY: [
        {   
            "id": "textarea_" + nanoid(4),
            "count": 1,
        },
        {   
            "id": "textarea_" + nanoid(4),
            "count": 2,
        },
        {   
            "id": "textarea_" + nanoid(4),
            "count": 3,
        },
        {   
            "id": "textarea_" + nanoid(4),
            "count": 4,
        },
        {   
            "id": "textarea_" + nanoid(4),
            "count": 5,
        },
    ],
    DATA: [
        {
            id: 1,
            title: "Marine Corps",
            subtitle: "Hard charging devil dogs!",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,
        },
        {
            id: 2,
            title: "Management",
            subtitle: "Peers with this skill typically have 29% highter chance of getting a new job",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,
        },
        {
            id: 3,
            title: "Knowledge Graphs",
            subtitle: "",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,
        },
        {
            id: 4,
            title: "Information Technology Planning",
            subtitle: "",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,
        },
        {
            id: 5,
            title: "Business Negotiation",
            subtitle: "",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,
        },
        {
            id: 6,
            title: "Military",
            subtitle: "",
            icon_state: <PlusIcon class="h-8 w-8 text-gray-300" />,

        },
    ],

}