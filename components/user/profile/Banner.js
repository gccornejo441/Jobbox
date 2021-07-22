import Image from "next/image";

const Banner = (props) => {
    return (
        <>
            {props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div className="m-5 md:flex">
                            <div className="flex justify-center">
                                <Image src="/images/no-picture.jpg" height={200} width={200} className="rounded-full" />
                            </div>
                            <div className="flex flex-col py-3 px-4 ">
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
                        </div>
                    );
                }
            })}
        </>
    );
}

export default Banner;