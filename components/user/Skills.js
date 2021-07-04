import { PlusIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import config from './config'

const Skills = (props) => {
    let [check, setCheck] = useState(props.elements)

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
            const newObj = { ...skill, icon_state: skill.icon_state = <CheckCircleIcon class="h-8 w-8 text-green-500" /> };
            setCheck(newObj);
        } else {
            const newObj = { ...skill, icon_state: skill.icon_state = <PlusIcon class="h-8 w-8 text-gray-300" /> };
            setCheck(newObj);
        }
    }

    return (
        <>
            <form>
                <ul>
                    {props.elements.map((item) => {
                        return (
                            <li class="w-full ">
                                <label>
                                    <input onClick={(e) => toggleCheck(e)} name={item.title} class="invisible" />
                                    <div class="flex justify-between py-2" key={item.id}>
                                        <div class="flex flex-col">
                                            <div class="text-regal-blue">
                                                {item.title}
                                            </div>
                                            <div class="text-gray-400 text-sm w-max">
                                                {item.subtitle}
                                            </div>
                                        </div>
                                        <div class="flex justify-end ge-skills-checkbox-list__checkbox-icon ge-skills-checkbox-list__checkbox-unchecked artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--secondary">
                                            {item.icon_state}
                                        </div>
                                    </div>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </form>
        </>
    )
}

export default Skills;