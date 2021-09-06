import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const ContactMe = (props) => {

    const userResume = props.resume.map((data, index) => {
        if (data.username == props.user.nickname) {
            return (
                <ul key={index}>
                    {(data.email &&
                        <li className="text-regal-blue pb-2">
                            <MailIcon className="h-4 w-4" />
                            <a className="hover:underline" href={"mailto:" + data.email}>{data.email}</a>
                        </li>
                    ) || false}
                    {(data.phone &&
                        <li className="text-regal-blue pb-2">
                            <PhoneIcon className="h-4 w-4" />{data.phone}
                        </li>
                    ) || false}
                    {((data.state && data.city) &&
                        <li className="text-regal-blue pb-2">
                            <LocationMarkerIcon className="h-4 w-4" />{data.city}{", "}{data.state}
                        </li>
                    ) || false}
                    {(data.linkedin &&
                        <li className="text-regal-blue pb-2">
                            <AiFillLinkedin />
                            <a className="hover:underline" href={"https://www." + data.linkedin}>{data.linkedin}</a>
                        </li>
                    ) || false}
                    {(data.github &&
                        <li className="text-regal-blue pb-2">
                            <AiFillGithub />
                            <a className="hover:underline" href={"https://www." + data.github}>{data.github}</a>
                        </li>
                    ) || false}
                    {(data.twitter &&
                        <li className="text-regal-blue pb-2">
                            <AiOutlineTwitter />
                            <a className="hover:underline" href={"https://www." + data.twitter}>{data.twitter}</a>
                        </li>
                    ) || false}
                </ul>
            );
        }
    });

    return (
        <>
            {userResume}
        </>
    );
}


export default ContactMe;