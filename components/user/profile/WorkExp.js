import { VscDebugBreakpointLog } from "react-icons/vsc";

const WorkExp = (props) => {
    return (
        <>
            <div class="border-b-4 border-regal-blue">
                <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Work Experience</h1>
            </div>
            <div>
                <div>
                    {props.resume.map((data) => {
                        if (data.username === props.user.nickname) {
                            return (
                                <ul>
                                    <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                        {data.job_title === null ? false : data.job_title.job_1[0]}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.job_title === null ? false : data.job_title.job_1[1]}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                        {data.job_1.job_start} - {data.job_1.job_start === "" && data.job_1.job_end === "" ? "" : data.job_1.job_end === "" ? "Current" : data.job_1.job_end}
                                    </li>
                                </ul>
                            );
                        }
                    })}
                </div>
                <div>{props.resume.map((data) => {
                    if (data.username === props.user.nickname) {
                        return (
                            <>
                                <ul key={props.resume._id}>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_1 === null ? false : (
                                            typeof data.duties.duty_1 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_1}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_1[0]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_2 === null ? false : (
                                            typeof data.duties.duty_2 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_2}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_2[0]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_3 === null ? false : (
                                            typeof data.duties.duty_3 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_3}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_3[0]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_4 === null ? false : (
                                            typeof data.duties.duty_4 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_4}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_4[0]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_5 === null ? false : (
                                            typeof data.duties.duty_5 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_5}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_5[0]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                </ul>
                            </>
                        );
                    };
                })}</div>
                <div>
                    {props.resume.map((data) => {
                        if (data.username === props.user.nickname) {
                            return (
                                <ul>
                                    <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                        {data.job_title.job_2 === null ? false : data.job_title.job_2[0]}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.job_title.job_2 === null ? false : data.job_title.job_2[1]}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                        {data.job_2.job_start} - {data.job_2.job_end === "" ? "Current" : data.job_2.job_end}
                                    </li>
                                </ul>
                            );
                        }
                    })}
                </div>
                <div>{props.resume.map((data) => {
                    if (data.username === props.user.nickname) {
                        return (

                            <>
                                <ul key={props.resume._id}>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_1 === null ? false : (
                                            typeof data.duties.duty_1 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_1}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_1[1]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_2 === null ? false : (
                                            typeof data.duties.duty_2 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_2}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_2[1]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_3 === null ? false : (
                                            typeof data.duties.duty_3 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_3}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_3[1]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_4 === null ? false : (
                                            typeof data.duties.duty_4 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_4}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_4[1]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                        {data.duties.duty_5 === null ? false : (
                                            typeof data.duties.duty_5 === "string" ? (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_5}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <span>
                                                        {data.duties.duty_5[1]}
                                                    </span>
                                                </>
                                            )
                                        )}
                                    </li>
                                </ul>
                            </>
                        );
                    };
                })}</div>
            </div>
        </>
    );
}

export default WorkExp;