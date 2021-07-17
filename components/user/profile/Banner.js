import Image from "next/image";

const Banner = (props) => {
    return (
        <>
            {props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div class="m-5 flex">
                            <Image src="/images/profile_picture.jpg" height={200} width={200} class="rounded-full" />
                            <div class="flex flex-col py-3 px-4 ">
                                <span class="flex">
                                    <h1 class="text-lg font-bold text-white">{data.job_1.job_title_1}</h1>
                                    <h2 class="text-sm text-gray-400 mt-1 mx-2">
                                        {data.job_1.job_name_1}
                                    </h2>
                                </span>
                                <div class="w-full my-5"></div>
                                <div class="text-sm max-w-prose">
                                    <p class="text-white">
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