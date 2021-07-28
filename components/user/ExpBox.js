

const ExpBox = (props) => {
    const dutyBoxOne = (
        <ul>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_1_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_1.job_1_duty[0] : ""} id="job_1_duty" name="job_1_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_1_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_1.job_1_duty[1] : ""} id="job_1_duty" name="job_1_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_1_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_1.job_1_duty[2] : ""} id="job_1_duty" name="job_1_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_1_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_1.job_1_duty[3] : ""} id="job_1_duty" name="job_1_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
        </ul>
    );
    const dutyBoxTwo = (
        <ul>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_2_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_2.job_2_duty[0] : ""} id="job_2_duty" name="job_2_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_2_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_2.job_2_duty[1] : ""} id="job_2_duty" name="job_2_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_2_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_2.job_2_duty[2] : ""} id="job_2_duty" name="job_2_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_2_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_2.job_2_duty[3] : ""} id="job_2_duty" name="job_2_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
        </ul>
    );
    const dutyBoxThree = (
        <ul>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_3_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_3.job_3_duty[0] : ""} id="job_3_duty" name="job_3_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_3_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_3.job_3_duty[1] : ""} id="job_3_duty" name="job_3_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_3_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_3.job_3_duty[2] : ""} id="job_3_duty" name="job_3_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
            <li>
                <div className="grid mb-4">
                    <label className="py-2" htmlFor="job_3_duty"></label>
                    <input defaultValue={props.userInfo ? props.userInfo.job_3.job_3_duty[3] : ""} id="job_3_duty" name="job_3_duty" placeholder=" Duty" type="text" className="p-1 text-lg font-bold text-blue-900 bg-white md:bg-gray-100 border border-gray-200 rounded-md pr-2" maxLength="150" />
                </div>
            </li>
        </ul>
    );

    return (
        <>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_1">Company Name</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_1.job_name_1 : ""} id="job_name_1" name="job_name_1" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_1">Position title</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_1.job_title_1 : ""} id="job_title_1" name="job_title_1" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_1">Year Started</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_1.job_start : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_1" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_1">Year Ended</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_1.job_end : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_1" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                {dutyBoxOne}
            </span>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_2">Company Name</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_2.job_name_2 : ""} id="job_name_2" name="job_name_2" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_2">Position title</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_2.job_title_2 : ""} id="job_title_2" name="job_title_2" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_2">Year Started</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_2.job_start : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_2" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_2">Year Ended</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_2.job_end : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_2" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                {dutyBoxTwo}
            </span>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_name_3">Company Name</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_3.job_name_3 : ""} id="job_name_3" name="job_name_3" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_title_3">Position title</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_3.job_title_3 : ""} id="job_title_3" name="job_title_3" className="p-1 text-lg font-bold text-blue-900 bg-gray-50 border border-gray-200 rounded-md" rows="4" cols="70" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-5 mt-4 md:mt-0 md:mb-0  mb-7">
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_start_3">Year Started</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_3.job_start : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_start_3" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="py-2" htmlFor="job_date_end_3">Year Ended</label>
                        <input defaultValue={props.userInfo ? props.userInfo.job_3.end : ""} className="py-2 inline-block align-middle text-sm font-medium text-blue-900 md:bg-gray-100 border border-gray-200 rounded-md pl-2 " type="date" name="job_date_end_3" placeholder="" />
                    </div>
                </div>
            </div>
            <span>
                {dutyBoxThree}
            </span>
        </>
    )
}

export default ExpBox;