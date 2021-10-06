import Head from "next/head";
import Image from 'next/image'
import resumePic from '../../public/images/resume-title.svg'

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobbox</title>
            </Head>
            <div className="flex flex-col relative">
                <div className="bg-hero-pattern bg-cover bg-center flex justify-center">
                    <div className="bg-gray-50 bg-opacity-60 w-full flex justify-center">
                        <div className="z-10 flex flex-col md:flex-row p-5 sm:pr-0 w-full">
                            <div className="text-regal-blue md:w-1/2">
                                <div className="lg:px-16 xl:w-3/4 mx-auto sm:mb-8 mt-12 md:mb-0 md:mt-36">
                                    <h1 className="text-left font-extrabold text-2xl sm:text-4xl lg:text-5xl font-sans leading-normal">Create an expert resume for free</h1>
                                    <h2 className="my-2 text-left font-bold text-md sm:text-lg lg:text-xl">Use our free resume templates to create free professional resumes.</h2>
                                    <div className="flex justify-center sm:justify-start">
                                        <button
                                            className="my-3 bg-regal-blue text-white font-semibold px-8 py-3 rounded-lg w-full sm:w-auto"
                                        >Create A Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:h-full md:w-1/2">
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
                <footer>
                    <div className="pt-5 text-white relative bottom-0 bg-regal-blue text-center pb-8">
                        &copy; 2021 Jobbox.me
                    </div>
                </footer>
            </div>
        </>
    );
}

export default MainBody;