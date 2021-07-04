import { PlusIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import config from './config'

const Skills = (props) => {
    let [check, setCheck] = useState(props.elements)
    
    const toggleCheck = (e) => {
        e.preventDefault();
        
        let skill = props.elements.find(item => item.title === e.target.name);

        if ( skill.icon_state.type == config.plus.type ) {
            const newObj = {...skill, icon_state: skill.icon_state = <CheckCircleIcon class="h-6 w-6 text-green-500" /> };
            setCheck(newObj);
        } else {
            const newObj = {...skill, icon_state: skill.icon_state = <PlusIcon class="h-6 w-6 text-green-500" /> };
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
                                            <div  class="flex justify-end ge-skills-checkbox-list__checkbox-icon ge-skills-checkbox-list__checkbox-unchecked artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--secondary">
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