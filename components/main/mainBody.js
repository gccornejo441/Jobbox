import Head from "next/head";

const MainBody = () => {
    return (
        <>
            <Head>
                <title>Jobbox</title>
            </Head>
            <div className="flex flex-col mt-16 relative h-huge">
                <div className="bg-hero-pattern h-screen bg-cover bg-center flex justify-center">
                    <div className="bg-gray-50 bg-opacity-30 w-full flex justify-center">
                        <div className="container z-10 flex flex-row-reverse pr-3 sm:pr-0">
                            <div className="flex flex-col mt-36 md:my-12 sm:mr-12  md:mr-24 xl:mr-24 pr-4 sm:pr-8 text-right">
                                <h1 className="text-6xl md:text-7xl lg:text-8xl text-regal-blue font-bold my-2">Jobbox</h1>
                                <p className="text-regal-blue text-md md:text-2xl my-2">Professional resumes made easy</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MainBody;