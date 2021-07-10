import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { useEffect } from 'react';
import { SearchIcon, BellIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useUser } from '@auth0/nextjs-auth0'

import axios from 'axios';


const ContactMe = () => {
    // importing user form auth0
    const { user } = useUser();


    axios.post('/api/resume', {
        user: user.nickname,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <ul>
            <li class="text-regal-blue pb-2">
                <MailIcon class="h-4 w-4" /> gcornejo441@gmail.com
            </li>
            <li class="text-regal-blue pb-2">
                <PhoneIcon class="h-4 w-4" /> 951-444-5555
            </li>
            <li class="text-regal-blue pb-2">
                <LocationMarkerIcon class="h-4 w-4" />Corona, California
            </li>
            <li class="text-regal-blue pb-2">
                <AiFillLinkedin />
                linkedin.com/in/gccornejo
            </li>
            <li class="text-regal-blue pb-2">
                <AiFillGithub />
                github.com/gccornejo441
            </li>
            <li class="text-regal-blue pb-2">
                <AiOutlineTwitter />
                Omniwizrad
            </li>
        </ul>
    )
}

export default ContactMe;