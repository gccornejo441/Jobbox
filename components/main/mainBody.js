import Head from "next/head";
import Image from 'next/image'
import resumePic from '../../public/images/resume-title.svg'

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobbox</title>
            </Head>
            <div className="flex flex-col mt-10 relative h-huge">
                <div className="bg-hero-pattern h-screen bg-cover bg-center flex justify-center">
                    <div className="bg-gray-50 bg-opacity-60 w-full flex justify-center">
                        <div className="z-10 flex flex-col md:flex-row p-5 sm:pr-0 w-full">
                            <div className="text-regal-blue md:w-1/2">
                                <div className="lg:px-16 xl:w-3/4 mx-auto mt-12 mb-20 md:mb-0 md:mt-28">
                                    <h1 className="text-left font-extrabold text-4xl lg:text-5xl font-sans leading-normal">Create an expert resume for free</h1>
                                    <h2 className="my-2 text-left font-bold text-lg lg:text-xl">Use our free resume templates to create free professional resumes.</h2>
                                    <button
                                    className="my-3 bg-regal-blue text-white font-semibold px-8 py-3 rounded-lg"
                                    >Create A Resume
                                    </button>
                                </div>
                            </div>
                            <div className="flex lg:h-full md:w-1/2 ">
                                {/* <h1 className="text-6xl md:text-7xl lg:text-8xl text-regal-blue font-bold my-2">Jobbox</h1>
                                <p className="text-regal-blue text-md md:text-2xl my-2">Professional resumes made easy & free</p> */}
                                <Image
                                src={resumePic} 
                                alt="Picture of a sample resume"
                                width={800}
                                height={800}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainBody;