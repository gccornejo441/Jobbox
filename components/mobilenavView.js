import { menu } from "../lib/menuset";
import { useUser } from "@auth0/nextjs-auth0"
import Link from "next/link";

const MobileNavView = (props) => {
    // importing user form auth0
    const { user } = useUser();

    const userInDB = props.parentProps.resume.find((data) => data.username === props.parentProps.user.nickname);

    return (
        <>
            <div className="bg-regal-blue pb-28 flex">
                <div className="flex flex-col">
                    <div className="mx-4">
                        <div className="text-blue-200 mr-2 border-b border-gray-50">
                            <div className="flex relative z-10">
                                <div className="mt-1 mb-4 relative">
                                    <p className="text-xl font-thin text-gray-50 mt-3 text-wrap">Welcome, {user.nickname}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {menu.map(item => {
                                return (
                                  <Link key={item.id} href={item.href}>
                                    <a>
                                      {userInDB == undefined && item.id == 2 ? (
                                        <div></div>
                                      ) : (
                                        <li className="border border-transparent py-3 my-2 list-none hover:border-gray-50 bg-regal-blue text-gray-50 hover:bg-green-300 hover:text-regal-blue rounded-lg">
                                          <div className="flex justify-between">
                                            <span className="flex">
                                              <div className="mx-2">
                                                {item.icon}
                                              </div>
                                              <div>{item.label}</div>
                                            </span>
                                          </div>
                                        </li>
                                      )}
                                    </a>
                                  </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavView;