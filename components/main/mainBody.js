import Head from 'next/head'
import Image from 'next/image'
import resumePic from '../../public/images/resume-title.svg'
import Link from 'next/link'
import resBuilderChar from '../../public/images/resBuilderChar.svg'
import linkedinlogo from '../../public/images/linkedin.svg'
import twitterlogo from '../../public/images/twitter.svg'
import facebooklogo from '../../public/images/facebook.svg'

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobbox</title>
            </Head>
            <div className="flex flex-col relative">
                <div className="bg-hero-pattern bg-cover bg-center h-screen flex justify-center">
                    <div className="bg-gray-50 bg-opacity-60 w-full flex justify-center">
                        <div className="flex self-center mb-16 sm:mb-18 flex-col lg:flex-row px-5 sm:pr-0 w-full">
                            <div className="text-regal-blue lg:w-1/2">
                                <div className="lg:px-16 xl:w-3/4 mx-auto sm:mb-8 md:mb-0 md:mt-36">
                                    <h1 className="text-left font-extrabold text-2xl sm:text-4xl lg:text-5xl font-sans leading-normal">Build a professional resume for free</h1>
                                    <h2 className="my-2 text-left font-bold text-md sm:text-lg lg:text-xl">Use our free resume designs to build free professional resumes.</h2>
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
                            <div className="flex lg:w-1/2">
                                <Image
                                    src={resumePic}
                                    alt="Picture of a sample resume"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center px-5 my-24">
                    <div>
                        <Image
                            src={resBuilderChar}
                            alt="Resume Builder with one eyed monster"
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="self-center items-baseline text-center text-3xl md:text-5xl font-bold text-regal-blue my-10 h-1/2">
                        <h2 className="flex flex-col">
                            <span>Land your dream job with the</span>
                            <span>help of our resume builder</span>
                        </h2>
                    </div>
                </div>
            </div>
            <footer className="bg-regal-blue">
                <div className="grid md:grid-cols-4 px-10 py-24 container mx-auto">
                    <div className="mb-4">
                        <Image
                            src="/images/Jobbox.me_white.svg"
                            alt="Jobbox Logo"
                            width={200}
                            height={80}
                        />
                        <p className="text-white">Use our free resume designs to build free professional resumes.</p>
                    </div>
                    <div className="text-white mb-4">
                        <h1 className="font-bold uppercase pb-5">Features</h1>
                        <ul>
                            <li className="mb-2">
                                <Link href="/resume-now">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <a>Resume Education</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white mb-4">
                        <h1 className="font-bold uppercase pb-5">Tools</h1>
                        <ul>
                            <li className="mb-2">
                                <Link href="/calculators/ami">
                                    <a>AMI Calculator</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-5 text-white relative bottom-0 bg-regal-blue text-center pb-8">
                    &copy; 2022 Jobbox.me
                </div>
            </footer>
        </>
    );
}

export default MainBody;