const Education = (props) => {
    const userInDB = props.resume.find((data) => data.username === props.user.nickname);
    return (
        <>
            {userInDB != undefined ? props.resume.map((data, index) => {
                if (data.username === props.user.nickname) {
                    return (
                        <div key={index} className="pb-8">
                            <div className="border-b-4 border-regal-blue">
                                <h1 className="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Education</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div className="flex flex-col text-base pl-4 pt-2">
                                            <p className="text-blue-800 text-lg">{data.school_1.degree}</p>
                                            <p className="text-regal-blue font-semibold">{data.school_1.school}</p>
                                            <p className="text-blue-700 text-sm">{data.school_1.start} - {data.school_1.end === "" && data.school_1.start === "" ? "" : data.school_1.end === "" ? "Current" : data.school_1.end}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col text-base pl-4 pt-2">
                                            <p className="text-blue-800 text-lg">{data.school_2.degree}</p>
                                            <p className="text-regal-blue font-semibold">{data.school_2.school}</p>
                                            <p className="text-blue-700 text-sm">{data.school_2.start} - {data.school_2.end === "" && data.school_2.start === "" ? "" : data.school_2.end === "" ? "Current" : data.school_2.end}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col text-base pl-4 pt-2">
                                            <p className="text-blue-800 text-lg">{data.school_3.degree}</p>
                                            <p className="text-regal-blue font-semibold">{data.school_3.school}</p>
                                            <p className="text-blue-700 text-sm">{data.school_3.start} - {data.school_3.end === "" && data.school_3.start === "" ? "" : data.school_3.end === "" ? "Current" : data.school_3.end}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                };
            }
            ) : (
                <div className="pb-8">
                    <div className="border-b-4 border-regal-blue">
                        <h1 className="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Education</h1>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div className="flex flex-col text-base pl-4 pt-2">
                                    <p className="text-blue-800 text-lg">B.S. Business Administration and Accounting</p>
                                    <p className="text-regal-blue font-semibold">Boston University</p>
                                    <p className="text-blue-700 text-sm">05/1999 - 05/2003</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Education;