import { PlusIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { nanoid } from "nanoid";

module.exports = {
    plus: <PlusIcon className="h-8 w-8 text-gray-300" />,
    check: <CheckCircleIcon className="h-8 w-8 text-gray-300" />,
    BUILD: [
        {   
            "id": "textarea_" + nanoid(4),
            "title": "Employer",
            "current": "Current Position",
            "count": 1
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
            title: "Management",
            subtitle: "Peers with this skill typically have 29% highter chance of getting a new job",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,
        },
        {
            id: 2,
            title: "Knowledge Graphs",
            subtitle: "",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,
        },
        {
            id: 3,
            title: "Information Technology Planning",
            subtitle: "",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,
        },
        {
            id: 4,
            title: "Business Negotiation",
            subtitle: "",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,
        },
        {
            id: 5,
            title: "Military",
            subtitle: "",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,

        },
        {
            id: 6,
            title: "Bookkeeping",
            subtitle: "",
            icon_state: <PlusIcon className="h-8 w-8 text-gray-300" />,

        },
    ],

}