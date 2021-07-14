const Education = (props) => {
    return (
        <>
            {props.resume.map((data) => {
                if (data.username === props.user.nickname) {
                    return (
                        <>
                            <div class="pb-8">
                                    <div class="border-b-4 border-regal-blue">
                                        <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Education</h1>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                    <p class="text-blue-800 text-lg">{data.school_1.degree}</p>
                                                    <p class="text-regal-blue font-semibold">{data.school_1.school}</p>
                                                    <p class="text-blue-700 text-sm">{data.school_1.start} - {data.school_1.end === "" && data.school_1.start === "" ? "" : data.school_1.end === "" ? "Current" : data.school_1.end}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                <p class="text-blue-800 text-lg">{data.school_2.degree}</p>
                                                    <p class="text-regal-blue font-semibold">{data.school_2.school}</p>
                                                    <p class="text-blue-700 text-sm">{data.school_2.start} - {data.school_2.end === "" && data.school_2.start === "" ? "" : data.school_2.end === "" ? "Current" : data.school_2.end}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="flex flex-col text-base pl-4 pt-2">
                                                <p class="text-blue-800 text-lg">{data.school_3.degree}</p>
                                                    <p class="text-regal-blue font-semibold">{data.school_3.school}</p>
                                                    <p class="text-blue-700 text-sm">{data.school_3.start} - {data.school_3.end === "" && data.school_3.start === "" ? "" : data.school_3.end === "" ? "Current" : data.school_3.end}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </>
                    );
                };
            }
            )}
        </>
    );
}

export default Education;