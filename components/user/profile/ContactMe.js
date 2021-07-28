import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const ContactMe = (props) => {
    const userResume = props.resume.map((data, index) => {
        if (data.username === props.user.nickname) {
            return (
                <ul key={index}>
                    <li className="text-regal-blue pb-2">
                        <MailIcon className="h-4 w-4" />
                        <a className="hover:underline" href={"mailto:" + data.email}>{data.email}</a>
                    </li>
                    <li className="text-regal-blue pb-2">
                        <PhoneIcon className="h-4 w-4" />{data.phone}
                    </li>
                    <li className="text-regal-blue pb-2">
                        <LocationMarkerIcon className="h-4 w-4" />{data.city}{", "}{data.state}
                    </li>
                    <li className="text-regal-blue pb-2">
                        <AiFillLinkedin />
                        <a className="hover:underline" href={"https://www." + data.linkedin}>{data.linkedin}</a>
                    </li>
                    <li className="text-regal-blue pb-2">
                        <AiFillGithub />
                        <a className="hover:underline" href={"https://www." + data.github}>{data.github}</a>
                    </li>
                    <li className="text-regal-blue pb-2">
                        <AiOutlineTwitter />
                        <a className="hover:underline" href={"https://www." + data.twitter}>{data.twitter}</a>
                    </li>
                </ul>
            );
        } else {
            return (
                <div className="h-56"></div>
            )
        }
    });

    const userInDB = props.resume.find((data) => data.username === props.user.nickname )
    return (
        <>
            {userInDB != undefined ? userResume : (
                <ul>
                <li className="text-regal-blue pb-2">
                    <MailIcon className="h-4 w-4" />
                    <a className="hover:underline">
                        info@jobbox.com
                    </a>
                </li>
                <li className="text-regal-blue pb-2">
                    <PhoneIcon className="h-4 w-4" />555-555-1234
                </li>
                <li className="text-regal-blue pb-2">
                    <LocationMarkerIcon className="h-4 w-4" />
                    New York City, New York 
                </li>
                <li className="text-regal-blue pb-2">
                    <AiFillLinkedin />
                    <a className="hover:underline" >
                    linkedin.com/richardw
                    </a>
                </li>
                <li className="text-regal-blue pb-2">
                    <AiOutlineTwitter />
                    <a className="hover:underline">
                        twitter.com/richardw
                    </a>
                </li>
            </ul>
            )}
        </>
    );
}


export default ContactMe;