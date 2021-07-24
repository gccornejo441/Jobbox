import { menu } from "../lib/menuset";
import Image from "next/image";

const SideNav = () => {
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
                                <li key={item.id} className="border border-transparent list-none hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg my-2">
                                    <div className="flex justify-between">
                                        <span className="flex">
                                            <div className="p-2">
                                                {item.icon}
                                            </div>
                                            <a href={item.href} className="p-2 w-max ">
                                                {item.label}
                                            </a>
                                        </span>
                                        <span>
                                            {item.sublabel}
                                        </span>
                                        <span>
                                            {item.subIcon}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;