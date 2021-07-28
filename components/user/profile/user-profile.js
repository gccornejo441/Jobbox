import { DocumentDownloadIcon } from "@heroicons/react/solid";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Intern from "./Intern";
import Education from "./Education";
import Banner from "./Banner";

const UserProfile = (props) => {
    
    return (
        <>
            <div className="flex flex-col w-screen md:w-auto">
                <div className="pt-3 pl-4">
                    <form action="/api/pdfBuilder" method="POST">
                        <div className="flex flex-col invisible hidden">
                            <label htmlFor="user"></label>
                            <input type="text" name="username" defaultValue={props.user.nickname} />
                        </div>
                        <button type="submit" className="px-2 text-sm py-3 flex tracking-widest font-medium text-white rounded-md bg-regal-blue hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <DocumentDownloadIcon className="h-5 w-5" /> Download
                        </button>
                    </form>
                </div>
                <div className="pt-16 xl:px-4 flex justify-center">
                    <div className="md:bg-white md:rounded-lg md:shadow-md w-full md:w-max">
                        <div className="flex justify-center bg-regal-blue xl:px-12 md:rounded-t-lg">
                            <Banner user={props.user} resume={props.resume} />
                        </div>
                        {/* CHANGE THIS FOR MOBILE */}
                        <div className="md:flex">
                            <div className="py-4 px-6">
                                <div className="pt-3">
                                    <ContactMe user={props.user} resume={props.resume} />
                                </div>
                                <div>
                                    <Skills user={props.user} resume={props.resume} />
                                </div>
                            </div>
                            <div className="w-full">
                                <WorkExp user={props.user} resume={props.resume} />
                                <Intern user={props.user} resume={props.resume} />
                                <Education user={props.user} resume={props.resume} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
                <div className="h-28 w-max bg-transparent"></div>
                {/* THIS DIV IS TEMPORARY UNTIL FURTHER CONTENT IS ADD. */}
            </div>
        </>
    )
}



export default UserProfile;