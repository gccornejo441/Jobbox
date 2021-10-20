import Head from 'next/head'
import Image from 'next/image'
import resumePic from '../../public/images/resume-title.svg'
import Link from 'next/link'

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
                                        <Link href="/resume-now">
                                            <button
                                                className="my-3 bg-regal-blue text-white font-semibold px-8 py-3 rounded-lg w-full sm:w-auto"
                                            >Create A Resume
                                            </button>
                                        </Link>
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
                {/* <div>
                    <div className="text-center text-5xl font-bold text-regal-blue my-10">
                        <h2 className="flex flex-col">
                            <span>Land your dream job with the</span>
                            <span>help of our resume builder</span>
                        </h2>
                    </div>
                    <div>
                        
                    </div>
                </div> */}
            </div>
            <footer className="bg-regal-blue">
                {/* <div className="grid md:grid-cols-4 p-10 container mx-auto">
                    <div className="mb-4">
                        <Image
                            src="/images/Jobbox.me_white.svg"
                            alt="Jobbox Logo"
                            width={200}
                            height={80}
                        />
                        <p className="text-white">Use our free resume templates to create free professional resumes.</p>
                    </div>
                    <div className="text-white mb-4">
                        <h1 className="font-bold uppercase pb-5">Education</h1>
                        <ul>
                            <li className="mb-2">Credit Education</li>
                            <li className="mb-2">Homeownership</li>
                            <li className="mb-2">Resume Building</li>
                        </ul>
                    </div>
                    <div className="text-white mb-4">
                        <h1 className="font-bold uppercase pb-5">Recent Blog Post</h1>
                        <ul className="flex">
                            <li>
                                <Image
                                    src="/images/homePost.jpg"
                                    alt="Home Post"
                                    width={90}
                                    height={90}
                                />
                            </li>
                            <li className="flex flex-col w-3/4 px-2 hover:underline text-blue-200">
                                <Link href="/">
                                    <a
                                        title="Zillo slams the breaks on home buying as it struggles to manage its backlog of inventory"
                                        className="text-sm"
                                    >
                                        Zillo slams the breaks on home buying...
                                    </a>
                                </Link>
                                <a
                                    title="May 18th, 2021"
                                    className="text-xs"
                                >
                                    May 18th, 2021
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white ">
                        <h1 className="font-bold uppercase pb-5">Stay Updated</h1>
                        <ul>
                            <li>Credit Education</li>
                            <li>Homeownership</li>
                            <li>Resume Building</li>
                        </ul>
                    </div>
                </div> */}
                <div className="pt-5 text-white relative bottom-0 bg-regal-blue text-center pb-8">
                    &copy; 2021 Jobbox.me
                </div>
            </footer>
        </>
    );
}

export default MainBody;