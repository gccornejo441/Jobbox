import { PlusIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import config from "./config";

const Skills = (props) => {
    let [check, setCheck] = useState(props.elements);

    // This toggles between plus and check icon.
    const toggleCheck = (e) => {
        e.preventDefault();

        // This returns the object being worked on.
        let skill = props.elements.find(item => item.title === e.target.name);

        // This superficially checks for the curent icon type.
        if (skill.icon_state.type == config.plus.type) {
            // A new object is create to replace the one being worked on.
            // The new object takes a copy and the property being updated.
            // For more information reference: https://stackoverflow.com/questions/9454863/updating-javascript-object-property/48209957
            const newObj = { ...skill, icon_state: skill.icon_state = <CheckCircleIcon className="h-8 w-8 text-green-500" /> };
            setCheck(newObj);
        } else {
            const newObj = { ...skill, icon_state: skill.icon_state = <PlusIcon className="h-8 w-8 text-gray-300" /> };
            setCheck(newObj);
        }
    }

    return (
        <>
            <ul className="overflow-y-auto h-96">
                {props.elements.map((item) => {
                    return (
                        <li className="w-full" key={item.id}>
                            <label role="checkbox" >
                                <input onClick={toggleCheck} name={item.title} type="checkbox" className="invisible" />
                                <div className="flex justify-between py-2">
                                    <div className="flex flex-col">
                                        <div className="text-regal-blue">
                                            {item.title}
                                        </div>
                                        <div className="text-gray-400 text-xs sm:text-sm w-max-md">
                                            {item.subtitle}
                                        </div>
                                    </div>
                                    <div>
                                        {item.icon_state}
                                    </div>
                                </div>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Skills;