import { VscDebugBreakpointLog } from "react-icons/vsc";

const WorkExp = (props) => {
    return (
        <>
            <div class="border-b-4 border-regal-blue">
                <h1 class="text-2xl text-regal-blue uppercase font-bold pl-4 pt-4">Work Experience</h1>
            </div>
            <div>
                {props.resume.map((data) => {
                    if (data.username === props.user.nickname) {
                    return (
                        <>
                            <ul>
                                <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                    {data.job_1}
                                </li>
                                <li class="text-xl text-regal-blue pl-4 pt-2">
                                    USA Homeownership Foundation
                                </li>
                                <li class="text-sm text-regal-blue pl-4 pt-2">
                                    {data.job_date_start_1} - {data.job_date_end_1}
                                </li>
                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                    <div class="mt-1">
                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                    </div>
                                    <p>
                                        {data.duty_1[0]}
                                    </p>
                                </li>
                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                    <div class="mt-1">
                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                    </div>
                                    <p>
                                    {data.duty_2[0]}
                                    </p>
                                </li>
                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                    <div class="mt-1">
                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                    </div>
                                    <p>
                                    {data.duty_3[0]}
                                    </p>
                                </li>
                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                    <div class="mt-1">
                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                    </div>
                                    <p>
                                    {data.duty_4[0]}
                                    </p>
                                </li>
                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                    <div class="mt-1">
                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                    </div>
                                    <p>
                                    {data.duty_5[0]}
                                    </p>
                                </li>
                            </ul>
                        </>
                    )
                    }
                })}
            </div>
        </>
    );
}

export default WorkExp;