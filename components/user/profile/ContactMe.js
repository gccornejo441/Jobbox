import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { SearchIcon, BellIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios';

const ContactMe = (props) => {

        const userResume = props.resume.map((data) => {
            if (data.username === props.user.nickname) {
                return (
                    <ul>
                        <li class="text-regal-blue pb-2">
                            <MailIcon class="h-4 w-4" />
                            <a class="hover:underline" href={"mailto:" + data.email}>{data.email}</a>
                        </li>
                        <li class="text-regal-blue pb-2">
                            <PhoneIcon class="h-4 w-4" />{data.phone}
                        </li>
                        <li class="text-regal-blue pb-2">
                            <LocationMarkerIcon class="h-4 w-4" />{data.city}{", "}{data.state}
                        </li>
                        <li class="text-regal-blue pb-2">
                            <AiFillLinkedin />
                            <a class="hover:underline" href={"https://www." + data.linkedin}>{data.linkedin}</a>
                        </li>
                        <li class="text-regal-blue pb-2">
                            <AiFillGithub />
                            <a class="hover:underline" href={"https://www." + data.github}>{data.github}</a>
                        </li>
                        <li class="text-regal-blue pb-2">
                            <AiOutlineTwitter />
                            <a class="hover:underline" href={"https://www." + data.twitter}>{data.twitter}</a>
                        </li>
                    </ul>
                )
            } 
        });

    return (
        <>
            {userResume}
        </>
    )
}


export default ContactMe;