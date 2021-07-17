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
                                        {data.job_1.job_name_1 === "" ? false : data.job_1.job_name_1}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.job_1.job_title_1 === "" ? false : data.job_1.job_title_1}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                    {data.job_1.job_start} {data.job_1.job_start === "" && data.job_1.job_end === "" ? false : data.job_1.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_1.job_end}
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
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex flex-col">
                                        {data.job_1.job_1_duty.map((duty) => {
                                            return (
                                                <div class="flex">
                                                    <div class="mt-1">
                                                        {duty === "" ? false : <VscDebugBreakpointLog class="h-4 w-4" />}
                                                    </div>
                                                    <span>
                                                        {duty}
                                                    </span>
                                                </div>
                                            )
                                        })}
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
                                        {data.job_2.job_name_2 === "" ? false : data.job_2.job_name_2}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.job_2.job_title_2 === "" ? false : data.job_2.job_title_2}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                    {data.job_2.job_start} {data.job_2.job_start === "" && data.job_2.job_end === "" ? false : data.job_2.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_2.job_end}
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
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex flex-col">
                                        {data.job_2.job_2_duty.map((duty) => {
                                            return (
                                                <div class="flex">
                                                    <div class="mt-1">
                                                        {duty === "" ? false : <VscDebugBreakpointLog class="h-4 w-4" />}
                                                    </div>
                                                    <span>
                                                        {duty}
                                                    </span>
                                                </div>
                                            )
                                        })}
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
                                        {data.job_3.job_name_3 === "" ? false : data.job_3.job_name_3}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.job_3.job_title_3 === "" ? false : data.job_3.job_title_3}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                        {data.job_3.job_start} {data.job_3.job_start === "" && data.job_3.job_end === "" ? false : data.job_3.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_3.job_end}
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
                                    <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex flex-col">
                                        {data.job_3.job_3_duty === null ? false : data.job_3.job_3_duty.map((duty) => {
                                            return (
                                                <div class="flex">
                                                    <div class="mt-1">
                                                        {duty === "" ? false : <VscDebugBreakpointLog class="h-4 w-4" />}
                                                    </div>
                                                    <span>
                                                        {duty}
                                                    </span>
                                                </div>
                                            )
                                        })}
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