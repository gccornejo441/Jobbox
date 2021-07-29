import { menu } from "../lib/menuset";
import { useUser } from "@auth0/nextjs-auth0"


const MobileNavView = () => {
    // importing user form auth0
    const { user } = useUser();
    const userInDB = props.resume.find((data) => data.username === props.user.nickname);
    console.log("Props", props)


    return (
        <>
            <div className="bg-regal-blue h-screen w-screen pb-28">
                <div className="mx-4">
                    <div className="text-blue-200 mr-2 border-b border-gray-50">
                        <div className="flex relative z-10">
                            {/* <span className="mr-3 mt-6 flex">
                                <img src="/images/no-picture.jpg" className="h-16 w-16 rounded-full mr-2" />
                            </span> */}
                            <div className="mt-1 mb-4 relative">
                                <p className="text-xl font-thin text-gray-50 mt-3 text-wrap">Welcome, {user.nickname}</p>
                            </div>
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

export default MobileNavView;