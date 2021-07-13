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
                                        {data.jobs[0].job.job_employer}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.jobs[0].job.job_position}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                    {data.jobs[0].job_start} - {data.jobs[0].job_end === null ? "Current" : data.jobs[0].job_end}
                                    </li>
                                </ul>
                            );
                        }
                    })}
                </div>
                <div>{props.resume.map((data) => {
                    if (data.username === props.user.nickname) {
                        return (
                            data.jobs[0].duties.map((duty) => {
                                if (duty !== null) {
                                    return (
                                        <>
                                            <ul key={props.resume._id}>
                                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {duty}
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </>
                                    );
                                }
                            })
                        );
                    };
                })}</div>
                <div>
                    {props.resume.map((data) => {
                        if (data.username === props.user.nickname) {
                            return (
                                <ul>
                                    <li class="text-xl text-blue-700 font-bold pl-4 pt-2">
                                        {data.jobs[1].job.job_employer}
                                    </li>
                                    <li class="text-xl text-regal-blue pl-4 pt-2">
                                        {data.jobs[1].job.job_position}
                                    </li>
                                    <li class="text-sm text-regal-blue pl-4 pt-2">
                                    {data.jobs[1].job_start} - {data.jobs[1].job_end === null ? "Curren" : data.jobs[1].job_end}
                                    </li>
                                </ul>
                            );
                        }
                    })}
                </div>
                <div>{props.resume.map((data) => {
                    if (data.username === props.user.nickname) {
                        return (
                            data.jobs[1].duties.map((duty) => {
                                if (duty !== null) {
                                    return (
                                        <>
                                            <ul key={props.resume._id}>
                                                <li class="text-md text-regal-blue pl-4 pt-2 max-w-xl flex">
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {duty}
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </>
                                    );
                                }
                            })
                        );
                    };
                })}</div>
            </div>
        </>
    );
}

export default WorkExp;