import { PlusIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const skillBox = [
    {
        id: "1",
        title: "Marine Corps",
        subtitle: "Hard charging devil dogs!"
    }
]

const Skills = (props) => {
    let [check, setCheck] = useState(false)

    const toggleCheck = (e) => {
        e.preventDefault();
        check ? setCheck(false) :  setCheck(true)
    }


    return (
        <>
            <form>
                <ul>
                    {props.elements.map((item) => {
                        return (
                            <li key={item.id} class="ge-skills-checkbox-list__item">
                                <label onClick={(e) => toggleCheck(e)} class="ge-skills-checkbox-list__checkbox-label" role="checkbox" aria-checked="false">
                                    <div class="grid grid-cols-2 border-2 border-red-400">
                                        <span class="ge-skills-checkbox-list__checkbox-label-content">
                                        <input class="invisible" name="Marine Corps" type="checkbox" data-ember-action="" data-ember-action-1012="1012" />
                                            <div aria-label="Add skill Marine Corps" class="ge-skills-checkbox-list__skill-name t-16 t-black t-normal full-width inline-block">
                                                {item.title}
                                            </div>
                                            <div class="ge-skills-checkbox-list__skill-insight t-12 t-black--light t-normal">
                                                {item.subtitle}
                                            </div>
                                        </span>
                                        <div class="flex justify-end ge-skills-checkbox-list__checkbox-icon ge-skills-checkbox-list__checkbox-unchecked artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--secondary">
                                            {check ? <CheckCircleIcon class="h-6 w-6 text-green-500" /> : <PlusIcon class="h-6 w-6 text-green-500" />}
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