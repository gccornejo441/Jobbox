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
                                <div>
                                    <div>
                                        {data.jobs[0].job.job_employer}
                                    </div>
                                    <div>
                                        {data.jobs[0].job.job_position}
                                    </div>
                                </div>
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
                                                <div class="flex">
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {duty}
                                                        </p>
                                                    </div>
                                                </div>
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
                                <div>
                                    <div>
                                        {data.jobs[1].job.job_employer}
                                    </div>
                                    <div>
                                        {data.jobs[1].job.job_position}
                                    </div>
                                </div>
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
                                                <div class="flex">
                                                    <div class="mt-1">
                                                        <VscDebugBreakpointLog class="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {duty}
                                                        </p>
                                                    </div>
                                                </div>
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