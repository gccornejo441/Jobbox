import Image from "next/image";

const Banner = (props) => {
    const userInDB = props.resume.find((data) => data.username === props.user.nickname )

    return (
        <>
            {userInDB != undefined ? (props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div key={data._id} className="m-5 md:flex">
                            {data.image != true ?
                                (
                                    <>
                                        <div className="flex flex-col py-3 px-4">
                                            <div className="flex justify-center pb-5">
                                                <span className="text-3xl text-white font-bold mx-1 tracking-widest">
                                                    {data.first_name}
                                                </span>
                                                <span className="text-3xl text-white font-bold mx-1 tracking-widest">
                                                    {data.last_name}
                                                </span>
                                            </div>
                                            <div className="pb-6 mx-auto md:flex justify-center">
                                                <h1 className="text-lg font-bold text-white">
                                                    {data.job_1.job_title_1}
                                                </h1>
                                                <h2 className="text-sm text-gray-400 mt-1 mx-2">
                                                    {data.job_1.job_name_1}
                                                </h2>
                                            </div>
                                            <div className="text-center text-sm max-w-prose">
                                                <p className="text-white">
                                                    {data.about_me === "" ? false : data.about_me}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center">
                                            <Image src="/images/no-picture.jpg" height={200} width={200} className="rounded-full" />
                                        </div>
                                        <div className="flex flex-col py-3 px-4">
                                            <span className="text-center md:text-left md:flex">
                                                <h1 className="text-lg font-bold text-white">
                                                    {data.job_1.job_title_1}
                                                </h1>
                                                <h2 className="text-sm text-gray-400 mt-1 mx-2">
                                                    {data.job_1.job_name_1}
                                                </h2>
                                            </span>
                                            <div className="w-full my-5"></div>
                                            <div className="text-center md:text-left text-sm max-w-prose">
                                                <p className="text-white">
                                                    {data.about_me === "" ? false : data.about_me}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                        </div>
                    );
                }
            })) : (
                <>
                    <div className="flex flex-col py-3 px-4">
                        <div className="flex justify-center pb-5">
                            <span className="text-3xl text-white font-bold mx-1 tracking-widest">
                                Richard
                            </span>
                            <span className="text-3xl text-white font-bold mx-1 tracking-widest">
                                Wright
                            </span>
                        </div>
                        <div className="pb-6 mx-auto md:flex justify-center">
                            <h1 className="text-lg font-bold text-white">
                            Bookkeeper
                            </h1>
                            <h2 className="text-sm text-gray-400 mt-1 mx-2">
                            Richman Sachs LLC.
                            </h2>
                        </div>
                        <div className="text-center text-sm max-w-prose">
                            <p className="text-white">
                                Results-oriented, motivated professional and office manager with over 20 years of experience in sales, marketing, negotiating, and customer service.  Daily office management including office operations, staff training, sales staff training, and implementation of office procedures for excellent customer service and product flow to increase sales with new customers and to build the current customer base.
                            </p>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}

export default Banner;