


const UserSettings = (props) => {

    return (
        <>
            <div className="flex flex-col w-screen md:w-auto px-5">
                <div className="pt-3 xl:px-4 flex justify-center">
                    <div className="md:bg-white md:rounded-lg md:shadow-md w-full px-5 md:w-max xl:px-12 mb-12 py-12 md:mt-56">
                        <div>
                            <ul>
                                <li>
                                    <div className="text-center">
                                        <h1 className="text-2xl py-6">Hello, {props.user.nickname.charAt(0).toUpperCase() + props.user.nickname.slice(1)}</h1>
                                    </div>
                                </li>
                                <li className="text-center py-4">
                                    <span>
                                        Do you want to delete your account?
                                    </span>
                                </li>
                                <li className="grid grid-cols-2 gap-8 py-5">
                                    <form action="/api/deleteUser" method="POST">
                                        <div className="flex flex-col invisible hidden">
                                            <label className="py-2" htmlFor="user"></label>
                                            <input type="text" name="username" defaultValue={props.user.name} />
                                        </div>
                                        <button className="flex justify-center text-sm py-3 w-full flex tracking-widest font-medium text-white rounded-md bg-red-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Yes</button>
                                    </form>
                                    <form action="/api/handler" method="GET">
                                        <button className="flex justify-center text-sm py-3 w-full flex tracking-widest font-medium text-white rounded-md bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Cancel</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default UserSettings;