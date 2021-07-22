import {
    UserGroupIcon,
    BriefcaseIcon,
    DocumentTextIcon,
} from "@heroicons/react/outline";
import Head from "next/head";

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobbox</title>
            </Head>
            <div className="flex flex-col my-16 relative h-huge">
                <div className="bg-hero-pattern h-screen bg-cover bg-center flex justify-center">
                    <div className="bg-gray-50 bg-opacity-30 w-full flex justify-center">
                        <div className="container z-10 flex flex-row-reverse pr-3 sm:pr-0">
                            <div className="flex flex-col mt-36 md:my-12 sm:mr-12  md:mr-24 xl:mr-24 pr-4 sm:pr-8 text-right">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl text-regal-blue font-bold my-2">Jobbox</h1>
                                <p className="text-regal-blue text-md md:text-2xl my-2">Display your skills and talents</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="h-full">
                <ul className="lg:grid lg:grid-cols-3 gap-10 md:place-items-center">
                    <li className="text-center p-8 lg:p-12 xl:p-24 bg-regal-blue m-5 xl:h-3/4 rounded-lg ">
                        <DocumentTextIcon className="w-16 h-16 text-green-300 mx-auto" />
                        <h2 className="text-2xl text-green-300">Create a  resume</h2>
                        <p className="text-md text-green-300">Create and print a professional resume in minutes.
                        </p>
                    </li>
                    <li className="text-center  p-8 lg:p-12 xl:p-24 bg-regal-blue m-5 xl:h-3/4 rounded-lg ">
                        <UserGroupIcon className="w-16 h-16 text-green-300 mx-auto" />
                        <h2 className="text-2xl text-green-300">Showcase your talents</h2>
                        <p className="text-md text-green-300">Display your virtual resume for employeers to see.
                        </p>
                    </li>
                    <li className="text-center p-8 lg:p-12 xl:p-24 bg-regal-blue m-5 xl:h-3/4 rounded-lg ">
                        <BriefcaseIcon className="w-16 h-16 text-green-300 mx-auto" />
                        <h2 className="text-2xl text-green-300">How's the job market?</h2>
                        <p className="text-md text-green-300">Get news on the latest job market tends.
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainBody;