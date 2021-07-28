import { VscDebugBreakpointLog } from "react-icons/vsc";

const WorkExp = (props) => {
    const userInDB = props.resume.find((data) => data.username === props.user.nickname);
    const workBody = (
        <>
            <div>
                <div>
                    {props.resume.map((data, index) => {
                        if (data.username === props.user.nickname) {
                            if (data.job_1.job_name_1 != "" && data.job_1.job_name_1 != "") {
                                return (
                                    <div key={index}>
                                        <div className="border-b-4 border-regal-blue">
                                            <h1 className="text-2xl text-regal-blue uppercase font-bold px-6 pt-4">Work Experience</h1>
                                        </div>
                                        <ul key={data._id}>
                                            <li className="text-xl text-blue-700 font-bold px-6 pt-2">
                                                {data.job_1.job_name_1 === "" ? false : data.job_1.job_name_1}
                                            </li>
                                            <li className="text-xl text-regal-blue px-6 pt-2">
                                                {data.job_1.job_title_1 === "" ? false : data.job_1.job_title_1}
                                            </li>
                                            <li className="text-sm text-regal-blue px-6 pt-2">
                                                {data.job_1.job_start.slice(0, -3).replace('-', '/')} {data.job_1.job_start === "" && data.job_1.job_end === "" ? false : data.job_1.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_1.job_end.slice(0, -3).replace('-', '/')}
                                            </li>
                                            <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                                                {data.job_1.job_1_duty === null ? false : data.job_1.job_1_duty.map((duty, index) => {
                                                    return (
                                                        <div key={index} className="flex pt-5">
                                                            <div className="mt-1">
                                                                {duty === "" ? false : <VscDebugBreakpointLog className="h-4 w-4" />}
                                                            </div>
                                                            <span>
                                                                {duty}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </li>
                                        </ul>
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
                <div>{props.resume.map((data, index) => {
                    if (data.username === props.user.nickname) {
                        if (data.job_2.job_name_2 != "" && data.job_2.job_name_2 != "") {
                            return (
                                <ul key={index}>
                                    <li className="text-xl text-blue-700 font-bold px-6 pt-2">
                                        {data.job_2.job_name_2 === "" ? false : data.job_2.job_name_2}
                                    </li>
                                    <li className="text-xl text-regal-blue px-6 pt-2">
                                        {data.job_2.job_title_2 === "" ? false : data.job_2.job_title_2}
                                    </li>
                                    <li className="text-sm text-regal-blue px-6 pt-2">
                                        {data.job_2.job_start.slice(0, -3).replace('-', '/')} {data.job_2.job_start === "" && data.job_2.job_end === "" ? false : data.job_2.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_2.job_end.slice(0, -3).replace('-', '/')}
                                    </li>
                                    <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                                        {data.job_2.job_2_duty === null ? false : data.job_2.job_2_duty.map((duty, index) => {
                                            return (
                                                <div key={index} className="flex pt-5">
                                                    <div className="mt-1">
                                                        {duty === "" ? false : <VscDebugBreakpointLog className="h-4 w-4" />}
                                                    </div>
                                                    <span>
                                                        {duty}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </li>
                                </ul>
                            );
                        };
                    }
                }
                )}</div>
                <div>
                    {props.resume.map((data, index) => {
                        if (data.username === props.user.nickname) {
                            if (data.job_3.job_name_3 != "" && data.job_3.job_name_3 != "") {
                                return (
                                    <ul key={index}>
                                        <li className="text-xl text-blue-700 font-bold px-6 pt-2">
                                            {data.job_3.job_name_3 === "" ? false : data.job_3.job_name_3}
                                        </li>
                                        <li className="text-xl text-regal-blue px-6 pt-2">
                                            {data.job_3.job_title_3 === "" ? false : data.job_3.job_title_3}
                                        </li>
                                        <li className="text-sm text-regal-blue px-6 pt-2">
                                            {data.job_3.job_start.slice(0, -3).replace('-', '/')} {data.job_3.job_start === "" && data.job_3.job_end === "" ? false : data.job_3.job_end === "" ? "-" + " " + "Current" : "-" + " " + data.job_3.job_end.slice(0, -3).replace('-', '/')}
                                        </li>
                                        <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                                            {data.job_3.job_3_duty === null ? false : data.job_3.job_3_duty.map((duty, index) => {
                                                return (
                                                    <div key={index} className="flex pt-5">
                                                        <div className="mt-1">
                                                            {duty === "" ? false : <VscDebugBreakpointLog className="h-4 w-4" />}
                                                        </div>
                                                        <span>
                                                            {duty}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </li>
                                    </ul>
                                );
                            }
                        }
                    })}
                </div>
            </div>
        </>
    );

    return (
        <>
            {userInDB != undefined ? (
                <>
                    {workBody}
                </>
            ) : (
                <div>
                    <div className="border-b-4 border-regal-blue">
                        <h1 className="text-2xl text-regal-blue uppercase font-bold px-6 pt-4">Work Experience</h1>
                    </div>
                    <ul>
                        <li className="text-xl text-blue-700 font-bold px-6 pt-2">
                            Bookkeeper
                        </li>
                        <li className="text-xl text-regal-blue px-6 pt-2">
                            Richman Sachs LLC.
                        </li>
                        <li className="text-sm text-regal-blue px-6 pt-2">
                            2005/05 - Current
                        </li>
                        <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                            <div className="flex pt-2">
                                <div className="mt-1">
                                    <VscDebugBreakpointLog className="h-4 w-4" />
                                </div>
                                <span>
                                    Supervise a staff of 25 and acted as a liaison among owners, employess, and clients by promoting open communication.
                                </span>
                            </div>
                        </li>
                        <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                            <div className="flex pt-2">
                                <div className="mt-1">
                                    <VscDebugBreakpointLog className="h-4 w-4" />
                                </div>
                                <span>
                                    Handle Accounts Payable/Receivable and expense control procedures, including reconsiliation.
                                </span>
                            </div>
                        </li>
                        <li className="text-md text-regal-blue px-6 pt-2 max-w-xl flex flex-col">
                            <div className="flex pt-2">
                                <div className="mt-1">
                                    <VscDebugBreakpointLog className="h-4 w-4" />
                                </div>
                                <span>
                                    Maintain human resources files and actions, including W-2 withholdings, benefits, and bi-weekly payroll processing.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default WorkExp;