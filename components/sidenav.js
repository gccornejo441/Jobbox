import { menu } from "../lib/menuset";
import Image from "next/image";

const SideNav = (props) => {
    const userInDB = props.resume.find((data) => data.username === props.user.nickname);

    return (
        <>
            <div className="pl-3">
                <div>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <div className="flex bg-gray-50 w-max rounded-md pr-1">
                                        <a href="/resume-builder">
                                            <span>
                                                <Image src="/images/jobbox.svg" alt="Jobster Logo" height={60} width={170} />
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {menu.map(item => {
                            return (
                                <a key={item.id} href={item.href}>
                                {userInDB == undefined && item.id == 2 ? (
                                    <div></div>
                                ) : (
                                    <li className="border border-transparent py-3 my-2 list-none hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg">
                                        <div className="flex justify-between">
                                            <span className="flex">
                                                <div className="mx-2">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    {item.label}
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;